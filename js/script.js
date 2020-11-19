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

function pointCalcolator(array) {
  for (var i = 0; i < array.length; i++) {
    alert("hai inserito " + array.length + " numeri su 84");
    break;
  }
};

//-------------------------------------------------------------------------//
var arrayBomb = [];

while (arrayBomb.length < 16) {
  var random = generateNumber(1, 100);
  // console.log(random);

  var insertNumber = sameNumberCheck(random, arrayBomb);
  if (insertNumber == false) {
    // console.log(insertNumber);
    arrayBomb.push(random);
    // console.log(arrayBomb);
  }
};

// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
console.log(arrayBomb);

var userArray = [];
while (userArray.length < 17) {
  var userNumbers = parseInt(prompt("inserisci un numero da 1 a 100"));
  var numberAlreadyUsed = sameNumberCheck(userNumbers, userArray);
  var checkGameOver = sameNumberCheck(userNumbers, arrayBomb);
  if (checkGameOver == true) {
    alert("Game Over");
    break;
  } else if (numberAlreadyUsed == false) {
    userArray.push(userNumbers);
    console.log(userArray);
  };
};

console.log(userArray);

var finalPointer = pointCalcolator(userArray)
console.log(userArray);
// Se il numero è presente nella in arreyBomb, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito
// var defeatNumber = sameNumberCheck(userNumbers, arrayBomb)
// if (defeatNumber == true) {
//   alert("Game Over")
// } else {
//
// }
// console.log(defeatNumber);
