// /*                                      |
// |                                       |
// |    Exercices OpenClassroom      |
// |                                       |
// |                                       |*/



// // Test du débogueur 

// console.log("Bonjour en JavaScript !");
// console.log("Faisons quelques calculs.");
// console.log(4 + 7);
// console.log(12 / 0);
// console.log("Au revoir !");



// // Les commentaires 

// console.log("Bonjour en JavaScript !");
// //console.log("Faisons quelques calculs.");
// console.log(4 + 7);
// //console.log(12 / 0);
// console.log("Au revoir !");

// /* Un commentaire 
// sur plusieurs
// lignes */
 
// // Un commentaire sur une seule ligne



// // Présentation
// var myName = "Amélie";
// var myAge = 27;
// console.log(myName);
// console.log(myAge);



// // Calculatrice

// console.log(6 + 3);
// console.log(6 - 3);
// console.log(6 * 3);
// console.log(6 / 3);



// // Valeurs

// console.log(4 + 5);
// console.log("4 + 5");
// console.log("4" + "5");



// Interactions

// var prenom = prompt("Entrez votre prénom :");
// alert("Bonjour, " + prenom);



// Modif d'interactions 

// var prenom = prompt("Entrez votre prénom :");
// var nom = prompt("Entrez votre nom :");
// alert("Bonjour, " + prenom + " " + nom);



// TVA 

// var prixHT = prompt("Saisissez un prix");
// var TVA = 19.6 / 100;
// var prixTTC = prixHT * (1 + TVA);
// console.log("Le prix TTC est de " + prixTTC + " euros");

// Conversion 
// var temperatureCelcius = prompt("Saisissez un nombre ");
// var temperatureFahrenheit = temperatureCelcius * 9 / 5 + 32;
// console.log("La température en degrès Fahrenheit est de " + temperatureFahrenheit);



// Permutation 

// var nombre1 = 5;
// var nombre2 = 3;

// var stockageNombre = nombre1; // Permet de stocker la valeur de la variable afin de rendre nombre1 vide //
// nombre1 = nombre2;
// nombre2 = stockageNombre;

// console.log(nombre1); // Doit afficher 3
// console.log(nombre2); // Doit afficher 5



// Les instructions 



// IF
// var nombre = Number(prompt("Entrez un nombre :"));
// if (nombre > 0) {
//     console.log(nombre + " est positif");
// }


// Else
// var nombre = Number(prompt("Entrez un nombre :"));
// if (nombre > 0) {
//     console.log(nombre + " est positif");
// }
// else {
//     console.log(nombre + " est négatif ou nul");
// }



// Imbriquer des conditions 
// var nombre = Number(prompt("Entrez un nombre :"));
// if (nombre > 0) {
//     console.log(nombre + " est positif");
// } else { // nombre <= 0
//     if (nombre < 0) {
//         console.log(nombre + " est négatif");
//     } else { // nombre === 0
//         console.log(nombre + " est nul");
//     }
// }



// Conditions composées 
// if ((nombre >= 0) && (nombre <= 100)) {
//     console.log(nombre + " est compris entre 0 et 100");
// }


// Exprimer un choix 
// var meteo = prompt("Quel temps fait-il dehors ?");
// if (meteo === "soleil") {
//     console.log("Sortez en t-shirt.");
// } else if (meteo === "vent") {
//     console.log("Sortez en pull.");
// } else if (meteo === "pluie") {
//     console.log("Sortez en blouson.");
// } else if (meteo === "neige") {
//     console.log("Restez au chaud à la maison.");
// } else {
//     console.log("Je n'ai pas compris !");
// }


// JOUR SUIVANT : Exercice 

// var jour = prompt("Entrez un jour :")
// if (jour == "lundi"){
//     console.log("Demain, nous serons Mardi");
// }else if (jour === "mardi") {
//          console.log("Demain, nous serons mercredi.");
//      } else if (jour === "mercredi") {
//         console.log("Demain, nous serons jeudi.");
//      } else if (jour === "jeudi") {
//          console.log("Demain, nous serons vendredi.");
//      } else if (jour == "vendredi") {
//          console.log("Demain, nous serons samedi");
//      }  else if (jour == "samedi") {
//         console.log("Demain, nous serons dimanche");
//     } else if (jour == "dimanche") {
//         console.log("Demain, nous serons lundi");
//     } else {
//         console.log("Je n'ai pas compris");
//     }



// COMPARAISON 

// var nombre1 = prompt("Entrez un premier nombre");
// var nombre2 = prompt("Entrez un deuxième nombre");

