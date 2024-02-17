Promise.myRace = function (promises) {
  return new Promise(function (resolve, reject) {
    if (!Array.isArray(promises)) {
      throw new TypeError("Promises must be an array");
    }

    promises.forEach(function (promise) {
      Promise.resolve(promise).then(
        function (value) {
          resolve(value);
        },
        function (reason) {
          reject(reason);
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

Promise.myRace([prom1, prom2])
  .then((res) => {
    console.log(res);
  })
  .catch((er) => {
    console.log(er);
  });
