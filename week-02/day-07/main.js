/**
 * makeCounter – zwraca funkcję, która pamięta stan licznika.
 * Każde wywołanie zwiększa licznik o 1 i zwraca jego wartość.
 */
function makeCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

/**
 * multiplier – zwraca funkcję, która mnoży liczby przez factor.
 * @param {number} factor - współczynnik mnożenia
 * @returns {(n: number) => number}
 */
function multiplier(factor) {
  return function (n) {
    return n * factor;
  };
}

// --- Testy ---

function assertEqual(actual, expected, msg) {
  if (actual !== expected) {
    throw new Error(`❌ ${msg} -> expected ${expected}, got ${actual}`);
  }
}

export function runTests() {
  const lines = [];
  const log = (s) => lines.push(s);

  try {
    // makeCounter
    const counter = makeCounter();
    assertEqual(counter(), 1, "makeCounter 1");
    assertEqual(counter(), 2, "makeCounter 2");
    assertEqual(counter(), 3, "makeCounter 3");

    // multiplier
    const double = multiplier(2);
    const triple = multiplier(3);
    assertEqual(double(5), 10, "multiplier double");
    assertEqual(triple(5), 15, "multiplier triple");

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
  console.log("Uruchomiono testy Dzień 7 ✅");
});
