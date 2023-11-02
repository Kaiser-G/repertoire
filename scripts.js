document
  .getElementById("company-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Empêche l'envoi par défaut du formulaire

    // Collectez les données du formulaire
    var formData = {
      name: document.getElementById("company-name").value,
      mail: document.getElementById("company-mail").value,
      tel: document.getElementById("company-tel").value,
      ad: document.getElementById("company-ad").value,
      site: document.getElementById("company-site").value,
      contact: document.getElementById("contact").value,
      contactedBy: document.getElementById("company-contact").value,
      response: document.querySelector('input[name="response"]:checked').value,
      suite: document.getElementById("suite").value,
      notes: document.getElementById("notes").value,
    };

    // Récupérez les données existantes du fichier JSON
    fetch("fiches.json")
      .then((response) => response.json())
      .then((data) => {
        // Ajoutez les nouvelles données au tableau existant
        data.push(formData);

        // Convertissez le tableau JSON mis à jour en chaîne JSON
        var updatedData = JSON.stringify(data);

        // Écrivez les données mises à jour dans le fichier JSON local
        var blob = new Blob([updatedData], { type: "application/json" });
        var url = URL.createObjectURL(blob);
        var a = document.createElement("a");
        a.style.display = "none";
        a.href = url;
        a.download = "fiches.json";
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);

        alert("Données sauvegardées avec succès.");
      })
      .catch((error) => {
        console.error("Erreur lors de la lecture du fichier JSON", error);
      });
  });
