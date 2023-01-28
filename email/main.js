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
        trovato = true;
        console.log(trovato)

    }
    if (trovato == false) {
        console.log(trovato)

    }
}

