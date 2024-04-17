type Fn = (n: number, i: number) => any;

// Solution
function filter(arr: number[], fn: Fn): number[] {
  let filteredArr: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      filteredArr.push(arr[i]);
    }
  }

  return filteredArr;
}

// Tests
function testFilter() {
  const arr1 = [0, 10, 20, 30];
  const greaterThan10 = (n: number) => n > 10;
  const expected1 = [20, 30];
  const result1 = filter(arr1, greaterThan10);
  console.log(
    "Test case 1:",
    JSON.stringify(result1) === JSON.stringify(expected1) ? "Passed" : "Failed"
  );

  const arr2 = [1, 2, 3];
  const firstIndex = (n: number, i: number) => i === 0;
  const expected2 = [1];
  const result2 = filter(arr2, firstIndex);
  console.log(
    "Test case 2:",
    JSON.stringify(result2) === JSON.stringify(expected2) ? "Passed" : "Failed"
  );

  const arr3 = [-2, -1, 0, 1, 2];
  const plusOne = (n: number) => n + 1;
  const expected3 = [-2, 0, 1, 2];
  const result3 = filter(arr3, plusOne);
  console.log(
    "Test case 3:",
    JSON.stringify(result3) === JSON.stringify(expected3) ? "Passed" : "Failed"
  );
}

testFilter();
