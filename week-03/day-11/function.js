// greet(name, callback) – wywołuje callback z tekstem "Witaj, <imię>!"
export function greet(name, callback) {
  const message = `Witaj, ${name}!`;
  callback(message);
}

// mapArray(arr, fn) – własna implementacja .map()
export function mapArray(arr, fn) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i], i, arr));
  }
  return result;
}

// filterArray(arr, fn) – własna implementacja .filter()
export function filterArray(arr, fn) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }
  return result;
}

// findInArray(arr, fn) – własna implementacja .find()
export function findInArray(arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i, arr)) {
      return arr[i];
    }
  }
  return undefined;
}