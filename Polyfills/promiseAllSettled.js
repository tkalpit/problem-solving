Promise.myAllSettled = function (promises) {
  return new Promise(function (resolve) {
    if (!Array.isArray(promises)) {
      throw new TypeError("Promises must be an array");
    }

    var results = [];
    var settledPromises = 0;

    function handleSettled(index, result) {
      results[index] = result;
      settledPromises++;

      if (settledPromises === promises.length) {
        resolve(results);
      }
    }

    promises.forEach(function (promise, index) {
      Promise.resolve(promise).then(
        function (value) {
          handleSettled(index, { status: "fulfilled", value: value });
        },
        function (reason) {
          handleSettled(index, { status: "rejected", reason: reason });
        }
      );
    });

    if (promises.length === 0) {
      resolve(results);
    }
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

Promise.myAllSettled([prom1, prom2])
  .then((res) => {
    console.log(res);
  })
  .catch((er) => {
    console.log(er);
  });
