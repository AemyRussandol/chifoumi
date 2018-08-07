var scoreIA = 0;
var scoreUser = 0;

while ( (scoreIA < 3) && (scoreUser < 3) ) {
var userChoice = prompt("Choisissez entre pierre, feuille et ciseaux");
var iaChoice = Math.floor(Math.random() * Math.floor(3));
  
while ((userChoice != "PIERRE") && (userChoice != "FEUILLE") && (userChoice != "CISEAUX")) {
  var userChoice = prompt("Choisissez entre pierre, feuille et ciseaux");
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

  else if ((userChoice == "PIERRE") && (iaChoice == "feuille")) {
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

console.log("Partie terminée.")