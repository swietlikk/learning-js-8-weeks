/**
 * Wywołaj funkcję fn dwa razy na argumencie x.
 * @param {(n: any) => any} fn - Funkcja do wywołania.
 * @param {any} x - Wartość wejściowa.
 * @returns {any} Wynik po dwukrotnym zastosowaniu fn.
 */
function applyTwice(fn, x) {
  return fn(fn(x));
}

/**
 * Własna implementacja filter z callbackiem.
 * @param {any[]} arr - Tablica wejściowa.
 * @param {(el: any) => boolean} fn - Funkcja testująca element.
 * @returns {any[]} Nowa tablica z elementami spełniającymi warunek.
 */
function filterWithCallback(arr, fn) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

/**
 * Własna implementacja map z callbackiem.
 * @param {any[]} arr - Tablica wejściowa.
 * @param {(el: any) => any} fn - Funkcja przekształcająca element.
 * @returns {any[]} Nowa tablica po przekształceniu.
 */
function mapWithCallback(arr, fn) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i]));
  }
  return result;
}

// --- Testy ---

function assertEqual(actual, expected, msg) {
  if (JSON.stringify(actual) !== JSON.stringify(expected)) {
    throw new Error(`❌ ${msg} -> expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}`);
  }
}

export function runTests() {
  const lines = [];
  const log = (s) => lines.push(s);

  try {
    // applyTwice
    assertEqual(applyTwice(x => x + 1, 5), 7, "applyTwice (increment)");
    assertEqual(applyTwice(x => x * 2, 3), 12, "applyTwice (double)");

    // filterWithCallback
    assertEqual(filterWithCallback([1, 2, 3, 4], x => x % 2 === 0), [2, 4], "filterWithCallback even");

    // mapWithCallback
    assertEqual(mapWithCallback([1, 2, 3], x => x * x), [1, 4, 9], "mapWithCallback square");

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
  console.log("Uruchomiono testy Dzień 6 ✅");
});