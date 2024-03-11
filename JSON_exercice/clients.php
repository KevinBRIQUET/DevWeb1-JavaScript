<?php

$servername = "localhost"; 
$username = "root";
$password = "";
$dbname = "Commerce";

// Création de la connexion
$conn = new mysqli($servername, $username, $password, $dbname);

// Vérification de la connexion
if ($conn->connect_error) {
  die("Échec de la connexion: " . $conn->connect_error);
}

// Récupérer les données de la table client
$sql = "SELECT * FROM client";
$result = $conn->query($sql);

// Convertir les résultats en format JSON
$data = array();
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
}

// Afficher les données au format JSON
header('Content-Type: application/json');
echo json_encode($data);

// Fermer la connexion à la base de données
$conn->close();
?>