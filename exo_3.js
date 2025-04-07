let age = 18
let firstname = true

if (age >= 18 && firstname) {
    console.log("majeur et possède un prénom valide");
} else if (age < 18 && firstname) {
    console.log("mineur et possède un prénom valide");
} else {
    console.log("n'a pas de prénom valide");
}