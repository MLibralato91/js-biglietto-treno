// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

let nome = prompt('Come ti chiami?')
let kilometers = parseInt(prompt('Quanti km vuoi percorrere?'));
let yourAge = parseInt(prompt('Quanti anni hai?'));
console.log(kilometers);
console.log(yourAge);

const standardPrice = ('0.21')
console.log(standardPrice);

let youngDiscount = 0.20;
let oldDiscount = 0.40;

let finalPrice = (standardPrice * kilometers);

// Condizioni
if(yourAge < 18){
    finalPrice = (finalPrice - (finalPrice * youngDiscount));
}

if(yourAge >= 65){
    finalPrice = (finalPrice - (finalPrice * oldDiscount));
}

finalPrice = finalPrice.toFixed(2);
console.log(finalPrice);

// Output
document.getElementById('prezzo').innerHTML +=
`
    <p>${finalPrice}</p>
`
;
document.getElementById('km').innerHTML +=
`
    <p>${kilometers}</p>
`
;
document.getElementById('nome').innerHTML +=
`
    <p>${nome}</p>
`
;