function Envoyer() {
    const nom = document.getElementById("nom");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    const messageAlert = document.getElementById("alert");

    if (nom.value == "" || email.value == "" || message.value == "") {
        messageAlert.textContent = "Veuillez remplir tous les champs.";
        messageAlert.className = "text-red-500 mt-3 text-center font-semibold";
        return;
    } else {
        messageAlert.textContent = "Merci pour votre message, je vous répondrai dans les plus brefs délais !";
        messageAlert.className = "text-green-500 mt-3 text-center font-semibold";
    }
}
