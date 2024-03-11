// declater un objet
let personne = {
    // proprieter
    nom : "dupond",
    prenom : "albert",
    preference : ["html" , "css"],
    // sous espace de nom
    adresse : {
        rue : "12 rue des vosges",
        ville : "metz",
        cp: "57000",
        complement : ""
    },

    // methode

    bio : function()
    {
        alert(this.nom + " " + this.prenom + " aime : " + 
        this.preference[1])
    }
}

class individu {
    constructor (nom , prenom ) {
        this.nom = nom ,
        this._prenom = prenom
    }
}

bonjour () {
    console.log( "bonjour je suis" + this.nom + " " + this.prenom)}



// const albert = new individu("muda" , "albert")












