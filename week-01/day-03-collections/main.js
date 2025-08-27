// Tablice przechowują wiele wartości w kolejności:
const fruits = ["jabłko", "banan", "śliwka"];
console.log(fruits[0]); // "jabłko"

//Obiekty przechowują pary klucz–wartość:
const user = { name: "Adam", age: 26 };
console.log(user.name); // "Adam"

//1
const numbers = [1, 2, 3, 4, 5];

export function sumArray(arr) {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}
const Sum = sumArray(numbers);
console.log(Sum);

export function doubleArray(arr) {
    return arr.map((number) => number *2, 0);
}
const Double = doubleArray(numbers);
console.log(Double)

export function filterEven(arr) {
    return arr.filter((number) => number%2 === 0);
}
const evenNumbers = filterEven(numbers);
console.log(evenNumbers);

//2

const book = { title: "JS Basics", pages: 120, author: "Jan Kowalski" };

function describeBook(book) {
  return `Książka ${book.title} (${book.pages} stron) – autor ${book.author}`;
}
const description = describeBook(book);
console.log(description);

//3

const tasks = [{ title: "Zadanie 1", done: false }, { title: "Zadanie 2", done: true }];

function listDone(tasks) {
    return tasks.filter((task) => task.done === true);
}
const completedTasks = listDone(tasks);
console.log(completedTasks);

function addTask(tasks, title) {
  const newTask = {
    title: title,
    done: false
  };
  
  tasks.push(newTask);
}
addTask(tasks, "Zadanie 3");
console.log(tasks);

function assertEqual(actual, expected, msg) {
  if (Number.isNaN(expected) && Number.isNaN(actual)) return;
  if (actual !== expected) {
    throw new Error(`❌ ${msg} -> expected ${expected}, got ${actual}`);
  }
}

export function runTests() {
  const lines = [];
  const log = (s) => lines.push(s);

  try {
        assertEqual(sumArray([1, 2, 3]), 6, "sumArray");
        assertEqual(doubleArray([1, 2])[1], 4, "doubleArray");
        assertEqual(filterEven([1, 2, 3, 4]).length, 2, "filterEven length");
        assertEqual(describeBook({
            title: "A",
            pages: 10,
            author: "B"
        }), "Książka A (10 stron) – autor B", "describeBook");

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
  console.log("Uruchomiono testy Dzień 3 ✅");
});
