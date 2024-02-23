// Ajouter l'écoute de l'evenement sur mon boutton 
let monBoutton = document.querySelector("#ajouter")
monBoutton.addEventListener('click', function(){
    // maintenant on fait quoi ?
    // Controler si il y a du texte dans l'input
    let nouvelleTache= document.querySelector("#tache")
    if(!nouvelleTache.value)
    {
        nouvelleTache.style.backgroundColor = "orange"
    }
    else
    {
        // Créer un élément de type div
        let newDiv = document.createElement("div");

        // Ajouter le texte de l'input
        newDiv.innerText = nouvelleTache.value;

        // Appliquer une feuille de style
        newDiv.style.padding = "5px";
        newDiv.style.backgroundColor = "#edeff6";
        newDiv.style.border = "1px solid black";
        newDiv.style.borderRadius = "15px";

        // Ajouter cet élément dans la bonne colonne
        document.querySelector("#àfaire").appendChild(newDiv)

        // Vider le input
        nouvelleTache.value = ""
    }
})


















