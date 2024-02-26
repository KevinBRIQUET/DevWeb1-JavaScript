// Ajouter l'écoute de l'événement sur mon bouton
let monBoutton = document.querySelector("#ajouter");
monBoutton.addEventListener('click', function() {
    // Contrôler s'il y a du texte dans l'input
    let nouvelleTache = document.querySelector("#tache");
    if (!nouvelleTache.value) {
        nouvelleTache.style.backgroundColor = "orange";
    } else {
        // Créer un élément de type div pour la tâche
        let newDiv = document.createElement("div");
        newDiv.style.display = "flex";
        newDiv.style.justifyContent = "space-between";
        newDiv.style.alignItems = "center";
        newDiv.classList.add("bulleTache");

        // Ajouter le texte de l'input dans un span (pour le texte de la tâche)
        let tacheText = document.createElement("span");
        tacheText.textContent = nouvelleTache.value;
        newDiv.appendChild(tacheText);

        // Créer un conteneur pour les flèches et l'icône de la poubelle
        let iconsContainer = document.createElement("div");
        iconsContainer.style.display = "flex";
        iconsContainer.style.alignItems = "center";

        // Ajouter les icônes de flèches dans le conteneur d'icônes
        const arrows = ['up', 'down', 'left', 'right'];
        arrows.forEach(direction => {
            const arrowIcon = document.createElement("i");
            arrowIcon.classList.add("fas", `fa-arrow-${direction}`);
            arrowIcon.style.cursor = "pointer";
            arrowIcon.style.margin = "0 2px";
            arrowIcon.onclick = () => {
                if (direction === 'up' || direction === 'down') {
                    moveTaskVertically(newDiv, direction);
                } else {
                    moveTaskHorizontally(newDiv, direction);
                }
            };
            iconsContainer.appendChild(arrowIcon);
        });

        // Créer et ajouter l'icône de la poubelle dans le conteneur d'icônes
        let deleteIcon = document.createElement("i");
        deleteIcon.classList.add("fas", "fa-trash");
        deleteIcon.style.cursor = "pointer";
        deleteIcon.style.marginLeft = "10px"; // Ajoute un peu d'espace entre les flèches et la poubelle
        deleteIcon.addEventListener('click', function() {
            newDiv.remove();
        });
        iconsContainer.appendChild(deleteIcon);

        // Ajouter le conteneur d'icônes à newDiv
        newDiv.appendChild(iconsContainer);

        // Ajouter cet élément dans la bonne colonne
        document.querySelector("#aFaire").appendChild(newDiv);

        // Vider l'input
        nouvelleTache.value = "";
    }
});

// Fonction pour déplacer une tâche verticalement
function moveTaskVertically(task, direction) {
    if (direction === 'up') {
        task.previousElementSibling?.insertAdjacentElement('beforebegin', task);
    } else if (direction === 'down') {
        task.nextElementSibling?.insertAdjacentElement('afterend', task);
    }
}

// Fonction pour déplacer une tâche horizontalement
function moveTaskHorizontally(task, direction) {
    const currentColumn = task.parentElement;
    let targetColumn;
    if (direction === 'left') {
        targetColumn = currentColumn.previousElementSibling;
    } else if (direction === 'right') {
        targetColumn = currentColumn.nextElementSibling;
    }
    if (targetColumn && targetColumn.classList.contains('colonne')) {
        targetColumn.appendChild(task);
    }
}
