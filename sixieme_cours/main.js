class media {
    constructor(titre, genre, realisateur) {
        this.titre = titre
        this.genre = genre
        this.realisateur = realisateur
    }
    play() {
        console.log("Cette oeuvre de " + this.genre)
        console.log("se , nomme " + this.titre)
        console.log(", et réalisée par  " + this.genre)

    }
}

class film extends media {

}

class serie extends media {
    constructor (titre, genre,  realisateur, annee, duree){
        super(titre, genre, realisateur)
        this.duree = duree
        this.annee = annee
    }
}



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












