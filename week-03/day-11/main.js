import { greet, mapArray, filterArray, findInArray } from "./function.js";

function assertEqual(actual, expected, msg) {
  if (JSON.stringify(actual) !== JSON.stringify(expected)) {
    throw new Error(`❌ ${msg} -> expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}`);
  }
}

export function runTests() {
  const lines = [];
  const log = (s) => lines.push(s);

  try {

    let greeting = "";
    greet("Adam", (msg) => { greeting = msg; });
    assertEqual(greeting, "Witaj, Adam!", "greet");

    assertEqual(mapArray([1, 2, 3], (x) => x * 2), [2, 4, 6], "mapArray");

    assertEqual(filterArray([1, 2, 3, 4], (x) => x % 2 === 0), [2, 4], "filterArray");

    assertEqual(findInArray([5, 12, 8, 130, 44], (x) => x > 10), 12, "findInArray");
    assertEqual(findInArray([1, 2, 3], (x) => x > 10), undefined, "findInArray no match");

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
  console.log("Uruchomiono testy Tydzień 3 – Dzień 1 ✅");
});