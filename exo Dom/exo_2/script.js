const bouton = document.getElementById("calculate")

bouton.addEventListener("click", function() {
  const nombre1 = document.getElementById("number1").value
  const nombre2 = document.getElementById("number2").value

  const n1 = Number(nombre1)
  const n2 = Number(nombre2)

  const somme = n1 + n2

  const resultat = document.getElementById("result")
  resultat.textContent = "Résultat : " + somme;
})
  