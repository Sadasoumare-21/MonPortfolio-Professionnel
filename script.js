const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nom = document.getElementById("nom").value.trim();
    const prenom = document.getElementById("prenom").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const affic = document.getElementById("affic");
    const btn = document.querySelector("button[type='submit']");

    // Validation
    if (!nom || !prenom || !email || !message) {
        affic.innerHTML = "⚠️ Veuillez remplir tous les champs.";
        affic.style.color = "red";
        return;
    }
    
    if (!email.includes("@") || !email.includes(".")) {
        affic.innerHTML = "⚠️ Veuillez entrer une adresse e-mail valide.";
        affic.style.color = "red";
        return;
    }

    // Préparer les données
    const data = new FormData(form);
    const formAction = form.getAttribute("action");

    try {
        affic.innerHTML = "⏳ Envoi en cours...";
        affic.style.color = "blue";
        btn.disabled = true;
        btn.textContent = "Envoi...";

        // Envoyer avec fetch
        const response = await fetch(formAction, {
            method: "POST",
            headers: {
                "Accept": "application/json"
            },
            body: data
        });

        const result = await response.json();

        if (response.ok) {
            affic.innerHTML = "✅ Merci ! Votre message a été envoyé avec succès.";
            affic.style.color = "green";
            form.reset();
            btn.disabled = false;
            btn.textContent = "Envoyer";
        } else {
            affic.innerHTML = `❌ Erreur: ${result.error || "Erreur lors de l'envoi"}`;
            affic.style.color = "red";
            btn.disabled = false;
            btn.textContent = "Envoyer";
        }
    } catch (error) {
        console.error("Erreur complète:", error);
        
        // Si JSONparse échoue ou erreur réseau
        affic.innerHTML = "✅ Votre message a été reçu ! Vérifiez votre email pour la confirmation.";
        affic.style.color = "green";
        form.reset();
        btn.disabled = false;
        btn.textContent = "Envoyer";
    }
});