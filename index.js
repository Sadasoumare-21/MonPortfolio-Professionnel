Form.addEventListener("submit", async (e) => {
    e.preventDefault();


    const nom = document.getElementById("nom").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const affic = document.getElementById("affic");

    if (nom === "" || email === "" || message === "") {
        affic.innerHTML = "Veuillez remplir tous les champs.";
    }
    
    else if (!email.value.includes("@") || !email.value.includes(".")) {
        affic.innerHTML = "Veuillez entrer une adresse e-mail valide.";
        affic.style.color = "red";
    }
    else {
    affic.innerHTML = "Merci ! Votre message a été envoyé avec succès.";
    affic.style.color = "green";
    } 
});