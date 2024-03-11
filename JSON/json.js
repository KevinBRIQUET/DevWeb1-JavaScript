fetch("https://jsonplaceholder.typicode.com/todos/")  // Pour récupérer les données JSON à partir de l'URL fournie (JSONPlaceholder).
  .then(response => response.json())                  // La méthode .then() est utilisée pour gérer la réponse sous forme de données JSON.
  .then(json_resultat => {                            // Utilise les données JSON résultantes.     
    const tbody = document.getElementById("tbody");   // Obtient une référence vers l'élément tbody dans le HTML.
    const template = document.getElementById("table-row-template"); // Obtient une référence vers le template de ligne de tableau dans le HTML.

    json_resultat.forEach(todo => {                                 // Parcourt chaque objet todo dans les données JSON.
        const clone = document.importNode(template.content, true);  // Clone le contenu du template de ligne de tableau.
        const tdElements = clone.querySelectorAll("td");            // Sélectionne tous les éléments td dans la ligne clonée.
        tdElements[0].textContent = todo.id;                        // Remplit la première cellule avec l'ID de la tâche.
        tdElements[1].textContent = todo.userId;                    // Remplit la deuxième cellule avec l'ID de l'utilisateur associé à la tâche.
        tdElements[2].textContent = todo.title;                     // Remplit la troisième cellule avec le titre de la tâche.
        tdElements[3].textContent = todo.completed ? "Oui" : "Non"; // Remplit la quatrième cellule avec "Oui" si la tâche est terminée, sinon "Non".
        tbody.appendChild(clone);                                   // Ajoute la ligne clonée au corps du tableau.
      });
    });


 /*
 
Le JSON, qui signifie JavaScript Object Notation, est un format de données très populaire et simple à utiliser. En JavaScript, c'est un moyen de stocker et d'échanger des données de manière structurée et lisible pour les humains et les machines.
Imagine-le comme une boîte dans laquelle tu mets des informations. Ces informations sont organisées en paires clé-valeur, tout comme les objets JavaScript. JSON est largement utilisé pour échanger des données entre les serveurs et les clients web, car il est léger, simple à lire et à écrire, et pris en charge par la plupart des langages de programmation.

*/