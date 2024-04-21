const fs = require("fs/promises");

// read number from file
async function readNumber(path) {
  const data = await fs.readFile(path, "utf8");
  if (isNaN(data)) {
    throw new Error("not a number");
  }

  return Number(data);
}

// calculation
async function calculate() {
  try {
    const a = await readNumber("./input/a.txt");
    const b = await readNumber("./input/b.txt");

    return a + b;
  } catch (error) {
    console.log("Error: ", error.message);
  }
}

// start calculation, show result
(async () => {
  const result = await calculate();

  console.log(`The result is: ${result}`);
})();
