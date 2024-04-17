// Solution
function map(arr: number[], fn: (n: number, i: number) => number): number[] {
  const transformed: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    transformed.push(fn(arr[i], i));
  }

  return transformed;
}

// Tests
function testMap() {
  const arr1 = [1, 2, 3];
  const plusOne = (n: number) => n + 1;
  const expected1 = [2, 3, 4];
  const result1 = map(arr1, plusOne);
  console.log(
    "Test case 1:",
    JSON.stringify(result1) === JSON.stringify(expected1) ? "Passed" : "Failed"
  );

  const arr2 = [1, 2, 3];
  const plusI = (n: number, i: number) => n + i;
  const expected2 = [1, 3, 5];
  const result2 = map(arr2, plusI);
  console.log(
    "Test case 2:",
    JSON.stringify(result2) === JSON.stringify(expected2) ? "Passed" : "Failed"
  );

  const arr3 = [10, 20, 30];
  const constant = () => 42;
  const expected3 = [42, 42, 42];
  const result3 = map(arr3, constant);
  console.log(
    "Test case 3:",
    JSON.stringify(result3) === JSON.stringify(expected3) ? "Passed" : "Failed"
  );
}

testMap();
