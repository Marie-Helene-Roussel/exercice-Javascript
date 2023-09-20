console.log("Hello Potichat");
const listeMots = ["Pâtépoulet", "Potichats", "Pâtémousse", "Presinours"]
const listePhrases = ["Dame Bouttiti", "Potichat maitre du monde", "Les potichats sont beau"]
let score = 0

let choix = prompt("veuillez choisir la liste : mots ou phrases")
while(choix !== "mots" && choix !== "phrases") {
	choix = prompt("veuillez choisir la liste : mots ou phrases")
}
if (choix === "mots"){
	

 for( let i = 0 ; i < listeMots.length; i++){
let motUtilisateur = prompt("Entrez le mot : " + listeMots[i])

  if (motUtilisateur === listeMots[i]) {
	score++
    console.log("Bravo humain, maintenant tu donne le pâtépoulet!")
  } else {

    console.log("Tu n'es pas doué humain, maintenant donne quand même le pâtépoulet.")
 }	

 }
}
if (choix === "phrases"){
	
 for( let i = 0 ; i < listePhrases.length; i++){
let motUtilisateur = prompt("Entrez la phrase : " + listePhrases[i])

  if (motUtilisateur === listePhrases[i]) {
	score++
    console.log("Bravo humain, maintenant tu donne le pâtépoulet!")
  } else {

    console.log("Tu n'es pas doué humain, maintenant donne quand même le pâtépoulet.")
 }	

 }
}

console.log(score)
