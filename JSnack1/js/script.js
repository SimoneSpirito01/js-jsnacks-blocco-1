
// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while

let number;
let somma = 0;

// soluzione con for

// for (let i = 0; i < 5; i++){
//     number = parseInt(prompt('Inserisci un numero'));
//     while (isNaN(number)){
//         alert('ATTENZIONE! Inserisci un numero')
//         number = parseInt(prompt('Inserisci un numero'));
//     }
//     console.log('Il numero che hai inserito è: ' + number)
//     somma +=  number;
// }

// soluzione con while

let i = 0;

while (i < 5){
    number = parseInt(prompt('Inserisci un numero'));
    while (isNaN(number)){
        alert('ATTENZIONE! Inserisci un numero')
        number = parseInt(prompt('Inserisci un numero'));
    }
    console.log('Il numero che hai inserito è: ' + number)
    somma +=  number;
    i++;
}

console.log('La somma dei numeri che hai inserito è: ' + somma);