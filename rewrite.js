
let arr = [1, 2, 3, 4, 5];


Array.prototype.ourMap = function (cb) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    newArr.push(cb(this[i], i, this));
  }
  return newArr;;
}


// const newArr= arr.ourMap((e) => e * 2)
// console.log(newArr);

Array.prototype.ourFilter = function (cb) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this))
      newArr.push(this[i]);
  }
  return newArr;;
}

// const newArr = arr.ourFilter((e) =>e>3)
// console.log(newArr);


Array.prototype.ourReduce = function (cb, initValue) {
  let pre, cur, newIndex = 0;
  if (initValue === undefined) {
    pre = this[0];
    newIndex = 1;
  }
  else {
    pre = initValue;
  }

  for (let i = newIndex; i < this.length; i++) {
    cur = this[i];
    pre = cb(pre, cur);
    
  }

  return pre;
}

// let sum = arr.ourReduce((pre, cur) => pre + cur
// )
// console.log(sum);

