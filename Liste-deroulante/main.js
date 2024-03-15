
// chercher l'input pour ecouter la saisie de l'utilisateur
let choix = document.querySelector("#choix");
choix.addEventListener("input", function (e) {
  fetch("select.php?debutdunom=" + this.value)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      console.log(json);

      // rechercher le select
      let Maliste = document.querySelector("#liste");
      Maliste.innerHTML = "";
      
      // parcourir le json pour ajouter des elements
      json.forEach(element => {
        let newOption = document.createElement("option");
        newOption.value = element.num_client
        newOption.innerText = element.nom_client;
        Maliste.appendChild(newOption);
      });
    });
});