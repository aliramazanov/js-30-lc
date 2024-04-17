type Counter = {
  increment: () => number;
  decrement: () => number;
  reset: () => number;
};

// Solution
function createCounter(init: number): Counter {
  let currentCount = init;

  const obj: Counter = {
    increment: () => {
      return ++currentCount;
    },

    decrement: () => {
      return --currentCount;
    },

    reset: () => {
      currentCount = init;
      return currentCount;
    },
  };

  return obj;
}

// Tests
function testCreateCounter(init: number, calls: string[]): number[] {
  const counter = createCounter(init);
  const results: number[] = [];

  for (const call of calls) {
    switch (call) {
      case "increment":
        results.push(counter.increment());
        break;
      case "decrement":
        results.push(counter.decrement());
        break;
      case "reset":
        results.push(counter.reset());
        break;
      default:
        throw new Error("Invalid call: " + call);
    }
  }

  return results;
}

console.log(
  "Test case 1:",
  testCreateCounter(5, ["increment", "reset", "decrement"])
);

console.log(
  "Test case 2:",
  testCreateCounter(0, [
    "increment",
    "increment",
    "decrement",
    "reset",
    "reset",
  ])
);
