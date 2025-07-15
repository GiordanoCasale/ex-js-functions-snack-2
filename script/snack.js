//snack 1

// Funzione dichiarativa che somma due numeri e restituisce il risultato
function somma(a, b) {
    return a + b;
}

// Esempio di utilizzo della funzione somma
console.log(somma(2, 3)); // Stampa 5

// Funzione anonima assegnata a una variabile che somma due numeri
const sommaAnonima = function (a, b) {
    return a + b;
}

// Esempio di utilizzo della funzione anonima
console.log(sommaAnonima(3, 4)); // Stampa 7

// Funzione freccia (arrow function) che somma due numeri
const sommaFreccia = (a, b) => {
    return a + b;
}

// Esempio di utilizzo della funzione freccia
console.log(sommaFreccia(5, 5)); // Stampa 10


//snack 2

// Arrow function che calcola il quadrato di un numero
const quadrato = (numero) => numero * numero

// Esempio di utilizzo della funzione quadrato
console.log(quadrato(3)); // Stampa 9

//snack 3

// Funzione che esegue un'operazione (callback) su due numeri
const eseguioperazione = (a, b, operazione) => operazione(a, b);

// Funzione che somma due numeri
const sommadue = (a, b) => a + b;
// Funzione che moltiplica due numeri
const moltiplica = (a, b) => a * b;

// Esempi di utilizzo di eseguioperazione con diverse operazioni
console.log(eseguioperazione(2, 3, sommadue)); // Stampa 5
console.log(eseguioperazione(4, 5, moltiplica)); // Stampa 20

//snack 4

// Funzione che crea e restituisce una nuova funzione timer
// La funzione restituita, quando chiamata, avvia un setTimeout che stampa "tempo scaduto" dopo 'tempo' millisecondi
function creaTimer(tempo) {
    return function () {
        setTimeout(() => {
            console.log("tempo scaduto");
        }, tempo);
    }
}

// Crea un timer che scade dopo 2000 ms (2 secondi)
const timer = creaTimer(2000);
// Avvia il timer
timer();

//snack 5

// Funzione che stampa un messaggio in console
function messaggino() {
    console.log("sei il più forte");
}


// Avvia un intervallo che chiama messaggino ogni 1000 ms (1 secondo)
setInterva(messaggino, 1000);

//snack 6

// Funzione che crea e restituisce una nuova funzione contatore automatico
// La funzione restituita, quando chiamata, avvia un setInterval che incrementa e stampa un contatore ogni 'intervallo' ms
function creaContatoreAutomatico(intervallo) {
    return function () {
        let contatore = 0; // Inizializza il contatore a 0
        setInterval(() => {
            contatore++; // Incrementa il contatore
            console.log(contatore); // Stampa il valore attuale del contatore
        }, intervallo);
    }
}

// Crea un contatore che si aggiorna ogni 1000 ms (1 secondo)
const avviacontatore = creaContatoreAutomatic(1000);
// Avvia il contatore automatico
avviacontatore();

//snack 7

/**
 * Stampa un messaggio a intervalli regolari e si ferma dopo un certo tempo.
 * @param {string} messaggio - Il messaggio da stampare ad ogni intervallo.
 * @param {number} avvio - L'intervallo di tempo (in millisecondi) tra una stampa e l'altra.
 * @param {number} stop - Il tempo totale (in millisecondi) dopo il quale fermare la stampa.
 */
function eseguiEferma(messaggio, avvio, stop) {
    // Avvia un intervallo che stampa il messaggio ogni 'avvio' millisecondi
    const intervalloId = setInterval(() => {
        console.log(messaggio);
    }, avvio);

    // Dopo 'stop' millisecondi, ferma l'intervallo e stampa che il timer è stato fermato
    setTimeout(() => {
        clearInterval(intervalloId); // Ferma il setInterval
        console.log("Timer fermato"); // Messaggio di conferma
    }, stop);
}

// Esempio di utilizzo:
// Stampa "Ciao!" ogni secondo (1000 ms) e si ferma dopo 5 secondi (5000 ms)
eseguiEferma("Ciao!", 1000, 5000); // Stampa "Ciao!" ogni secondo, si ferma dopo 5000 ms

