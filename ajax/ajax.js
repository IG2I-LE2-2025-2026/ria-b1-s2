/*
Produire ajax(url,[ {[type],[data],[callback]} ]) 
ajax({url,[type],[data],[callback]})
Les arguments ET les données deviennent du JSON
La fonction de rappel recevra directement la réponse du serveur comme paramètre
Permettre les requêtes multiples
*/

function enrichir(oDef,oModif) {
	var oRes = {}; 
	for (prop in oDef) {
		if ((oModif != undefined) && (oModif[prop] != undefined))
			oRes[prop] = oModif[prop]; 
		else 
			oRes[prop] = oDef[prop]; 
	}
	
	return oRes; 
}

function ajax(urlOrConfig, oParams) {
	var oDefault = {
		url : false,
		type: "GET", 
		data : {}, 
		callback : function (r) {console.log(r);}
	}; 
	
	var oEffectif; 
	
	// urlOrConfig peut être une chaine ou un objet 
	
	if (typeof urlOrConfig == "string") {
		// si urlOrConfig est une chaine, on stocke sa valeur dans oDefault (locale)
		oDefault.url = urlOrConfig; 
		// puis on enrichit l'objet par défaut avec le second argument, éventuellement vide
		oEffectif = enrichir(oDefault,oParams);
	} else {
		// sinon, toute l'info est dans le premier argument, qui nous sert à enrichir 
		// l'objet par défaut 
		oEffectif = enrichir(oDefault, urlOrConfig);
		// urlOrConfig ne peut pas être vide : url est obligatoire ! 
		// ou un objet 
	}
	if (! oEffectif.url) {
		console.log("URL manquante !"); 
		return; 
	}
	
	var request = new XMLHttpRequest(); 
	var donnees = ""; // besoin d'une chaine de requete :format c1=v1&c2=v2
	// ce qu'on fournit : un objet JSON: format {c1:v1,c2:v2}
	for ( nextCle in oEffectif.data) {
		donnees += nextCle + "=" + oEffectif.data[nextCle] + "&"; 
	}
	// TODO : il reste un & à la fin de la chaine 
	// l'enlever : substr / .length 
	
	if (oEffectif.type=='GET') 
	{
		request.open("GET", oEffectif.url+"?"+donnees, true);
		donnees=null;
	}
	else 
	{
		request.open("POST", oEffectif.url, true);
		request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	}

	request.onreadystatechange = function (){
		// le scope de cette fonction contient la variable request ! => on pourra reutiliser cet objet pour lire la réponse !! 
		if (request.readyState == 4) {
			if (request.status == 200) {
				oEffectif.callback(request.responseText);
			}
		}
	}; 
	
	request.send(donnees);
}

/*
ajax("A1_data.txt"); 

// second test 
ajax("A1_data.txt", { 
	type:"POST", 
	callback:function(r) {
		console.log("recu : " + r);
	}
}); // fin second test 

ajax({url:"A1_data.txt"}); 
ajax({data: {cle:"Thomas",cle2:"Maxime"}, type:"POST", url:"A1_data.txt"}); 
ajax({data: {cle:"Thomas"}, type:"POST"}); 
*/

console.log("Chargement de ajax.js : ajax(url, {type,data,callback})");











