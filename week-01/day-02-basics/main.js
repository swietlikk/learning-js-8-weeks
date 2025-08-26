// === Sekcja A: zmienne i typy ===
let age = 21;             // zmienna - można zmienić
const name = "Adam";      // stała - nie można przypisać nowej wartości
const person = { name, age };
person.age = 26;          // obiekt można modyfikować (mutacja), choć const

// Sprawdź typy:
console.log(typeof age, typeof name, typeof person); // number string object

// === Sekcja B: operatory i koercja ===
const a = "2";
const b = 2;
console.log(a + b);       // "22" (string + number = string)
console.log(Number(a) + b); // 4
console.log(a == b, a === b); // true vs false

// === Sekcja C: funkcje pomocnicze ===
export function add(x, y) { return Number(x) + Number(y); }
export function sub(x, y) { return Number(x) - Number(y); }
export function mul(x, y) { return Number(x) * Number(y); }
export function div(x, y) {
  x = Number(x); y = Number(y);
  if (y === 0) throw new Error("Dzielenie przez zero");
  return x / y;
}

// Średnia z listy liczb (rest params)
export function avg(...nums) {
  const values = nums.map(Number);
  return values.reduce((acc, n) => acc + n, 0) / values.length;
}

// === Sekcja D: warunki ===
export function describeAge(n) {
  n = Number(n);
  if (Number.isNaN(n)) return "nie liczba";
  return n >= 18 ? "dorosły" : "niepełnoletni";
}

// === Sekcja E: mini-kalkulator w konsoli ===
// calculator(2, 3, "+") => 5
export function calculator(x, y, op) {
  const ops = {
    "+": () => add(x, y),
    "-": () => sub(x, y),
    "*": () => mul(x, y),
    "/": () => div(x, y),
  };
  const fn = ops[op];
  if (!fn) throw new Error("Nieznany operator: " + op);
  return fn();
}

// === Sekcja F: proste "testy" w konsoli ===
function assertEqual(actual, expected, msg) {
  if (Number.isNaN(expected) && Number.isNaN(actual)) return;
  if (actual !== expected) {
    throw new Error(`❌ ${msg} -> expected ${expected}, got ${actual}`);
  }
}

export function runTests() {
  const lines = [];
  const log = (s) => lines.push(s);

  try {
    assertEqual(add(2, "3"), 5, "add");
    assertEqual(sub(10, 4), 6, "sub");
    assertEqual(mul(3, 3), 9, "mul");
    assertEqual(calculator(10, 2, "/"), 5, "calculator /");
    assertEqual(describeAge(17), "niepełnoletni", "describeAge 17");
    assertEqual(describeAge(18), "dorosły", "describeAge 18");

    let threw = false;
    try { div(1, 0); } catch { threw = true; }
    assertEqual(threw, true, "dzielenie przez zero rzuca błąd");

    log("✅ Wszystkie testy przeszły!");
  } catch (e) {
    log(String(e.message || e));
  }
  return lines.join("\n");
}

// Podłącz przycisk do testów
document.getElementById("run").addEventListener("click", () => {
  const out = document.getElementById("out");
  out.textContent = runTests();
  console.clear(); // czyść, żeby było czytelnie
  console.log("Uruchomiono testy Dzień 2 ✅");
});
