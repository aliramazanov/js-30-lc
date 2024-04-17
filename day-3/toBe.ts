type ToBeOrNotToBe = {
  toBe: (val: any) => boolean;
  notToBe: (val: any) => boolean;
};

// Solution
function expect(val: any): ToBeOrNotToBe {
  const obj: ToBeOrNotToBe = {
    toBe: (value) => {
      if (val === value) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },

    notToBe: (value) => {
      if (val !== value) {
        return true;
      } else {
        throw new Error("Equal");
      }
    },
  };
  return obj;
}

// Tests
function testExpect(
  val: any,
  expectedResult: boolean
): { value?: boolean; error?: string } {
  try {
    const result = expect(val).toBe(val);
    if (result === expectedResult) {
      return { value: true };
    } else {
      return { error: "Not Equal" };
    }
  } catch (error) {
    return { error: (error as Error).message };
  }
}

console.log("Test 1:", testExpect(5, true));

console.log("Test 2:", testExpect(5, false));

console.log("Test 3:", testExpect(5, true));
