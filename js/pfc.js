// Vous allez réaliser un jeu de pierre, feuille, ciseaux en JavaScript.

// Vous demanderez à l'utilisateur de choisir "pierre", "feuille" ou "ciseaux" à l'aide d'un prompt, 
// vous déterminerez au hasard le choix de l'ordinateur, puis vous comparerez le choix de l'utilisateur 
// et le choix de l'ordinateur pour afficher qui a gagné, ou si vous êtes à égalité.

// Pour aller plus loin:

// Si l'utilisateur entre autre chose que "pierre", "feuille", ou "ciseaux", 
// demandez lui de rentrer une valeur correcte. 
// Le jeu doit se relancer jusqu'à ce qu'un des joueurs ait obtenu 3 points.

var choixUser = prompt("Choisissez entre pierre, feuille et ciseaux");
var generated = ["pierre", "feuille", "ciseaux"];

while ((choixUser == pierre) || (choixUser == feuille) || (choixUser == ciseaux)) {
    var choixUser = prompt("Choisissez entre pierre, feuille et ciseaux");
if (choixUser === generated) {
    console.log("égalité");
}

else if ((choixUser == pierre) && (generated[2])) {
    console.log("perdu !");
} 

else if ((choixUser == pierre) && (generated[3])) {
    console.log("gagné !");
} 

else if ((choixUser == feuille) && (generated[3])) {
    console.log("perdu !");
}

else if ((choixUser == feuille) && (generated[1])) {
    console.log("gagné !");
} 

else if ((choixUser == ciseaux) && (generated[1])) {
    console.log("perdu !");
} 

else if ((choixUser == ciseaux) && (generated[2])) {
    console.log("gagné !");
} }
