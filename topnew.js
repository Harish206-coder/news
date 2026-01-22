document.addEventListener("DOMContentLoaded", function() {
    const signupLink = document.getElementById("signup-link");
    const signupForm = document.getElementById("signup-form");
    signupLink.addEventListener("click", function(e) {
        e.preventDefault(); 
        if (signupForm.style.display === "none" || signupForm.style.display === "") {
            signupForm.style.display = "block"; 
        } else {
            signupForm.style.display = "none";
        }
    });
    signupForm.querySelector("form").addEventListener("submit", function(e) {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        alert("Signup successful for " + username + " (" + email + ")");
        signupForm.style.display = "none"; 
        
    });
});
