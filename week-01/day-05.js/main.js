/**
 * Policz sumę tablicy używając klasycznej pętli for.
 * @param {number[]} arr - Tablica liczb.
 * @returns {number} Suma liczb w tablicy.
 */
function sumWithFor(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

/**
 * Policz sumę tablicy używając pętli while.
 * @param {number[]} arr - Tablica liczb.
 * @returns {number} Suma liczb w tablicy.
 */
function sumWithWhile(arr) {
  let sum = 0;
  let i = 0;
  while (i < arr.length) {
    sum += arr[i];
    i++;
  }
  return sum;
}

/**
 * Odwróć tablicę, np. [1,2,3] -> [3,2,1], używając pętli for.
 * @param {*[]} arr - Tablica do odwrócenia.
 * @returns {*[]} Nowa, odwrócona tablica.
 */
function reverseArray(arr) {
  const reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}

/**
 * Znajdź największą liczbę w tablicy.
 * @param {number[]} arr - Tablica liczb.
 * @returns {number|undefined} Największa liczba lub undefined, jeśli tablica jest pusta.
 */
function findMax(arr) {
  if (arr.length === 0) {
    return undefined;
  }
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

/**
 * Zwróć tablicę kluczy obiektu, używając pętli for...in.
 * @param {object} obj - Obiekt.
 * @returns {string[]} Tablica kluczy.
 */
function objectKeys(obj) {
  const keys = [];
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      keys.push(key);
    }
  }
  return keys;
}

/**
 * Zwróć tablicę wartości obiektu, używając pętli for...in.
 * @param {object} obj - Obiekt.
 * @returns {*[]} Tablica wartości.
 */
function objectValues(obj) {
  const values = [];
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      values.push(obj[key]);
    }
  }
  return values;
}

// --- Zadania dodatkowe ---

/**
 * Zwróć obiekt z liczbą wystąpień każdej litery w stringu.
 * @param {string} str - String do zliczenia.
 * @returns {object} Obiekt z licznikiem znaków.
 */
function countChars(str) {
  const charCount = {};
  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  return charCount;
}

/**
 * Połącz dwa obiekty w nowy (klucze z obj2 nadpisują obj1).
 * @param {object} obj1 - Pierwszy obiekt.
 * @param {object} obj2 - Drugi obiekt.
 * @returns {object} Połączony obiekt.
 */
function mergeObjects(obj1, obj2) {
  const merged = {};

  // Kopiowanie z pierwszego obiektu
  for (const key in obj1) {
    if (Object.prototype.hasOwnProperty.call(obj1, key)) {
      merged[key] = obj1[key];
    }
  }

  // Kopiowanie z drugiego obiektu (nadpisuje wartości)
  for (const key in obj2) {
    if (Object.prototype.hasOwnProperty.call(obj2, key)) {
      merged[key] = obj2[key];
    }
  }

  return merged;
}

function assertEqual(actual, expected, msg) {
  if (Number.isNaN(expected) && Number.isNaN(actual)) {
    return;
  }
  if (actual !== expected) {
    throw new Error(`❌ ${msg} -> expected ${expected}, got ${actual}`);
  }
}

/**
 * Uruchamia testy dla zadań z Dnia 5.
 * @returns {string} Wynik testów.
 */
export function runTests() {
  const lines = [];
  const log = (s) => lines.push(s);

  try {
    // --- Dzień 5 testy ---
    // Testy dla zadań głównych
    assertEqual(sumWithFor([1, 2, 3]), 6, "sumWithFor");
    assertEqual(sumWithWhile([2, 2, 2]), 6, "sumWithWhile");
    assertEqual(JSON.stringify(reverseArray([1, 2, 3])), "[3,2,1]", "reverseArray");
    assertEqual(findMax([5, 1, 9, 3]), 9, "findMax");
    assertEqual(JSON.stringify(objectKeys({ a: 1, b: 2 })), "[\"a\",\"b\"]", "objectKeys");
    assertEqual(JSON.stringify(objectValues({ a: 1, b: 2 })), "[1,2]", "objectValues");

    // Testy dla zadań dodatkowych
    assertEqual(JSON.stringify(countChars("aba")), "{\"a\":2,\"b\":1}", "countChars");
    assertEqual(JSON.stringify(mergeObjects({ a: 1 }, { b: 2, a: 3 })), "{\"a\":3,\"b\":2}", "mergeObjects");

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
  console.log("Uruchomiono testy Dzień 5 ✅");
});
