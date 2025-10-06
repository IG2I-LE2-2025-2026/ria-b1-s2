var __boucle_oDefault = {
	periode: 5, 
	traiter: function(){console.log("traitement");},
	poursuivre: function(){return true;}
}; 

function enrichir(oDef,oModif) {
	// produit un nouvel objet différent de oDef et oModif
	// ayant la même structure que oDef 
	// avec des valeurs de oModif 
	// (et celles de oDef quand oModif ne les précise pas)
	
	var oRes = {}; 
	for (prop in oDef) {
		if ((oModif != undefined) && (oModif[prop] != undefined))
			oRes[prop] = oModif[prop]; 
		else 
			oRes[prop] = oDef[prop]; 
	}
	
	return oRes; 
}

function oBoucle(oConfig) {

	var oParams = enrichir(__boucle_oDefault,oConfig);
	
	var foo = function() {
		if (oParams.poursuivre()){
			oParams.traiter();
			window.setTimeout(foo, oParams.periode*1000); 
		}
	}; 
	
	foo();
}

console.log("Chargement de boucle.js :  enrichir(oStructure,oParams), oBoucle({periode,traiter,poursuivre})");

