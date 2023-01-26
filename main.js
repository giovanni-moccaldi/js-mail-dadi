//fare lista con array e ciclo
//fare lista di email
//se email é uguale email nella lista stampo alert
//se email  non é uguale email nella lista stampo alert diverso

const email = [
    "ansia@ghghg",
    "strepidazione@gjgj",
    "addio"
];
const text = prompt("la tua email ?")
console.log(text);

for (let i = 1; i < email.length; i++) {
    console.log(email[i]);
    if (text == email[i]) {
        alert("bravo,la tua email é giusta");
    }
    if (text != email[i]) {
        alert("Hai dimenticato la tua email?riprova");
    }
}

// dadi
// diamo numeri random a me e al computer


const person = Math.floor(Math.random() * 6) + 1;
const mycomputer = Math.floor(Math.random() * 6) + 1;
console.log(mycomputer);
console.log(person)

// fare la condizione
if (mycomputer > person) {
    alert("ha vinto il computer");


}
if (person < mycomputer) {
    alert("hai vinto");


}
else if (mycomputer == person) {
    alert("try again")


}