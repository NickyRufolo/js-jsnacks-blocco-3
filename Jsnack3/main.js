// *Snack3* (Bonus)
// Fai inserire un numero, che chiameremo N, all’utente.
// Genera N array,
// ognuno formato da 10 numeri casuali da 1 a 100.
// Ogni volta che ne crei uno, stampalo.
//(quindi è a comando dell'utente)

// Inserire un numero = input in html
// Trasformare input in un valore ParseInt, da stringa a numero
// Prendere valore numero e generare in base al numero degli array di 10 numeri casuali
//da 1 a 100

//Se


    let n = parseInt(document.getElementById(`inputNumber`));
    let i = 0;

    while(i < n) { //tot cicli fino a n
        //console.log(`il numero del ciclo è: $${i}`)
        let array = [];

        while( array.length < 10){  //loop interno, dobbiamo dire punto partenza e fine, array.lenght funzione che ci dice quanti caratteri in un astringa
            let randomNumber = Math.floor( Math.random() * 100);
            array.push(randomNumber);
        }

        console.log(array);

        i++;
    }
    


