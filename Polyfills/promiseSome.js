if (!Promise.some) {
  Promise.some = function(promises, count) {
    return new Promise((resolve, reject) => {
      if (!Array.isArray(promises)) {
        reject(new TypeError('The "promises" argument must be an array.'));
        return;
      }

      if (promises.length === 0) {
        reject(new Error('The "promises" array must not be empty.'));
        return;
      }

      const results = [];
      let fulfilledCount = 0;

      const onFulfilled = value => {
        results.push(value);
        fulfilledCount++;
        if (fulfilledCount >= count) {
          resolve(results);
        }
      };

      const onRejected = error => {
        if (results.length === count) {
          resolve(results);
        } else {
          reject(error);
        }
      };

      for (const promise of promises) {
        Promise.resolve(promise)
          .then(onFulfilled)
          .catch(onRejected);
      }
    });
  };
}

// Test the polyfill
const promise1 = Promise.resolve(1);
const promise2 = new Promise((resolve, reject) => setTimeout(resolve, 100, 2));
const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 200, 3));
const promise4 = new Promise((resolve, reject) => setTimeout(resolve, 300, 4));

Promise.some([promise1, promise2, promise3, promise4], 2)
  .then(values => {
    console.log(values); // Output: [1, 2] (Promise 1 and 2 fulfilled)
  })
  .catch(error => {
    console.log(error); // This won't be called
  });
