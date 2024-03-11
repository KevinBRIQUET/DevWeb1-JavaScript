fetch("clients.json")                                 // Pour récupérer les données JSON à partir de l'URL fournie (JSONPlaceholder).
  .then(response => response.json())                  // La méthode .then() est utilisée pour gérer la réponse sous forme de données JSON.
  .then(json_resultat => {                            // Utilise les données JSON résultantes.     
    const tbody = document.getElementById("tbody");   // Obtient une référence vers l'élément tbody dans le HTML.
    const template = document.getElementById("table-row-template"); // Obtient une référence vers le template de ligne de tableau dans le HTML.

    json_resultat.forEach(todo => {                                 // Parcourt chaque objet todo dans les données JSON.
        const clone = document.importNode(template.content, true);  // Clone le contenu du template de ligne de tableau.
        const tdElements = clone.querySelectorAll("td");            // Sélectionne tous les éléments td dans la ligne clonée.
        tdElements[0].textContent = clients.num_client;               
        tdElements[1].textContent = clients.nom_client;                
        tdElements[2].textContent = clients.prenom_client;                     
        tdElements[3].textContent = clients.code_ville;           
        tbody.appendChild(clone);                                   // Ajoute la ligne clonée au corps du tableau.
      });
    });


