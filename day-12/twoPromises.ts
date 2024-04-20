// 2723. Add Two Promises

type P = Promise<number>;

// Solution
async function addTwoPromises(promise1: P, promise2: P): P {
  const [value1, value2] = await Promise.all([promise1, promise2]);
  return value1 + value2;
}

// Test
async function testAddTwoPromises() {
  const testCase1: [P, P] = [
    new Promise((resolve) => setTimeout(() => resolve(2), 20)),
    new Promise((resolve) => setTimeout(() => resolve(5), 60)),
  ];

  try {
    const result1 = await addTwoPromises(...testCase1);
    console.log(
      "Test Case:",
      result1 === 7 ? "Passed" : "Failed",
      "- Expected: 7, Resulted:",
      result1
    );
  } catch (error) {
    console.error("Error:", error);
  }
}

testAddTwoPromises();
