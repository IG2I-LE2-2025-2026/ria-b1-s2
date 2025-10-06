<?php

$salles = array("Maxime"=>"305","Thomas"=>"005");
$noms = array("Maxime"=>"Folschette","Thomas"=>"Bourdeaud'huy");

if ((isset($_GET["cle"]) && isset($noms[$_GET["cle"]])))
{
	echo $noms[$_GET["cle"]];
	die("");
}

if ((isset($_POST["cle"]) && isset($salles[$_POST["cle"]]))) 
{
	echo $salles[$_POST["cle"]];
	die("");
}

echo "Aucun Resultat";

?>
