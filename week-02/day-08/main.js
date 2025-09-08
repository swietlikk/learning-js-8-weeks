/**
 * Klasa reprezentująca osobę.
 */
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    return `Cześć, mam na imię ${this.name} i mam ${this.age} lat.`;
  }
}

/**
 * Klasa reprezentująca książkę.
 */
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  describe() {
    return `Książka "${this.title}" — autor: ${this.author}`;
  }
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
    // Person
    const adam = new Person("Adam", 26);
    assertEqual(adam.name, "Adam", "Person.name");
    assertEqual(adam.age, 26, "Person.age");
    assertEqual(adam.introduce(), "Cześć, mam na imię Adam i mam 26 lat.", "Person.introduce");

    // Book
    const book = new Book("Wiedźmin", "Andrzej Sapkowski");
    assertEqual(book.title, "Wiedźmin", "Book.title");
    assertEqual(book.author, "Andrzej Sapkowski", "Book.author");
    assertEqual(book.describe(), 'Książka "Wiedźmin" — autor: Andrzej Sapkowski', "Book.describe");

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
  console.log("Uruchomiono testy Dzień 8 ✅");
});
