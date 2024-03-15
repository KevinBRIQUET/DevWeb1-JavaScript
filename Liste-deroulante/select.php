<?php

try {

    $host = "localhost";
    $user = "root";
    $password = "";
    $dbName = "commerce";

    $connexion = new PDO("mysql:host=$host;dbname=$dbName", $user, $password);


    $requete ="SELECT * FROM clients WHERE nom_client LIKE  '" .$_GET['debutdunom'] . "%'";
    $resultat = $connexion->prepare($requete);
    $resultat->execute();
    $data = $resultat->fetchAll(PDO::FETCH_ASSOC);
    echo(json_encode($data));
}
catch (PDOException $e) {
    echo "Erreur de connexion : " . $e->getMessage();
    die;
}


