function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");

    //The visibility of the headshot image is based on the menu state.
    const headshotImage = document.getElementById("headshot");
    headshotImage.style.display = menu.classList.contains("open") ? "none" : "block";
}

function hideImage() {
    //Headshot hidden.
    const headshotImage = document.getElementById("headshot");
    headshotImage.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
    //Hide all sections and the headshot image on page load.
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        section.style.display = "none";
    });

    const headshotImage = document.getElementById("headshot");
});

function showAboutContent() {
    //Show the About section and hide the headshot image.
    showContent("about-section");
    hideImage();
}

function showExperienceContent() {
    //Show the Experience section and hide the headshot image.
    showContent("experience-section");
    hideImage();
}

function showProjectsContent() {
    //Show the Projects section and hide the headshot image.
    showContent("projects-section");
    hideImage();
}


function showContent(sectionId) {
    //Hide all sections.
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        section.style.display = "none";
    });

    //Show the selected section.
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = "block";
    }
}
