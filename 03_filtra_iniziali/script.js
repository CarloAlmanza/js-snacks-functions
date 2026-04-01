/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function iniziali(nomi, lettera) {
    const iniziali = [];
    for (let i = 0; i < nomi.length; i++) {
        for (let j = 0; j < nomi[i].length; j++) {
            if (nomi[i][0] === lettera && j === 0) {
                iniziali.push(nomi[i]);
            }
        }
    }
    return iniziali;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(iniziali(names, 'A'));


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]