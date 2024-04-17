// Solution
var createCounter = function (n) {
  let number = n;
  return function () {
    return number++;
  };
};

// Tests
function testCreateCounter() {
  const counterFunction = createCounter(0);

  let results = [];
  for (let i = 0; i < 5; i++) {
    results.push(counterFunction());
  }

  const expectedResults = [0, 1, 2, 3, 4];
  if (JSON.stringify(results) === JSON.stringify(expectedResults)) {
    console.log("Test passed: createCounter increments correctly");
  } else {
    console.error("Test failed: createCounter does not increment correctly");
  }
}

testCreateCounter();
