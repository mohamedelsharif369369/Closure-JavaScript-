function createCounter() {
  let count = 0;

  function increment() {
    count++;
    console.log("Current count:", count);
  }

  return increment;
}

const counter = createCounter();

counter(); // 1
counter(); // 2
counter(); // 3


