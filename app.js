// app.js
console.log("MiniSite chargé !");

document.addEventListener("DOMContentLoaded", function () {

    // Contact form
    const contactForm = document.querySelector(".contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;

            if (name && email && message) {
                alert("Merci " + name + " ! Votre message a été envoyé.");
                contactForm.reset();
            } else {
                alert("Veuillez remplir tous les champs.");
            }
        });
    }

    // Login form
    const loginForm = document.querySelector(".login-form");

    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const username = document.getElementById("username").value;

            if (username) {
                alert("Bienvenue " + username + " !");
            }
        });
    }

});