import { sumArray, sumArrayReduce, squareArray, positiveNumbers, avgArray } from "./arrays.js";
import { describeBook, getAdults, avgAge} from "./objects.js";

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
    assertEqual(sumArrayReduce([2, 2, 4]), 8, "sumArray");
    assertEqual(squareArray([2, 3]), [4, 9], "squareArray");

    // objects.js
    assertEqual(describeBook({ title: "Hobbit",author: "J.R.R. Tolkien", pages: 300 }), ["title", "author", "pages"], "describeBook");
    assertEqual(
  getAdults([
    { name: "Adam", age: 22 },
    { name: "John", age: 16 }
  ]),
  [{ name: "Adam", age: 22 }],
  "getAdults"
);

    assertEqual(
  avgAge([
    { name: "Adam", age: 22 },
    { name: "John", age: 30 }
  ]),
  26,
  "avgAge"
);

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
  console.log("Uruchomiono testy Dzień powtarzający ✅");
});
