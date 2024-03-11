<?php
try {

   //parametre de la BDD

    $host = "localhost";
    $dbname = "commerce"; 
    $user = "root";
    $pwd = "";

    // connexion à la BDD en utilisant PDO

    $connexion = new PDO("mysql:host=$host;dbname=$dbname", $user, $pwd); 

    // Faire et préparer notre requete sql
    $requete = "SELECT * FROM clients, villes_france_free WHERE clients.code_ville = villes_france_free.ville_id;";
    $resultat=$connexion->prepare($requete);
    $resultat->execute();
    $data=$resultat->fetchAll(PDO::FETCH_ASSOC);

echo(json_encode ($data));

    echo($data);
} catch(PDOException $e) {
    echo "Erreur de connexion: " . $e->getMessage();
    die;
}
?>