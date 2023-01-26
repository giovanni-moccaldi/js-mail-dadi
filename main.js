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
    if (text == email) {
        alert("bravo,la tua email é giusta");
    }
    else if (text != email) {
        alert("Hai dimenticato la tua email?riprova");
    }


}
