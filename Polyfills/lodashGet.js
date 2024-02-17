function get(object, path, defaultValue) {
    let pathArr = path;
    if(typeof path === "string") {
        pathArr = path.split(".").filter((a) => a.length);
    }
    if (!pathArr.length) {
        return !object ? defaultValue : object;
    }
    return get(object[pathArr.shift()], pathArr, defaultValue);
}



const obj = {
  a: 1,
  b: {
    c: {
      d: 2
    }
  }
}

console.log(get(obj, ["b", "c", "d"], 1));