import { greetAfterDelay, countdown, delayedMessage, riskyOperation, chainPromises } from "./function.js";

function assertEqual(actual, expected, msg) {
  if (JSON.stringify(actual) !== JSON.stringify(expected)) {
    throw new Error(`❌ ${msg} -> expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}`);
  }
}

export async function runTests() {
  const lines = [];
  const log = (s) => lines.push(s);

  try {
    // --- greetAfterDelay ---
    log("⏳ Test greetAfterDelay...");
    await new Promise((resolve) => {
      console.log = (msg) => {
        if (msg.includes("Witaj")) {
          log("✅ greetAfterDelay działa!");
          resolve();
        }
      };
      greetAfterDelay("Adam", 200);
    });

    // --- countdown ---
    log("⏳ Test countdown...");
    await new Promise((resolve) => {
      let outputs = [];
      console.log = (msg) => {
        outputs.push(msg);
        if (msg === "Start!") {
          assertEqual(outputs.includes(0), true, "countdown 0");
          log("✅ countdown działa!");
          resolve();
        }
      };
      countdown(2);
    });

    // --- delayedMessage ---
    log("⏳ Test delayedMessage...");
    const msg = await delayedMessage("Hej!", 200);
    assertEqual(msg, "Hej!", "delayedMessage");

    // --- riskyOperation ---
    log("⏳ Test riskyOperation (success)...");
    const ok = await riskyOperation(true);
    assertEqual(ok, "Sukces!", "riskyOperation success");

    log("⏳ Test riskyOperation (fail)...");
    let failed = false;
    try {
      await riskyOperation(false);
    } catch (e) {
      failed = true;
      assertEqual(e, "Błąd operacji", "riskyOperation error");
    }
    assertEqual(failed, true, "riskyOperation throws error");

    // --- chainPromises ---
    log("⏳ Test chainPromises...");
    console.log = (msg) => log(`(log) ${msg}`);
    const chainResult = await chainPromises();
    assertEqual(chainResult, "Gotowe!", "chainPromises");

    log("✅ Wszystkie testy przeszły pomyślnie!");
  } catch (e) {
    log(String(e.message || e));
  }

  return lines.join("\n");
}

document.getElementById("run").addEventListener("click", async () => {
  const out = document.getElementById("out");
  out.textContent = "⏳ Trwa uruchamianie testów...";
  const result = await runTests();
  out.textContent = result;
  console.clear();
  console.log("Uruchomiono testy: Tydzień 3 – Dzień 2 ✅");
});
