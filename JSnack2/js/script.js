
// Dare la possibilità di inserire due parole.
// Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.
// Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

const p1 = prompt('Inserisci una parola');
console.log('La prima parola che hai inserito è: ' + '"' + p1 + '"');
const p2 = prompt('Inserisci una parola');
console.log('La seconda parola che hai inserito è: ' + '"' + p2 + '"');

if (p1.length == p2.length){
    console.log('Le parole ' + '"' + p1 + '"' + ' e ' + '"' + p2 + '"' + ' hanno la stessa lunghezza')
} else if (p1.length < p2.length){
    console.log('La parola più lunga è: ' + '"' + p2 + '"')
} else {
    console.log('La parola più lunga è: ' + '"' + p1 + '"')
}