Promise.myAny = function (promises) {
  return new Promise(function (resolve, reject) {
    if (!Array.isArray(promises)) {
      throw new TypeError("Promises must be an array");
    }

    if (promises.length === 0) {
      reject(new AggregateError("No promises passed to Promise.any", []));
      return;
    }

    var errors = [];

    promises.forEach(function (promise, index) {
      Promise.resolve(promise).then(
        function (value) {
          resolve(value);
        },
        function (reason) {
          errors.push({ index: index, reason: reason });

          if (errors.length === promises.length) {
            reject(new AggregateError("All promises were rejected", errors));
          }
        }
      );
    });
  });
};

const prom1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("gfg1");
  }, 1000);
});

const prom2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    reject("error");
  }, 2000);
});

Promise.myAny([prom1, prom2])
  .then((res) => {
    console.log(res);
  })
  .catch((er) => {
    console.log(er);
  });
