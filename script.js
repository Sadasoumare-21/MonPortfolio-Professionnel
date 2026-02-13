function Envoyer() {
    const nom = document.getElementById("nom");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    const affic = document.getElementById("affic");

    if (nom.value == "" || email.value == "" || message.value == "") {
        affic.textContent = "Veuillez remplir tous les champs.";
        return;
    } else {
        affic.textContent = "Merci pour votre message, je vous répondrai dans les plus brefs délais !";
    }

}