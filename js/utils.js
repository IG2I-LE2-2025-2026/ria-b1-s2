// Bibliothèque de fonctions utilitaires

function trace(s) {
  // que fait cette fonction ?
  window.console && console.log(s);
  
  /*
  // Équivalent à :
  if (window.console) {
    console.log(s);
  }
  */
}

// Variable globale
var compteur = 10;

function debug(s) {
  // affiche un nombre de messages limité par un compteur
  // affiche le compteur si s n'est pas fourni
  // e.g. après 10 affichages, la fonction ne fait plus rien 
  // comment remettre à 0 le compteur ?
  // => Modifier la valeur de compteur dans la console
  if (compteur > 0) {
    if (s === undefined) {
      trace(compteur);
    } else {
      trace(s);
    }
    compteur--;
  }
}

function getRef(refOrId) {
  // Retourne la référence d'un élément dont la référence ou l'identifiant est fourni
  var ref;
  if (typeof refOrId === "string") {
    ref = document.getElementById(refOrId);
  } else {
    ref = refOrId;
  }
  return ref;
}

function show(refOrId, display = "block") {
  // affiche l'élément dont la référence ou l'id est fourni
  // le paramètre display doit valoir block par défaut
  var ref = getRef(refOrId);
  
  /*
  // Valeur par défaut à la main
  if (display === undefined) {
    display = "block";
  }
  */
  
  ref.style.display = display;
}

function hide(refOrId) {
  // cache l'élément dont la référence ou l'id est fourni
  show(refOrId, "none");
}

function getOrReplaceContent(ref, prop, val) {
  // Retourne le contenu d'un élément ou remplace son contenu si val est fourni
  if (val === undefined) {
    return ref[prop];
  } else {
    ref[prop] = val;
  }
}

function html(refOrId, val) {
  // affecte une valeur à l'élément dont la référence ou l'id est fourni; si val n'est pas fourni, on renvoie son contenu
  var ref = getRef(refOrId);
  return getOrReplaceContent(ref, "innerHTML", val);
}

function val(refOrId, val) {
  // affecte une valeur à l'élément dont la référence ou l'id est fourni; si val n'est pas fourni, on renvoie son contenu
  // l'élément est un champ de formulaire
  // la fonction doit pouvoir manipuler l'état des champs de type checkbox et radio 
  var ref = getRef(refOrId);
  if (ref.type === "checkbox" || ref.type === "radio") {
    return getOrReplaceContent(ref, "checked", val);
  } else {
    return getOrReplaceContent(ref, "value", val);
  }
}
