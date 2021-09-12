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
    const text = document.getElementById("text");
    const input = document.getElementById("input").value;
    const get = document.querySelector(".sx");

    let newDiv = document.createElement('div');
    newDiv.classList.add("new__cont");



    if (input === "") {
        text.textContent = "please add a link";
        get.classList.add('error-message');

    } else {
        document.getElementById('input').value = "";
        change.classList.toggle("advanced__change")
        drop.classList.toggle("drop")


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

                console.log(short)
                //check console for Processed URL or errors

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

const copyBtn = document.querySelectorAll('.x');
copyBtn.forEach(item => {
    item.addEventListener('click', (e) => {
        navigator.clipboard.writeText(short.textContent);

        // short.innerHTML = document.getSelection();
        // shortS.innerHTML = document.getSelection();
        item.textContent = `Copied!`
        console.log(document.getSelection());
    });


});