// if (nombre1 > nombre2) {
//     console.log (nombre1 + " est plus grand que " + nombre2);
// }
// if (nombre2 > nombre1) {
//     console.log (nombre2 + " est plus grand que " + nombre1);
// }
// if (nombre1 == nombre2) {
//     console.log (nombre1 + " est égal à " + nombre2);
// }



// BACALAUREAT

/* Note inférieur à 10 = recalé
   Note de 10 à 11 = le candidat est reçu
   Note égale a 12 et + = le candidat est reçu avec mention
*/

// var moyenne = prompt("Entrez la moyenne de l'élève au bac");

// if (moyenne < 10) {
//     console.log("L'élève est recalé");
// }
// else if (moyenne < 12) { 
//     console.log("L'élève' est reçu");
// } else { 
//     console.log("L'élève est reçu avec mention");
// }


// VALEURS FINALES



// NOMBRE DE JOURS DANS UN MOIS
// Utilisation du switch car plus lisible quand bcp d'infos

// var mois = Number(prompt("Entrez le numéro d'un mois")); // NE PAS OUBLIER DE DEFINIR LE TYPE DE LA VALEUR AVANT LE PROMPT

// switch (mois){
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//     console.log("Ce mois comporte 31 jours");
//     break;

//     case 4:
//     case 6:
//     case 9:
//     case 11:
//     console.log("Ce mois comporte 30 jours");
//     break;

//     case 2:
//     console.log("Ce mois comporte 28 jours");
//     break;

//     default: // EQUIVALENT A ELSE
//     console.log("Je ne reconnais pas ce mois, désolée!");
// }



// HEURE SUIVANTE 

// var heures = Number(prompt("Entrez les heures"));
// var minutes = Number(prompt("Entrez les minutes"));
// var secondes = Number(prompt("Entrez les secondes"));

// if ((heures > 0) && (heures <= 23) && (minutes > 0) && (minutes <= 59) && (secondes > 0) && (secondes <=59)) { 
//     secondes++;
// } 
// if (secondes === 60) {
//     secondes = 0;
//     minutes++;
// }
// if (minutes === 60) {
//     minutes = 0;
//     heures++;
// }
// console.log("A la seconde suivante, il sera " + heures +" heures " + minutes + " minutes " + secondes + " secondes.");

// *********** //
// Les boucles //
// *********** //


// TOURNEZ MANEGE
// for (var i = 1; i <= 10; i++){
//     console.log("Tour numéro " + i);
// }



// NOMBRES PAIRS
// var nombre = Number(prompt("Entrez le premier nombre")); 

// for (var i = nombre; i <= nombre+ 10; i++) {
//     if (i % 2 === 0) {
//         console.log(i + " est pair");
//     }
//     else {
//         console.log(i + " est impair");
//     }
// }



// CONTROLE DE SAISIE

// Fait saisir un nombre jusqu'à ce qu'il soit inférieur ou égal à 100
// var nombre = Number(prompt("Entrez un nombre"));

// while (nombre > 100) {                              // Tant que le nombre saisi est supérieur à 100, alors
//     Number(prompt("Entrez un nombre"));             // demande à l'utilisateur de ressaisir un nombre
// }

/////////////////////////////////////////////////////////////////////////////////////////////////
// Ensuite, améliorez votre programme pour que le nombre saisi soit compris entre 50 et 100 :   /
// var nombre = 0;                                                                              /
// while ((nombre < 50) || (nombre > 100)) {                                                    /
//     nombre = Number(prompt("Entrez un nombre entre 50 et 100 : "));                          /
// }                                                                                            /
/////////////////////////////////////////////////////////////////////////////////////////////////



// ECHIQUIER ATELIER 
// Nous voulons réaliser un échequier de ce type :
/* #_#_
   _#_#
   #_#_
   _#_#

   qui est une string : #_#_/n#_#_/n#_#_/n#_#_/n

   On va décomposer nos répétitions
   on a d'abord #_#_/n#_#_/n#_#_/n#_#_/n
   puis 4 fois #_#_/n
   puis 2 fois # et 2 fois _
   on a ensuite le /n 
   
   */


// var str = "";
//  for (i = 0; i < 4; i++){ // pour notre échequier complet 
//      for (j=0; j <4; j++) {
//         if (i % 2 === 0){
//             console.log("#");
//         }
//         else {
//             console.log("_");
//         }
//         console.log()
//      }
//  }



// MATRICE ATELIER

