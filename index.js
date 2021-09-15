/**
 * submitting form and featching API shortned data
 */
const form = document.getElementById("form")
let original = document.querySelector(".dropedown__text--or1")
let short = document.querySelector(".dropedown__text--sh1")
let originalS = document.querySelector(".dropedown__text--or2")
let shortS = document.querySelector(".dropedown__text--sh2")
let originalT = document.querySelector(".dropedown__text--or3")
let shortT = document.querySelector(".dropedown__text--sh3")

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const change = document.querySelector(".advanced")
  const drop = document.querySelector(".dropedown-container")
  const text = document.querySelector(".text");
  const input = document.getElementById("input").value;
  const get = document.querySelector(".add");
  const section = document.querySelector(".form-section")
  let newDiv = document.createElement('div');
  newDiv.classList.add("new__cont");


  if (input === "") {
    text.textContent = "please add a link";
    get.classList.add('error-messages');

  } else {
    document.getElementById('input').value = "";
    change.classList.toggle("advanced__change")
    section.classList.toggle(".section-change")

    text.textContent = "please wait... featching  your request !";


    axios.get(`https://api.shrtco.de/v2/shorten?url=${input}`)
      .then((response) => {
        //storing Processed URL in already declared variable
        short.textContent = response.data.result.full_short_link;
        original.textContent = response.data.result.full_share_link
        short.textContent = response.data.result.short_link

        originalS.textContent = response.data.result.full_short_link2
        shortS.textContent = response.data.result.short_link2

        originalT.textContent = response.data.result.full_short_link3
        shortT.textContent = response.data.result.short_link3

        //check console for Processed URL or errors
        drop.classList.toggle("drop")

        text.textContent = "please check and make a copy!";


      })
      .catch((err) => {
        text.textContent = "please add a proper link or check your internet conection";

      });
    form.reset();
  }

});

/**
 * copy shortened URL 
 */

const copyBtn = document.querySelectorAll('.copy');
copyBtn.forEach(item => {
  item.addEventListener('click', (e) => {
    item.classList.toggle('active');
    short.classList.add("bounce");
    navigator.clipboard.writeText(short.textContent);
    shortS.classList.add("bounce-2")
    navigator.clipboard.writeText(shortS.textContent);
    shortT.classList.add("bounce-3")
    navigator.clipboard.writeText(shortT.textContent);
    item.textContent = `Copied!`
    console.log(document.getSelection());
  });


});






const boostSection = document.querySelector(".boost");

/**
 * Observe intersection for .boost section
 * Animate on intersect
 */
const observeBoostIntersect = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // intersects Boost
      if (entry.intersectionRatio > 0) {
        boostSection.classList.add("anim");
      } else {
        boostSection.classList.remove("anim");
      }
    });
  });

  observer.observe(boostSection);
};

observeBoostIntersect();

/**
 * Setup particles js animation
 */
particlesJS.load("particles-js", "particles.json");

//toggle navigation bar
let toggle = document.getElementById("toggle");
toggle.addEventListener("click", function () {
  let nav = document.getElementById("nav");
  if (nav.classList == "nav") {
    nav.classList.add("add-nav");
    let img = document.getElementById("img");
    img.classList.add("rotate");
    img.classList.remove("in-rotate");
    img.setAttribute("src", "assets/icons/icon-close.svg");
  } else {
    nav.classList.remove("add-nav");
    img.setAttribute("src", "assets/icons/icon-hamburger.svg");
    img.classList.add("in-rotate");
    img.classList.remove("rotate");
  }
});
