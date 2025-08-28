// squareArray(arr) – zwraca nową tablicę z kwadratami liczb.
export const squareArray = arr => arr.map(num => num * num);

// positiveNumbers(arr) – zwraca tylko liczby dodatnie.
export const positiveNumbers = arr => arr.filter(num => num > 0);

// sumArray(arr) – suma wszystkich liczb (reduce).
export const sumArray = arr => arr.reduce((acc, curr) => acc + curr, 0);

// toUpperAll(arr) – zmienia wszystkie stringi w tablicy na wielkie litery.
export const toUpperAll = arr => arr.map(str => str.toUpperCase());

// countLongWords(arr, minLen) – liczy, ile słów ma długość ≥ minLen.
export const countLongWords = (arr, minLen) =>
  arr.filter(word => word.length >= minLen).length;

// getAdults(users) – zwraca tablicę osób pełnoletnich.
export const getAdults = users => users.filter(user => user.age >= 18);

// getNames(users) – zwraca tablicę imion.
export const getNames = users => users.map(user => user.name);

// avgAge(users) – zwraca średni wiek wszystkich użytkowników.
export const avgAge = users =>
  users.reduce((sum, user) => sum + user.age, 0) / users.length;

// flattenArray(arr) – spłaszcz tablicę 2D w 1D.
export const flattenArray = arr => arr.reduce((acc, curr) => acc.concat(curr), []);

// wordStats(str) – policz ile liter ma każde słowo w zdaniu.
export const wordStats = str =>
  str.split(" ").reduce((acc, curr) => {
    acc[curr] = curr.length;
    return acc;
  }, {});

// === Testy ===
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
    // === Dzień 4 testy ===
    assertEqual(JSON.stringify(squareArray([2, 3])), "[4,9]", "squareArray");
    assertEqual(JSON.stringify(positiveNumbers([-1, 0, 5])), "[5]", "positiveNumbers");
    assertEqual(sumArray([5, 5, 5]), 15, "sumArray");
    assertEqual(JSON.stringify(toUpperAll(["ala", "kot"])), "[\"ALA\",\"KOT\"]", "toUpperAll");
    assertEqual(countLongWords(["ala", "kot", "programowanie"], 5), 1, "countLongWords");
    assertEqual(JSON.stringify(getAdults([
      { name: "Adam", age: 26 },
      { name: "Ewa", age: 17 }
    ])), JSON.stringify([{ name: "Adam", age: 26 }]), "getAdults");
    assertEqual(JSON.stringify(getNames([
      { name: "Adam", age: 26 },
      { name: "Ewa", age: 17 }
    ])), "[\"Adam\",\"Ewa\"]", "getNames");
    assertEqual(avgAge([{ age: 10 }, { age: 20 }]), 15, "avgAge");

    // Zadania dodatkowe
    assertEqual(JSON.stringify(flattenArray([[1, 2], [3], [4, 5]])), "[1,2,3,4,5]", "flattenArray");
    assertEqual(JSON.stringify(wordStats("Ala ma kota")), "{\"Ala\":3,\"ma\":2,\"kota\":4}", "wordStats");

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
  console.log("Uruchomiono testy Dzień 4 ✅");
});
