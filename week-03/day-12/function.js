export function greetAfterDelay(name, delay) {
  setTimeout(() => {
    console.log(`Witaj, ${name}!`);
  }, delay);
}

export function countdown(start) {
  let current = start;
  const interval = setInterval(() => {
    console.log(current);
    if (current === 0) {
      console.log("Start!");
      clearInterval(interval);
    }
    current--;
  }, 1000);
}

export function delayedMessage(msg, delay) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(msg), delay);
  });
}

export function riskyOperation(flag) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (flag) resolve("Sukces!");
      else reject("Błąd operacji");
    }, 1000);
  });
}

export async function chainPromises() {
  const first = await delayedMessage("Pierwszy krok...", 1000);
  console.log(first);
  const second = await delayedMessage("Drugi krok!", 1000);
  console.log(second);
  return "Gotowe!";
}