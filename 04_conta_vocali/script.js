/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function vocali(parola) {
    let contatore = 0;
    for (let i = 0; i < parola.length; i++) {
        if (parola[i] === 'a' || parola[i] === 'e' || parola[i] === 'i' || parola[i] === 'o' || parola[i] === 'u') {
            contatore++;
        }
    }
    return contatore;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(vocali(word));


//Risultato atteso se si passa 'javascript': 3 (a, a, i)