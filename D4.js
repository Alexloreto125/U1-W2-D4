/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ES NUMERO 1");
const area = function (l1, l2) {
  return l1 * l2;
};
console.log(area(5, 2));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ES NUMERO 2");
const crazySum = function (n1, n2) {
  if (n1 === n2) {
    result = (n1 + n2) * 3;
    return result;
  } else {
    result = n1 + n2;
    return result;
  }
};
console.log(crazySum(5, 5));
/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ES NUMERO 3");
const n19 = 19;
const crazyDiff = function (n1) {
  if (n1 > 19) {
    let differenzaAssoluta = Math.sign(n1 - 19) * 3;
    return differenzaAssoluta;
  } else {
    differenzaAssoluta = Math.sign(n1 - 19); // Math.abs toglie negativi = 1
    return differenzaAssoluta;
  }
};
console.log(crazyDiff(20));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ES NUMERO 4");
const boundary = function (n) {
  return (n > 20 && n <= 100) || n === 400;
};
console.log(boundary(400));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ES NUMERO 5");
const str = "CIAO E' LA SOLUZIONE";

const epify = function (EPICODE) {
  if (str.startsWith("EPICODE")) {
    return str;
  } else {
    return "EPICODE " + str;
  }
};
console.log(epify());

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ES NUMERO 6");

const check3and7 = function (n) {
  if (n >= 0) {
    return n % 3 === 0 || n % 7 === 0;
  } else {
    return "numero negativo";
  }
};
console.log(check3and7(49));
/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ES NUMERO 7");

const reverseString = function (str) {
  return (str = str.split("").reverse().join(""));
};
console.log(reverseString("EPICODE"));
/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ES NUMERO 8");

const upperFirst = function (str) {
  str = str.toString();
  str = str.charAt(0).toUpperCase() + str.slice(1);
  return str;
};
console.log(upperFirst("ciao epicoder"));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ES NUMERO 9 ");
const cutString = function (stringa) {
  stringa = stringa.toString();
  return stringa.slice(1, -1);
};
console.log(cutString("ciao epicoder"));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const giveMeRandom = function (n) {};
