/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
function saluto(nome) {
    const data = new Date();
    const ora = data.getHours();
    let messaggio = '';
    if (ora < 13) {
        messaggio = `buongiorno ${nome}`;
    } else if (ora >= 13 && ora < 17) {
        messaggio = `buon pomeriggio ${nome}`;
    } else {
        messaggio = `buonasera ${nome}`;
    }
    return messaggio;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(saluto(name));


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.