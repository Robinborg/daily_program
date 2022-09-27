

let object = {a: 123, b: 456};
let clone = {...object};

let moreClone = Object.assign({}, clone);

console.log(object);
console.log(clone);
console.log(moreClone);

