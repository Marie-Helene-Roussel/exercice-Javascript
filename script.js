console.log("Hello Potichat");
let score = 0

function afficherResultat(score, nbMotsProposes) {
	//affichage du score et résultat du jeu
	console.log("votre score est de " + score + "sur" + nbMotsProposes)
}

function choisirPhrasesOuMots() {
	// choix du mode de jeu qui forme une boucle
	let choix = prompt("veuillez choisir la liste : mots ou phrases")
	while (choix !== "mots" && choix !== "phrases") {
		choix = prompt("veuillez choisir la liste : mots ou phrases")
	}
	return choix
}
function lancerBoucleDeJeu(listePropositions) {

	for (let i = 0; i < listePropositions.length; i++) {
		motUtilisateur = prompt("Entrez le mot : " + listePropositions[i])
		// calcule du score
		if (motUtilisateur === listePropositions[i]) {
			score++
			console.log("Bravo humain, maintenant tu donne le pâtépoulet!")
		} else {
			score--
			console.log("Tu n'es pas doué humain, maintenant donne quand même le pâtépoulet.")
		}

	}
	return score


}

function lancerJeu() {
	let choix = choisirPhrasesOuMots()
	let score = 0
	let nbMotsProposes = 0

	if (choix === "mots") {
		lancerBoucleDeJeu(listeMots)
		nbMotsProposes = listeMots.length
	} else {
		lancerBoucleDeJeu(listePhrases)
		nbMotsProposes = listePhrases.length
	}


	afficherResultat(score, nbMotsProposes)
}

/*Lance le jeu de clavier*/

lancerJeu()