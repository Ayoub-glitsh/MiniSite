// app.js
console.log("MiniSite application chargée avec succès!");

// Fonction pour gérer la soumission du formulaire de contact
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (name && email && message) {
                alert(`Merci ${name}! Votre message a été envoyé.`);
                contactForm.reset();
            } else {
                alert('Veuillez remplir tous les champs du formulaire.');
            }
        });
    }
    
    // Fonction pour gérer la soumission du formulaire de login
    const loginForm = document.querySelector('.login-form');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            if (username && password) {
                alert(`Bienvenue ${username}! Connexion réussie.`);
                loginForm.reset();
            } else {
                alert('Veuillez remplir tous les champs.');
            }
        });
    }
    
    // Navigation active
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.style.fontWeight = 'bold';
            link.style.color = '#e8491d';
        }
    });
});