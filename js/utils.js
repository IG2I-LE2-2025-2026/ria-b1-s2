function show(refOrId,display) {
	// affiche l'élément dont la référence ou l'id est fourni
	// le paramètre display doit valoir block par défaut
	// cf. ref.style.display = "none"|"block"
	if (typeof refOrId == "string") 
		refOrId = document.getElementById(refOrId); 
	if (display == undefined) display = "block";
	
	refOrId.style.display = display; 
}

function hide(refOrId) {
	// cache l'élément dont la référence ou l'id est fourni
	if (typeof refOrId == "string") 
		refOrId = document.getElementById(refOrId); 
		
		refOrId.style.display = "none";
}

function html(refOrId, val) {
	// affecte une valeur à l'élément dont la référence ou l'id est fourni; si val n'est pas fourni, on renvoie son contenu
	if (typeof refOrId == "string") 
		refOrId = document.getElementById(refOrId);
	
	if (val == undefined) return refOrId.innerHTML; 
	else {
		refOrId.innerHTML = val ;
	}
}

function val(refOrId, val) {
	// affecte une valeur à l'élément dont la référence ou l'id est fourni; si val n'est pas fourni, on renvoie son contenu
	// l'élément est un champ de formulaire
	// la fonction doit pouvoir manipuler l'état des champs de type checkbox et radio 
	if (typeof refOrId == "string") 
		refOrId = document.getElementById(refOrId);
	if ( (refOrId.type == "checkbox") 
			|| (refOrId.type == "radio") )
	{
		if (val == undefined) return refOrId.checked; 
		else {
			refOrId.checked = val ;
		}
	} else {
		if (val == undefined) return refOrId.value; 
		else {
			refOrId.value = val ;
		}
	}
}

console.log("Chargement de utils.js : html, val, show, hide  ");

