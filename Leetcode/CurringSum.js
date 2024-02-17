function sum(a) {
  return function sum1(b) {
    return function sum2(c) {
      return a+b+c;
    }
  }
}
//Case:1
sum(1)(2)(3)

//------------------

function sum(a) {
  return function sum1(b) {
    if(b) {
      return sum(a+b);
    }
    return a;
  }
}
//Case:2
sum(1)(2)(3)()

//------------------

function sum(a,b) {
  return function sum1(c,d) {
    return a+b+c+d;
  }
}
//Case:3
sum(1,2)(2,3)

//------------------

function sum(...args) {
  let sumOfsumfunc = args.reduce((a,b)=>{
    return a+b;
  },0);
  return function sum1(...args1) {
    let sumOfsum1func = args1.reduce((a,b)=>{
      return a+b;
    },0);

    if(sumOfsum1func) {
      return sum(sumOfsumfunc + sumOfsum1func);
    }
    return sumOfsumfunc;
  }
}
//Case:3
sum(1,2,3,4,5,6,7,8,9,10)(2,3)(1)()


//------------------------
const add = (a, b, c) => {
	return a + b + c
}
const mul = (a, b, c, d) => a * b * c * d
const perpetualCurry = (fn) => {
  
  return function(...args) {
    console.log(args,fn, fn.length);
		if (args.length === fn.length) {
      return fn(...args)
    } else {
      
      return perpetualCurry(fn.bind(fn, ...args))
    }
  }
}

//Case: 4
// const multply = perpetualCurry(mul)
const addition = perpetualCurry(add)
console.log(addition(1)(2)(3))
// console.log(multply(1)(2)(3)(4))