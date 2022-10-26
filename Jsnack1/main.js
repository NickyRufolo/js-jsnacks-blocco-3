// -array vuoto
// -chiedere all'user un numero da inserire nell'array con prompt o parse int
const array = []; // array vuoto 
let sum = 0; //variabile somma = 0
//creo ciclo do while
do {
    //codice da eseguire
    let x = 0 
    array = [parseInt(prompt(`inserisci un numero`))];
    sum += array[x]; // sum = sum + array [x]
    //terminare il ciclo
    x++;
}while(sum < 50); //condizione
console.log(sum);




