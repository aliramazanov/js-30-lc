// 2621. Sleep: Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.

async function sleep(millis: number = 0): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, millis);
    console.log("...");
  });
}

sleep(999);
