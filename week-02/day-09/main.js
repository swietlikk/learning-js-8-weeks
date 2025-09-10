import { sumArray, squareArray } from "./arrays.js";
import { getKeys, getValues } from "./objects.js";

function assertEqual(actual, expected, msg) {
  if (JSON.stringify(actual) !== JSON.stringify(expected)) {
    throw new Error(`❌ ${msg} -> expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}`);
  }
}

export function runTests() {
  const lines = [];
  const log = (s) => lines.push(s);

  try {
    // arrays.js
    assertEqual(sumArray([1, 2, 3]), 6, "sumArray");
    assertEqual(squareArray([2, 3]), [4, 9], "squareArray");

    // objects.js
    assertEqual(getKeys({ a: 1, b: 2 }), ["a", "b"], "getKeys");
    assertEqual(getValues({ a: 1, b: 2 }), [1, 2], "getValues");

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
  console.log("Uruchomiono testy Dzień 9 ✅");
});
