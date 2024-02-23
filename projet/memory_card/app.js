// On cible toutes les cartes
const cartes = document.querySelectorAll('.carte');

let carteRetournee = false;
let premiereCartes, secondeCarte;
let verouillage = false;          // Empêche l'utilisateur de retourner d'autre carte que les 2

let cartesVisibles = [];
let veutRejouer;


cartes.forEach(carte => {
    carte.addEventListener('click', retourneCarte)
})

function retourneCarte() {

    if(verouillage) return;

    this.childNodes[1].classList.toggle('active'); // retourne les cartes quand on clic dessus 

    if(!carteRetournee){

        carteRetournee = true;
        premiereCarte = this;
        return;
    }

    carteRetournee = false;
    secondeCarte = this;

    correspondance();
    recommencerJeu();
}

function correspondance() {
    if (
        premiereCarte.getAttribute("data-attr") ===
        secondeCarte.getAttribute("data-attr")
    ) {
        // Cartes correspondantes restent visibles
        premiereCarte.removeEventListener("click", retourneCarte);
        secondeCarte.removeEventListener("click", retourneCarte);
        cartesVisibles.push(premiereCarte, secondeCarte);
    } else {
        verouillage = true; // impossible de retourner d'autres cartes que les 2 visibles
        setTimeout(() => {
            premiereCarte.childNodes[1].classList.remove("active");
            secondeCarte.childNodes[1].classList.remove("active");

            verouillage = false;
        }, 1500);
    }
}


// Permet de créé l'aléatoire 
function aleatoire() {
    cartes.forEach((carte) => {
        let positionAlea = Math.floor(Math.random() * 12);
        carte.style.order = positionAlea;
    });
}
aleatoire();

// Permet de valider la fin de partie et relancer une partie 

function recommencerJeu() {
    if (cartesVisibles.length === 12) {
        setTimeout(() => {
            veutRejouer = confirm(
                "✅ Victoire ✅\nSouhaitez-vous refaire une autre partie ?"
            );
            if (veutRejouer) {
                location.reload();
            } else {
                return;
            }
        }, 800);
    }
}