/* Nous voulons un programme qui nous affiche : 
1
0
0
0

0       On décompose nos répétitions. 
1       Une grande répétition de 1000 0100 00100 0001
0       
0

0
0
1
0

0
0
0
1
*/
// for (i = 0; i < 4; i++){
//     for (j = 0; j < 4; j++){
//         if (i === j){
//           console.log("1");
//         }
//           else {
//             console.log("0");
//           }
//     }
//     console.log("________");
// }


// PYRAMIDE ATELIER - STRING SEPAREES
// var string = "";
// for (i = 0; i < 5; i++){
//     console.log(string += "*")
// }

// PYRAMIDE ATELIER - UNE SEULE STRING
/* var string = "\n";
for (i = 0; i < 4; i++){
  for (j = 0; j <= i; j++){    J <= I?
    string += "x";
    }
  string += "\n";
}
console.log(string) */



// Table de multiplication OPC
// var multiplier=Number(prompt("Entrez un chiffre"));
// console.log("Voici la table de multiplication de " + multiplier);
// for (i = 0 ; i <= 10 ; i++){
//   console.log(i + " x " + multiplier + " = " + (i * multiplier));
// }


// NI OUI NI NON
// var choix = prompt("Voulez vous jouer à ni oui ni non?");
// while ((choix !== "oui" && choix !== "non")) {
//   choix = prompt("Voulez vous jouer à ni oui ni non?");
// }
// console.log("Vous avez perdu");



// Triangle OPC
/* var string = "\n";
for (i = 0; i < 4; i++){
  for (j = 0; j <= i; j++){    J <= I?
    string += "x";
    }
  string += "\n";
}
console.log(string) */


// FIZZBUZZ

// Afficher les nombres de 1 à 100
//  pour chaque nombre vérifier s'il est divisible par 3
//      Si oui, afficher FIZZ
//      Si non, verifier s'il est divisible par 5
//         Si oui, afficher Buzz, 
//         Si non, afficher le chiffre

// for (i = 0 ; i <= 100; i++){
//     if (i % 3 == 0){
//         console.log("FIZZ");
//     }
//     else if (i % 5 == 0) {
//         console.log("BUZZ");
//     }
//     else{
//         console.log(i);
//     }
// }

// AMELIORER LE PROGRAMME POUR QUIL AFFICHE FIZZBUZZ A LA PLACE DES NOMBRES DIVISIBLES PAR 3 ET PAR 5
/* Afficher les nombres de 1 à 100
  pour chaque nombre, vérifier s'il est divisible par 3 et par 5
     si oui, afficher fizzbuzz      
     si non, 
     verifier s'il est divisible par 3
      si oui, afficher fizz
      si non, 
        verifier s'il est divisible par 5
        si oui afficher buzz
        si non
        afficher le chiffre */

// for (i = 0 ; i <= 100 ; i++) {
//     if ((i % 3 == 0) && (i % 5 ==0)) {
//         console.log("FIZZBUZZ");
//     }
//     else if (i % 3 == 0) {
//         console.log("FIZZ");
//     }
//     else if (i % 5 == 0) {
//         console.log("BUZZ");
//     }
//     else {
//         console.log(i);
//     }
// }



// ACTIVITE OPC DEVINETTE
     
/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

// console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
// var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");

// TODO : complétez le programme

// var choix = 0;  // ICI ON DIT AU PROGRAMME D ENTRER DANS LA BOUCLE A 0

// while (choix != solution){
//   var choix = Number(prompt("Saisissez un nombre"));
//   if (choix < solution) {
//     console.log("Trop petit");
//   }
//   else if (choix > solution) {
//     console.log("Trop grand")
//   }
//   else {
//     console.log("Gagné!");
// }

// }



/*
    LES FONCTIONS
                     */

 //DIRE BONJOUR

// Renvoie un message de bienvenue

// function direBonjour(prenom, nom) {   // ICI PARAMETRES

//   var message = "Bonjour, " + prenom + " " + nom + " !";   

//   return message;

// }


// // TODO : faire saisir le prénom et le nom de l'utilisateur
// var prenom = prompt("Quel est votre prénom?");    // ARGUMENTS
// var nom = prompt ("Quel est votre nom");

// // TODO : appeler direBonjour() avec les bons arguments et afficher son résultat

// console.log(direBonjour(prenom, nom));   



// CARRE D'UN NOMBRE

// Renvoie le carré d'un nombre

// function carre(x) {
//  return x * x;
// }       // J INITIALISE MA FONCTION AVEC L INSTRUCTION

// console.log(carre(0)); // Doit afficher 0

