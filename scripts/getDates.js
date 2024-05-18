// getDates.js

// Get the current year
const currentYear = new Date().getFullYear();

// Get the last modified date of the document
const lastModifiedDate = new Date(document.lastModified);

// Get the last modified date in a formatted string
const formattedLastModifiedDate = lastModifiedDate.toLocaleDateString();

// Get the p element in the footer
const lastModified = document.getElementById("lastModified");
lastModified.innerHTML = formattedLastModifiedDate;

// responsive menu

const hambugerElement = document.querySelector("#mybutton");
const navElement = document.querySelector(".menuLinks");

hambugerElement.addEventListener("click", () => {
    navElement.classList.toggle("open");
    hambugerElement.classList.toggle("open");
});

// Dark button

const myBtn = document.querySelector("#darkBtn");

myBtn.addEventListener("click", () => {
    main.classList.toggle("dark");
})