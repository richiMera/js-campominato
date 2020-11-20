// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.


function generateNumber(min, max) {
  return Math.floor(Math.random()* (max - min) + min);
};

function sameNumberCheck(numero, array) {
  risultato = false;
  for (var i = 0; i < array.length; i++) {
    if (numero == array[i]) {
      risultato = true;
    }
  }
  return risultato;
};

//-------------------------------------------------------------------------//

var bombs = 16;
// BONUS
var level = (prompt("scegli difficoltà: facile, media, difficile"));
var attempts;

switch (level) {
  case "difficile":
   attempts = 50;
    break;
  case "media":
    attempts = 80;
    break;
  default:
    attempts = 100;
};
var totalAttempts = attempts - bombs;
// FINE BONUS

var arrayBomb = [];

while (arrayBomb.length < bombs) {
  var random = generateNumber(1, attempts);
  // console.log(random);

  var insertNumber = sameNumberCheck(random, arrayBomb);
  if (insertNumber == false) {
    // console.log(insertNumber);
    arrayBomb.push(random);
    // console.log(arrayBomb);
  }
};

console.log(arrayBomb);

var userArray = [];
var i = false;
var punteggio = 0;
while (userArray.length < totalAttempts && i == false) {
  var userNumbers = parseInt(prompt("inserisci un numero da 1 a " + attempts));
  var numberAlreadyUsed = sameNumberCheck(userNumbers, userArray);
  var checkGameOver = sameNumberCheck(userNumbers, arrayBomb);
  if (checkGameOver == true) {
    alert("Game Over");
    i = true;
  } else if (numberAlreadyUsed == false) {
    userArray.push(userNumbers);
    console.log(userArray);
    punteggio++;
    console.log("il punteggio è " +  punteggio);
  };
};


if (punteggio == 5) {
  alert("hai vinto");
} else {
  alert("il tuo punteggio è " + punteggio);
};
