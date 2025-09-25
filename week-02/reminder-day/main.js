import { sumArray, sumArrayReduce, squareArray, positiveNumbers, avgArray } from "./arrays.js";
import { describeBook, getAdults, avgAge} from "./objects.js";
import { countChars, findMax, reverseArray } from "./functions.js";

document.getElementById("btn1").addEventListener("click", () => {
  document.getElementById("output").textContent = "Kliknięto!";
});

document.getElementById("addBtn").addEventListener("click", () => {
  const input = document.getElementById("textInput");
  const text = input.value.trim();

  if (text) {
    const li = document.createElement("li");
    li.textContent = text;
    document.getElementById("list").appendChild(li);
    input.value = "";
  }
});

document.getElementById("colorBtn").addEventListener("click", () => {
  document.body.style.backgroundColor =
    document.body.style.backgroundColor === "lightblue" ? "white" : "lightblue";
});

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
    assertEqual(positiveNumbers([-2, -1, 0, 1, 2]), [1, 2], "positiveNumbers");
    assertEqual(avgArray([1, 2, 3, 4, 5, 6]), 3.5, "avgArray");

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
    assertEqual(reverseArray([1, 2, 3, 4, 5, 6])[reverseArray]);
    assertEqual(findMax([1, 2, 3, 4, 5]), 5, "findMax");
    assertEqual(JSON.stringify(countChars("hello")), "{\"h\":1,\"e\":1,\"l\":2,\"o\":1}", "countChars");

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
