<?php

include_once "libs/maLibUtils.php";
include_once "libs/maLibSQL.pdo.php";

if ($cherche = valider("debutNom", "GET")) 
{
  $res = parcoursRs(SQLSelect("
    SELECT *
    FROM etudiants
    WHERE nom LIKE '$cherche%'
       OR prenom LIKE '$cherche%'
       OR CONCAT(prenom, ' ', nom) LIKE '$cherche%'
       OR CONCAT(nom, ' ', prenom) LIKE '$cherche%';
  "));
  
  $res_final = array("time" => time(),
                     "date" => date("Y-m-d H:i:s"),
                     "recherche" => $cherche,
                     "version" => "v2",
                     "suggestions" => $res);
  
  echo json_encode($res_final);
  
	die("");
}

?>
