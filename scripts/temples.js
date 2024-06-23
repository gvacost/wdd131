const currentYear = new Date().getFullYear();

document.getElementById("currentyear").textContent = currentYear;

const lastModified = document.lastModified;

document.getElementById("lastmodified").textContent = "Last Modified: " + lastModified;

const nav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    nav.classList.toggle('show');
	hambutton.classList.toggle('show');
});


function updateTitle(event) {
    event.preventDefault();
    const title = event.target.textContent;
    document.querySelector('#main-h2').textContent = title;
}

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.addEventListener('click', updateTitle);
    });
});
