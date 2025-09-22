export function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

export function sumArrayReduce(arr) {
    return arr.reduce((a, b) => a + b, 0);
}

export function squareArray(arr) {
    return arr.map((x) => x * x, 0 );
}

export function positiveNumbers(arr) {
    return arr.filter((x) => x > 0);
}

export function avgArray(arr) {
    return arr.reduce((a, b) => a + b, 0) / arr.length;
}

