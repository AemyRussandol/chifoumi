var scoreIA = 0;
var scoreUser = 0;

while ( (scoreIA < 3) && (scoreUser < 3) ) {
var userChoice = prompt("Choisissez entre pierre, feuille et ciseaux (Attention ! Je suis sensible à la casse :)");
var iaChoice = Math.floor(Math.random() * Math.floor(3));
  
while ((userChoice != "pierre") && (userChoice != "feuille") && (userChoice != "ciseaux")) {
  userChoice = prompt("Choisissez entre pierre, feuille et ciseaux");
}

  if (iaChoice === 0) {
    iaChoice = "pierre";
  }
  
  else if (iaChoice === 1) {
    iaChoice = "feuille";
  }
  
  else {
    iaChoice = "ciseaux";
  }
  
  if (userChoice === iaChoice) {
    console.log("égalité");
  }

  else if ((userChoice == "pierre") && (iaChoice == "feuille")) {
    console.log("perdu !");
    scoreIA ++;
  } 

  else if ((userChoice == "pierre") && (iaChoice == "ciseaux")) {
    console.log("gagné !");
    scoreUser ++;
  } 

  else if ((userChoice == "feuille") && (iaChoice == "ciseaux")) {
    console.log("perdu !");
    scoreIA ++;
  }

  else if ((userChoice == "feuille") && (iaChoice == "pierre" )) {
    console.log("gagné !");
    scoreUser ++;
  } 

  else if ((userChoice == "ciseaux") && (iaChoice == "pierre")) {
    console.log("perdu !");
    scoreIA ++;
  } 

  else if ((userChoice == "ciseaux") && (iaChoice == "feuille")) {
    console.log("gagné !");
    scoreUser ++;
  } 
}
if (scoreUser == 3) {
    console.log("Bravo ! Vous m'avez vaincu... Mais je n'ai pas dis mon dernier mot!");
}
if (scoreIA == 3) {
    console.log("MOUAHAHAHAHA! Vous êtes venus, vous avez vu, vous avez ... PERDU!");
}
console.log("Partie terminée.\n Resumé des scores: \n Joueur : " + scoreUser + " points. \n IA : " + scoreIA + " points.");