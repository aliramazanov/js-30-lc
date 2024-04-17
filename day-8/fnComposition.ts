type F = (x: number) => number;

// Solution
function compose(functions: F[]): F {
  return function (x) {
    for (let i = functions.length - 1; i >= 0; i--) {
      x = functions[i](x);
    }
    return x;
  };
}

// Function to test the compose function
function testFnCompose() {
  const functions1 = [
    (x: number) => x + 1,
    (x: number) => x * x,
    (x: number) => 2 * x,
  ];
  const input1 = 4;
  const expected1 = 65;
  const result1 = compose(functions1)(input1);
  console.log("Test case 1:", result1 === expected1 ? "Passed" : "Failed");

  const functions2 = [
    (x: number) => 10 * x,
    (x: number) => 10 * x,
    (x: number) => 10 * x,
  ];
  const input2 = 1;
  const expected2 = 1000;
  const result2 = compose(functions2)(input2);
  console.log("Test case 2:", result2 === expected2 ? "Passed" : "Failed");

  const functions3: F[] = [];
  const input3 = 42;
  const expected3 = 42;
  const result3 = compose(functions3)(input3);
  console.log("Test case 3:", result3 === expected3 ? "Passed" : "Failed");
}

testFnCompose();
