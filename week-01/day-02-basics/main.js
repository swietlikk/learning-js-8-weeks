// === Sekcja A: zmienne i typy ===
let age = 21;
const name = "Adam";
const person = { name, age };
person.age = 26;

export function greet(name, age) {
  return `Witaj, ${name}! Masz ${age} lat.`;
}

console.log(greet("Adam", 26));
console.log(typeof age, typeof name, typeof person);

// === Sekcja B: operatory i koercja ===
const a = "2";
const b = 2;
console.log(a + b);         // "22"
console.log(Number(a) + b); // 4
console.log(a == b, a === b); // true false

function toNumber(n) {
  const num = Number(n);
  if (Number.isNaN(num)) throw new Error(`Nieprawidłowa liczba: ${n}`);
  return num;
}

// === Sekcja C: funkcje pomocnicze ===
export function add(x, y) { return toNumber(x) + toNumber(y); }
export function sub(x, y) { return toNumber(x) - toNumber(y); }
export function mul(x, y) { return toNumber(x) * toNumber(y); }
export function div(x, y) {
  const xx = toNumber(x);
  const yy = toNumber(y);
  if (yy === 0) throw new Error("Dzielenie przez zero");
  return xx / yy;
}

export function avg(...nums) {
  const values = nums.map(toNumber);
  return values.reduce((acc, n) => acc + n, 0) / values.length;
}

// === Sekcja D: warunki ===
export function describeAge(n) {
  n = Number(n);
  if (Number.isNaN(n)) return "nie liczba";
  return n >= 18 ? "dorosły" : "niepełnoletni";
}

// === Sekcja E: mini-kalkulator ===
export function calculatorSwitch(x, y, op) {
  const xx = toNumber(x);
  const yy = toNumber(y);
  switch (op) {
    case "+": return xx + yy;
    case "-": return xx - yy;
    case "*": return xx * yy;
    case "/":
      if (yy === 0) throw new Error("Dzielenie przez zero");
      return xx / yy;
    default:
      throw new Error("Nieznany operator: " + op);
  }
}
export const calculator = calculatorSwitch;

// === Sekcja F: proste testy ===
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
    assertEqual(div(10, 2), 5, "div");
    assertEqual(avg(2, 4, 6), 4, "avg");
    assertEqual(calculator(10, 2, "/"), 5, "calculator /");
    assertEqual(describeAge(17), "niepełnoletni", "describeAge 17");
    assertEqual(describeAge(18), "dorosły", "describeAge 18");

    let threwInvalid = false;
    try { calculator("2", "x", "+"); } catch (e) { threwInvalid = true; }
    assertEqual(threwInvalid, true, "calculator invalid number");

    assertEqual(calculatorSwitch(5, 5, "*"), 25, "calculatorSwitch *");

    let threw = false;
    try { div(1, 0); } catch { threw = true; }
    assertEqual(threw, true, "dzielenie przez zero rzuca błąd");

    log("✅ Wszystkie testy przeszły!");
  } catch (e) {
    log(String(e.message || e));
  }
  return lines.join("\n");
}

document.getElementById("run").addEventListener("click", () => {
  const out = document.getElementById("out");
  out.textContent = runTests();
  console.clear();
  console.log("Uruchomiono testy Dzień 2 ✅");
});
