/*********************************************************************************
 * 
 * Ce fichier contient toutes les fonctions nécessaires au fonctionnement du jeu. 
 * 
 *********************************************************************************/

/**
 * Cette fonction affiche dans la console le score de l'utilisateur
 * @param {number} score : le score de l'utilisateur
 * @param {number} nbMotsProposes : le nombre de mots proposés à l'utilisateur
 */
function afficherResultat(score, nbMotsProposes) {
	// Récupération de la zone dans laquelle on va écrire le score
	let spanScore = document.querySelector(".zoneScore span")
	// Ecriture du texte
	let affichageScore = `${score} / ${nbMotsProposes}`
	
	// On place le texte à l'intérieur du span. 
	spanScore.innerText = affichageScore

	
}



function afficherProposition(proposition) {
    let zoneProposition = document.getElementById("motPropose")
    zoneProposition.innerText = proposition
}

// fonction pour lancer le jeu

function lancerJeu() {
	// Initialisations
	let score = 0
	let i = 0
	let listeProposition = listeMots

	let btnValiderMot = document.getElementById("boutonValiderMot")
	let inputEcriture = document.getElementById("inputEcriture")
	afficherProposition(listeProposition[i])
	// Gestion de l'événement click sur le bouton "valider"
	btnValiderMot.addEventListener("click", () => {
		if (inputEcriture.value === listeProposition[i]) {
			score++
		}
		i++
		afficherResultat(score, i)
		inputEcriture.value = ''
		if (listeProposition[i] === undefined) {
			afficherProposition("Le jeu est fini, maintenant donnez le pâtépoulet à votre potichat!!")
			btnValiderMot.disabled = true
		} else {
			afficherProposition(listeProposition[i])

		}
	})

	// Gestion de l'événement change sur les boutons radios. 
	let listeBtnRadio = document.querySelectorAll(".optionSource input")
	for (let index = 0; index < listeBtnRadio.length; index++) {
		listeBtnRadio[index].addEventListener("change", (event) => {
			// Si c'est le premier élément qui a été modifié, alors nous voulons
			// jouer avec la listeMots. 
			if (event.target.value === "1") {
				listeProposition = listeMots
			} else {
				// Sinon nous voulons jouer avec la liste des phrases
				listeProposition = listePhrases
			}
			// Et on modifie l'affichage en direct. 
			afficherProposition(listeProposition[i])
		})
	}

	afficherResultat(score, i)
}

