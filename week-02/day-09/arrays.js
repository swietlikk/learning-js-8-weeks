export function sumArray(arr) {
  return arr.reduce((a, b) => a + b, 0);
}

export function squareArray(arr) {
  return arr.map(x => x * x);
}
