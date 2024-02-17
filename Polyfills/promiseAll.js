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

const prom3 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("gfg2");
  }, 3000);
});

const prom4 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("gfg3");
  }, 3000);
});

Promise.myall = function (values) {
  const promise = new Promise(function (resolve, reject) {
    let result = [];
    let total = 0;
    values.forEach((item, index) => {
      Promise.resolve(item)
        .then((res) => {
          result[index] = res;
          total++;

          if (total === values.length) {
            resolve(result);
          }
        })
        .catch((err) => {
          reject(":::::::::::: error here");
        });
    });
    if (values.length === 0) {
      resolve(result);
    }
  });
  return promise;
};

Promise.myall([prom1, prom2, prom3])
  .then((res) => {
    console.log(res);
  })
  .catch((er) => {
    console.log(er);
  });

Promise.myall([prom1, prom3, prom4])
  .then((res) => {
    console.log(res);
  })
  .catch((er) => {
    console.log(er);
  });
