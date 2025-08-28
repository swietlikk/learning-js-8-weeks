# Week 01
# Dzień 2 – JS podstawy
Cele: zmienne, typy, operatory, template strings, warunki. Mini-kalkulator + testy.

## Jak uruchomić
Otwórz `index.html` w przeglądarce (lub użyj rozszerzenia Live Server w VS Code).
Otwórz konsolę (F12 → Console). Kliknij „Uruchom testy”.

## Zrobione
- [x] add/sub/mul/div + obsługa błędu dzielenia przez zero
- [x] calculator z mapą operatorów
- [x] proste asercje i przycisk do uruchamiania testów

## Dzień 2 – Zadania dodatkowe

- **Template strings** – stworzyłem funkcję `greet(name, age)` wykorzystującą backticki do generowania tekstu.
- **Walidacja wejścia w kalkulatorze** – dodałem funkcję `toNumber`, która sprawdza poprawność liczb i rzuca wyjątek przy błędnych danych.
- **Calculator ze switch** – napisałem funkcję `calculatorSwitch(x, y, op)` działającą na instrukcji `switch`, obsługującą dodawanie, odejmowanie, mnożenie, dzielenie z kontrolą błędów.
- **Testy** – rozszerzyłem `runTests` o sprawdzanie błędnych danych i dzielenia przez zero.

# Dzień 3 - Tablice i obiekty
Cele: tablice, obiekty, lista obiektów, metody tablic + testy.

## Jak uruchomić
Otwórz `index.html` w przeglądarce (lub użyj rozszerzenia Live Server w VS Code).
Otwórz konsolę (F12 → Console). Kliknij „Uruchom testy”.


## 📅 Dzień 4 – Tablice, obiekty i funkcje wyższego rzędu

Dzisiaj ćwiczyłem pracę z tablicami (`map`, `filter`, `reduce`) oraz prostymi obiektami.  
Napisałem zestaw funkcji + testy automatyczne odpalane przyciskiem w przeglądarce.  

### ✅ Zadania główne
- `squareArray(arr)` – zwraca nową tablicę z kwadratami liczb.  
- `positiveNumbers(arr)` – filtruje tylko liczby dodatnie.  
- `sumArray(arr)` – suma wszystkich liczb z użyciem `.reduce`.  
- `toUpperAll(arr)` – zmienia wszystkie stringi w tablicy na wielkie litery.  
- `countLongWords(arr, minLen)` – liczy, ile słów ma długość **≥ minLen**.  
- `getAdults(users)` – wybiera osoby pełnoletnie z listy.  
- `getNames(users)` – zwraca tablicę imion.  
- `avgAge(users)` – oblicza średni wiek.  