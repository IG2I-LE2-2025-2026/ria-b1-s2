<?php
if (isset($_GET["debutNom"])) 
{
	$cherche = $_GET["debutNom"]; 
	$res = array();
	
	// On va ouvrir un fichier et afficher les lignes 
	// où le prénom ou le nom contient ce texte

	$tabLignes = file("LE2_2025_2026.csv");
	foreach ($tabLignes as $ligne)
	{
		// EXO1 : effectuer une recherche sur nom ou prénom 
		if (preg_match("/^(.*):(" . $cherche . ".*):(.*)$/i",$ligne,$tabResultats) ||
		    preg_match("/^(" . $cherche . ".*):(.*):(.*)$/i",$ligne,$tabResultats))
		{
			// EXO2 afficher nom ET prénom 
			$res[] = array("nom" => $tabResultats[1],
			               "prenom" => $tabResultats[2],
			               "id" => $tabResultats[3]);
		}
	}
  
  /*
  echo ("<pre>");
  print_r($res);
  echo ("</pre>");
  */
  
  echo json_encode($res);
  
	die("");
}

?>
