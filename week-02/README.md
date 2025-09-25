### 📅 Dzień 6 — Funkcje wyższego rzędu i callbacki
- `applyTwice(fn, x)` – wywołuje funkcję `fn` dwukrotnie na argumencie `x`
- `filterWithCallback(arr, fn)` – własna implementacja `filter`
- `mapWithCallback(arr, fn)` – własna implementacja `map`
- ✅ Wszystko pokryte testami


### 📅 Dzień 7 — Closures (domknięcia)
- ✨ `makeCounter()` – funkcja, która zwraca licznik pamiętający swój stan
- ✨ `multiplier(factor)` – funkcja fabrykująca mnożniki
- ✅ Wszystko pokryte testami

### 📅 Dzień 8 — Klasy i obiekty
- ✨ `class Person` — posiada pola `name`, `age` i metodę `introduce()`
- ✨ `class Book` — posiada pola `title`, `author` i metodę `describe()`
- ✅ Wszystko pokryte testami


### 📅 Dzień 9 — Moduły (import/export)
- ✨ `arrays.js` — funkcje do pracy z tablicami
- ✨ `objects.js` — funkcje do pracy z obiektami
- ✨ `main.js` — importuje i uruchamia testy
- ✅ Wszystko działa przez `type="module"`


### 📅 Dzień 10 – DOM (Document Object Model)

Dzisiaj nauczyłem się podstaw manipulacji **DOM**:
- wybieranie elementów (`getElementById`, `querySelector`),
- zmiana treści (`textContent`),
- zmiana stylów (`element.style`),
- dodawanie nowych elementów (`createElement`, `appendChild`),
- obsługa zdarzeń (`addEventListener`).

🔘 W projekcie zrobiłem:
- przycisk zmieniający nagłówek i kolor tekstu,
- przycisk dodający nowe elementy do listy.


## 📚 Dzień powtarzający (Tydzień 2)

Drugi tydzień zakończyłem powtórką wszystkich kluczowych zagadnień z **tablic, obiektów, pętli i DOM**.  
Przerobiłem ćwiczenia i dodałem testy, aby upewnić się, że wszystkie funkcje działają poprawnie.

### 🔹 Zadania z tablic
- `sumArray(arr)` – sumowanie elementów tablicy.
- `sumArrayReduce(arr)` – sumowanie elementów tablicy z użyciem `.reduce`.
- `squareArray(arr)` – podniesienie wszystkich elementów do kwadratu.
- `positiveNumbers(arr)` – filtrowanie tylko dodatnich liczb.
- `avgArray(arr)` – średnia z elementów tablicy.
- `reverseArray(arr)` – odwracanie kolejności elementów w tablicy.
- `findMax(arr)` – znajdowanie największej liczby w tablicy.

### 🔹 Zadania z obiektów
- `describeBook(book)` – opis książki w formacie  
  `"Książka Hobbit (300 stron) – autor J.R.R. Tolkien"`.
- `getAdults(users)` – zwraca tylko osoby pełnoletnie z tablicy użytkowników.
- `avgAge(users)` – zwraca średni wiek wszystkich użytkowników.

### 🔹 Zadania dodatkowe / mieszane
- `countChars(str)` – liczy liczbę wystąpień każdej litery w stringu.

### 🔹 DOM – proste operacje
- Dodanie przycisku i `div #output`, który po kliknięciu pokazuje komunikat *"Kliknięto!"*.
- Formularz z inputem i przyciskiem, który dodaje nowy element `<li>` do listy `<ul>`.
- Przycisk "Zmień kolor", który zmienia kolor tła strony.