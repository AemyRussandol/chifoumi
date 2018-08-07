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
    alert("égalité");
  }

  else if ((userChoice == "pierre") && (iaChoice == "feuille")) {
    alert("perdu !");
    scoreIA ++;
  } 

  else if ((userChoice == "pierre") && (iaChoice == "ciseaux")) {
    alert("gagné !");
    scoreUser ++;
  } 

  else if ((userChoice == "feuille") && (iaChoice == "ciseaux")) {
    alert("perdu !");
    scoreIA ++;
  }

  else if ((userChoice == "feuille") && (iaChoice == "pierre" )) {
    alert("gagné !");
    scoreUser ++;
  } 

  else if ((userChoice == "ciseaux") && (iaChoice == "pierre")) {
    alert("perdu !");
    scoreIA ++;
  } 

  else if ((userChoice == "ciseaux") && (iaChoice == "feuille")) {
    alert("gagné !");
    scoreUser ++;
  } 
}
if (scoreUser == 3) {
    alert("Bravo ! Vous m'avez vaincu... Mais je n'ai pas dis mon dernier mot!");
}
if (scoreIA == 3) {
    alert("MOUAHAHAHAHA! Vous êtes venus, vous avez vu, vous avez ... PERDU!");
}
alert("Partie terminée.\n Resumé des scores: \n Joueur : " + scoreUser + " points. \n IA : " + scoreIA + " points.");