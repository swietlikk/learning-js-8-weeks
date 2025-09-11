// Znajdowanie elementów
const title = document.getElementById("title");
const desc = document.querySelector(".desc");
const list = document.getElementById("list");

// Zmiana tekstu po kliknięciu przycisku
document.getElementById("changeText").addEventListener("click", () => {
  title.textContent = "Tekst został zmieniony! 🎉";
  desc.style.color = "blue";
});

// Dodawanie nowego elementu do listy
document.getElementById("addItem").addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = "Nowy element " + (list.children.length + 1);
  list.appendChild(li);
});
