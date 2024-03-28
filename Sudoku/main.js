// Fonction pour afficher la grille de sudoku à partir des données
function afficherGrilleSudoku(grille) {
    const tableau = document.createElement('table');


    for (let i = 0; i < 9; i++) {
        const ligne = document.createElement('tr');
        for (let j = 0; j < 9; j++) {
            const cellule = document.createElement('td');
            cellule.textContent = grille[i][j] === 0 ? '' : grille[i][j];
            ligne.appendChild(cellule);
        }
        tableau.appendChild(ligne);
    }

    document.body.appendChild(tableau);
}

// Exemple de données de grille sudoku
const grilleSudoku = [
    [2, 0, 0, 0, 5, 0, 3, 0, 1],
    [6, 8, 0, 0, 7, 0, 0, 9,7],
    [1, 9, 3, 0, 0, 4, 5, 0, 0],
    [8, 2, 0, 1, 0, 0, 0, 4, 0],
    [0, 0, 4, 6, 0, 2, 9, 0, 0],
    [0, 5, 0, 0, 0, 3, 0, 2, 8],
    [0, 0, 9, 3, 0, 0, 0, 7, 4],
    [0, 7, 0, 0, 5, 0, 0, 3, 6],
    [7, 0,6, 0, 1, 8, 0, 0, 0]
];
// Afficher la grille de sudoku



// Fonction pour vérifier si une ligne de sudoku est valide
function ligneValide(ligne) {
    // Vérifier si la ligne contient exactement 9 éléments
    if (ligne.length !== 9) {
        return false;
    }

    // Vérifier si tous les éléments de la ligne sont uniques et compris entre 1 et 9
    const valeurs = {};
    for (let i = 0; i < 9; i++) {
        const valeur = ligne[i];
        // Vérifier si la valeur est un nombre entre 1 et 9
        if (isNaN(valeur) || valeur < 0 || valeur > 9) {
            return false;
        }
        // Vérifier si la valeur est déjà présente dans la ligne
        if (valeur > 0) {
            if (valeurs[valeur]) {
                return false;
            }
        }
        valeurs[valeur] = true;
    }

    return true;
}




// controle des lignes 
function controle()
{
    for (i = 0; i < 9; i++) {

    // Exemple de ligne de sudoku
    const ligne = grilleSudoku[i];
    // Vérifier si la ligne est valide
    if (ligneValide(ligne)) {
        console.log("La ligne numéro " + i + " est valide.");
    } else {
        console.log("La ligne numéro " + i + " n'est pas valide.");
        document.querySelector("tr:nth-child(" + (i + 1) + ")").classList.toggle("erreurL")

    }
}

// controle des colonnes 

for (let i = 0; i < 9; i++) {
    ligne = []
    for (let j = 0; j < 9; j++) {
        // on parcours la premièere colonne et on constitue 
        //un tableau d'une seule ligne 
        ligne.push(grilleSudoku[j][i])

    }
    // maintenant que la colonne à été trasposée en ligne on peut appeler
    // la fonction qui controle une ligne 
    if (ligneValide(ligne)) {
        console.log("La colonne numéro " + i + " est valide.")

    } else {
        console.log("La colonne numéro " + i + " n'est pas valide.");
        // modifier la classe de la la colonne 
        // chaque TR qui compose la colonne du sudoku
        let listeTD = document.querySelectorAll("td:nth-child(" + (i + 1))
        listeTD.forEach(element => {
            element.classList.toggle("erreurC")
        })  

    }
}
for (let i = 0; i < 9; i += 3) {
    // la on parcuors les lignes de 3 en 3
    for (let j = 0; j < 9; j += 3) {
        // la on parcuors les colonnes  de 3 en 3
        // Parcours des sous-tableaux de 3x3 à partir de la position (i, j)
        lignes=[]
        for (let k = i; k < i + 3; k++) {
               
            
            for (let l = j; l < j + 3; l++) {
                // Accédez à l'élément de la sous-tableau à la position (k, l)
               // console.log("Élément à la position (" + k + ", " + l + ") : " + grilleSudoku[k][l]);
           lignes.push(grilleSudoku[k][l])
           
         }
         
        }
        console.log(lignes)
        if (ligneValide(lignes)) {
            console.log("le carre  est valide.")
    
        } else {
            console.log("Le carre n'est pas valide.");
            // modifier la classe de du carré
            // ici i et j correspondent à la premiere case du sous tableau
            for(l = i ; l< i+3 ; l++){
                for(c = j ; c< j+3 ; c++)
                {
                    document.querySelector("tr:nth-child("+(l+1)+") > td:nth-child("+(c+1)+")").classList.toggle('erreurT')
                }
                
            }
        }
    }
}


}

// Ajouter l'écoute de l'ev sur les td
let listeCase = document.querySelectorAll("td")
// Parcourir cette collection
listeCase.forEach( elementTD => ) {
    // Ajouter l'écoute
    elementTD.addEventListener("click", funtion(e){
        let mavar = prompt("saisir une valeur")
        this
}

afficherGrilleSudoku(grilleSudoku);
controle()

