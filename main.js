//fare lista con array e ciclo
//fare lista di email
//se email é uguale email nella lista stampo alert
//se email  non é uguale email nella lista stampo alert diverso

const email = [
    "trovato@gmgm",
    "ansia@ghghg",
    "strepidazione@gjgj",
    "addio"
];
let text = prompt("la tua email ?")
// console.log(typeof text);
let trovato = false;

for (let i = 0; i < email.length && trovato == false; i++) {

    if (text == email[i]) {
        alert("bravo,la tua email é giusta");
        trovato = true;

    }
    if (trovato == false) {
        alert("Hai dimenticato la tua email?riprova");
    }
}

// dadi
// diamo numeri random a me e al computer


// const person = Math.floor(Math.random() * 6) + 1;
// const mycomputer = Math.floor(Math.random() * 6) + 1;
// console.log(mycomputer);
// console.log(person)

// // fare la condizione
// if (mycomputer > person) {
//     alert("ha vinto il computer");


// }
// if (person < mycomputer) {
//     alert("hai vinto");


// }
// else if (mycomputer == person) {
//     alert("try again")


// }