// console.log(carre(2)); // Doit afficher 4

// console.log(carre(5)); // Doit afficher 25

// for (var i ; i <= 10 ; i++){
//   console.log(carre(i));
// }    // JE FAIS MA BOUCLE "POUR CHAQUE CHIFFRE DE 1 A 10, J APPELLE LA FONCTION DANS LE CONSOLE LOG"




// MINIMUM 

// TODO : écrire la fonction min()

// function min(a, b) {
//   if (a < b) {
//       return a;
//   } else {
//       return b;
//   }
// }

// console.log(min(4.5, 5)); // Doit afficher 4.5

// console.log(min(19, 9)); // Doit afficher 9

// console.log(min(1, 1)); // Doit afficher 1


// CALCULATRICE 

// TODO : écrire la fonction calculer()

// function calculer ( nb1, op, nb2) {

//   if (op == "+"){
//     return nb1 + nb2 ;
//   }

//   else if (op == "-"){
//     return nb1 - nb2;
//   }

//   else if (op == "*"){
//     return nb1 * nb2;
//   }
  
//   else {
//     return nb1 / nb2;
//   }
// }


// console.log(calculer(4, "+", 6)); // Doit afficher 10

// console.log(calculer(4, "-", 6)); // Doit afficher -2

// console.log(calculer(2, "*", 0)); // Doit afficher 0

// console.log(calculer(12, "/", 0)); // Doit afficher Infinity




// PERIMETRE ET AIRE D UN CERCLE

// function perimetre(rayon) {
//   return 2 * rayon * Math.PI;
// }

// // Renvoie l'aire d'un cercle
// function aire(rayon) {
//   return Math.pow(rayon, 2) * Math.PI;
// }

// var r = Number(prompt("Entrez le rayon d'un cercle :"));
// console.log("Son périmètre vaut " + perimetre(r));
// console.log("Son aire vaut " + aire(r));



/*                                      |
|                                       |
|    Exercices débutants skillcode      |
|                                       |
|                                       |*/



// //  "Hello world" 

// console.log("Hello World :)");



// // Calculs divers 

// console.log(3*3);
// console.log(12/0);
// console.log(4+9+78);
// console.log(12-7);
// console.log(5e4);



// Communiquer avec l'ordinateur

// var prenom = prompt("Entrez votre prénom");
// console.log("Bonjour " + prenom);
// // ou 
// alert("bonjour " + prenom);



//  Nom et prénom
// var prenom = "Amélie ";
// var nom = "Grandin";
// console.log("Bonjour" + prenom + nom);



// exercice 5 
// var myNumber = "123";  
// console.log(parseInt(myNumber));



// Exercice 6
// var min = "bonjour je suis une phrase écrite en minuscules !";
// var maj = "BONJOUR! MOI, JE SUIS UNE PHRASE ECRITE EN MAJUSCULES";

// console.log(min.toUpperCase());
// console.log(maj.toLowerCase());



// INTRODUCTION AVANCES
// EXERCICE 1
// var empty = "";
// var filled = "Je contient une phrase";

// if (empty === "") {
//   console.log("true");
// }
// else {
//   console.log("false");
// }



// EXERCICE 2
// var anneeActuelle = Number(prompt("Saisissez l'année actuelle"));
// var anneeNaissance = Number(prompt("Saisissez votre année de naissance"));
// var age = anneeActuelle - anneeNaissance;
// console.log("Vous avez " + age + " ans");

// POUR ALLER PLUS LOIN :
// var anneeActuelle = Number(prompt("Saisissez l'année actuelle"));
// var anneeNaissanceA = Number(prompt("Saisissez votre année de naissance"));
// var anneeNaissanceB = Number(prompt("Saisissez l'année de naissance de votre voisin"));
// var ages = (anneeActuelle - anneeNaissanceA) + (anneeActuelle - anneeNaissanceB);
// console.log("A vous deux, vous avez " + ages + " ans");



// EXERCICE 3

// var prix1 = 70;
// var prix2 = 59;
// var prix3 = 20;
// var reduc = 20 / 100;

// var total = (prix1 + prix2 + prix3) - (prix1 + prix2 + prix3) * reduc;
// console.log(total);



// EXERCICE 4
// var nb1 = Number(prompt("Saisissez le premier nombre à additionner"));
// var nb2 = Number(prompt("Saisissez le deuxième nombre à additionner"));
// var total = console.log(nb1 + nb2);



// EXERCICE 5 
// var nom = prompt("Saisissez votre nom");
// var prenom = prompt("Saisissez maitnenant votre prénom");

