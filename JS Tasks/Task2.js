function randomPromise(taskName) {
    return new Promise((resolve, reject) => {
      const success = Math.random() > 0.5; // Randomly decide success or failure
      setTimeout(() => {
        if (success) {
          resolve(`${taskName} Success`);
        } else {
          reject(new Error(`${taskName} error`));
        }
      }, 1000);
    });
  }
  
  // Create a promise chain
  randomPromise('Task 1')
    .then((result) => {
      console.log(result);
      return randomPromise('Task 2');
    })
    .then((result) => {
      console.log(result);
      return randomPromise('Task 3');
    })
    .then((result) => {
      console.log(result);
      return randomPromise('Task 4');
    })
    .catch((error) => {
      console.error(`Error caught: ${error.message}`);
    });
  