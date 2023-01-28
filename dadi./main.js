// dadi
// diamo numeri random a me e al computer


const person = Math.floor(Math.random() * 6) + 1;
const mycomputer = Math.floor(Math.random() * 6) + 1;
console.log(mycomputer);
console.log(person)

// fare la condizione
if (mycomputer > person) {

    console.log(`il pc ha vinto con`) + (person);
}
if (person < mycomputer) {
    console.log("hai vinto con") + (mycomputer);



}
else if (mycomputer == person) {
    alert("try again")


}