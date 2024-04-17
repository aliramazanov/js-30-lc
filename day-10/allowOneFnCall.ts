type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type OnceFn = (...args: JSONValue[]) => JSONValue | undefined;

// Solution
function once(fn: Function): OnceFn {
  let called: Boolean = false;
  let result: JSONValue | undefined;

  return function (...args) {
    if (!called) {
      called = true;
      result = fn(...args);
      return result;
    }
    return undefined;
  };
}

// Tests
function testOnce() {
  const fn1 = (a: number, b: number, c: number) => a + b + c;
  const calls1 = [
    [1, 2, 3],
    [2, 3, 6],
  ];
  const expected1 = [6, undefined];
  const onceFn1 = once(fn1);

  const result1 = calls1.map((call) => onceFn1(...call));
  console.log(
    "Test case 1:",
    JSON.stringify(result1) === JSON.stringify(expected1) ? "Passed" : "Failed"
  );

  const fn2 = (a: number, b: number, c: number) => a * b * c;
  const calls2 = [
    [5, 7, 4],
    [2, 3, 6],
    [4, 6, 8],
  ];
  const expected2 = [140, undefined, undefined];
  const onceFn2 = once(fn2);

  const result2 = calls2.map((call) => onceFn2(...call));
  console.log(
    "Test case 2:",
    JSON.stringify(result2) === JSON.stringify(expected2) ? "Passed" : "Failed"
  );
}

testOnce();
