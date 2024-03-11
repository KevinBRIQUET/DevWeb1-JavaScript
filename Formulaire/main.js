// Sélection de l'élément DOM correspondant au champ email
let user_mail = document.querySelector("#user_mail");

// Ajout de l'écouteur d'événements pour le blur (quand l'utilisateur quitte le champ email)
user_mail.addEventListener("blur", function (e) {
  // Envoi d'une requête fetch vers le fichier db-connect.php avec l'e-mail de l'utilisateur comme paramètre
  fetch("db-connect.php?user_mail=" + this.value)
    .then(function (response) {
      // Conversion de la réponse en JSON
      return response.json();
    })
    .then(function (resultat) {
      // Affichage du résultat dans la console (pour le débogage)
      console.log(resultat);
      // Vérification si l'e-mail existe déjà dans la base de données
      if (resultat[0].NB == 1) {
        // Affichage du message d'alerte si l'e-mail existe déjà
        document.querySelector("#alerte").innerHTML = "Cet email existe déjà";
        // Renvoi du focus sur le champ email pour que l'utilisateur puisse le corriger
        user_mail.focus();
      } else {
        // Si l'e-mail n'existe pas dans la base de données, effacer le contenu de l'élément #alerte (s'il existe)
        if (document.querySelector("#alerte")) {
          document.querySelector("#alerte").innerHTML = "";
        }
      }
    });
});

// controler nos mot de passe
// Le controle se fera sur le clic du boutton submit

let btn_submit = document.querySelector('#valider')
// Ajouter l'écoute de l'ev
btn_submit.addEventListener("click", function(e) {
    e.preventDefault()
    alert("J'ai cliqué")
    // Controler que les deux mots de passe sont identiques
    let pwd1 = document.querySelector("#pwd1")
    let pwd2 = document.querySelector("#pwd2")
    if(pwd1.value===pwd2.value)
    {
        console.log("identique")
        // Se débrouiller pour valide le formulaire
        document.querySelector("#formulaire").submit()
    }

    else

    {
        console.log("different")
        // afficher un petit message 
        let laert2 = document.querySelector("#alerte2")
        alerte2.innerHTML = "Vos mots de passe sont différents"
    }
})








