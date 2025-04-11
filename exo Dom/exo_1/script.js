document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("validerBtn");
  
    button.addEventListener("click", afficherMessage);
  });
  
  function afficherMessage() {
    const input = document.getElementById('userInput').value.trim().toLowerCase();
    const messageElement = document.getElementById('message');
  
    if (input === "bonjour") {
      messageElement.textContent = "Bonne journée !";
      messageElement.style.color = "green";
    } else if (input === "au revoir") {
      messageElement.textContent = "À la prochaine !";
      messageElement.style.color = "green";
    } else {
      messageElement.textContent = "Je ne comprends pas";
      messageElement.style.color = "red";
    }
  }
  