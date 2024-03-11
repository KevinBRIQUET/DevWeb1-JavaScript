<?php
try {
    $host = "localhost";
    $dbname = "commerce";
    $user = "root";
    $pwd = "";
    $connexion = new PDO("mysql:host=$host;dbname=$dbname", $user, $pwd);
    $requete = "SELECT count(*) as NB FROM user where user_mail = '" . $_GET['user_mail'] . "'";
    $resultat = $connexion->prepare($requete);
    $resultat->execute();
    $data = $resultat->fetchAll(PDO::FETCH_ASSOC);


    echo json_encode($data);
} catch (PDOException $e) {
    echo json_encode(array('error' => 'Erreur de connexion: ' . $e->getMessage()));
    die;
}