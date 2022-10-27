// *Snack4 (Bonus)*
// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
// Interrompi il ciclo appena il nome è stato trovato.
// Buon lavoro -->
let names = [`andrea`, `marco`, `pippo`];

let name = prompt(`Inserisci il nome`);

let i = 0;

let  statoNome = false; //non sei iscritto

while( i < names.length ){

    //opzione 1 
    //if(name == names[i] ){
    // statoNome = true; //Sei invitato!
    //}

    //opzione2
    if(name ==names[i]){
        console.log(`sei invitato!`);
        statoNome = true;
        break;
    }
    i++;
}
    //opzione 1 
    // if(statonome){
    //    console.log(`sei Invitato`)
    // } else {
    // console.log(`Iscriviti`);
    //}

//opzione 2
//if (name != names[i]){
//  console.log(`abbiamo controllato ma non sei presente`);
// }

//idea con includes e finisci l'esercizio
console.log(names.includes(name));