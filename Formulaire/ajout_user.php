<?php
try {
    $host = "localhost";
    $dbname = "commerce";
    $user = "root";
    $pwd = "";
    $connexion = new PDO("mysql:host=$host;dbname=$dbname", $user, $pwd);
    // Récuperer les champs du formulaire, et faire un insert into
    $resultat = $connexion->prepare("insert into user'user_nom', 'user_prenom','user_pwd','user_mail') values (:user_nom , :user_prenom , )");
}

catch (PDOException $e ) {
    echo "Il y  a une erreur" . $e->getmessage() ;
    die ;
}
