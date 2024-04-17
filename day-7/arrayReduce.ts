type Fn = (accum: number, curr: number) => number;

// Solution
function reduce(nums: number[], fn: Fn, init: number): number {
  let res: number = init;

  for (let i = 0; i < nums.length; i++) {
    res = fn(res, nums[i]);
  }

  return res;
}

// Tests
function testArrReduce() {
  const nums1 = [1, 2, 3, 4];
  const sum = (accum: number, curr: number) => accum + curr;
  const init1 = 0;
  const expected1 = 10;
  const result1 = reduce(nums1, sum, init1);
  console.log("Test case 1:", result1 === expected1 ? "Passed" : "Failed");

  const nums2 = [1, 2, 3, 4];
  const sumSquares = (accum: number, curr: number) => accum + curr * curr;
  const init2 = 100;
  const expected2 = 130;
  const result2 = reduce(nums2, sumSquares, init2);
  console.log("Test case 2:", result2 === expected2 ? "Passed" : "Failed");

  const nums3: number[] = [];
  const zeroReducer = (accum: number, curr: number) => 0;
  const init3 = 25;
  const expected3 = 25;
  const result3 = reduce(nums3, zeroReducer, init3);
  console.log("Test case 3:", result3 === expected3 ? "Passed" : "Failed");
}

testArrReduce();
