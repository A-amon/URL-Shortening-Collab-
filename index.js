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
