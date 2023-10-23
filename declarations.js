const escapeStr = ", \\, /, \" and ', `";
const arr = [4, '2'];
const obj = {
  str: 'hello',
  num: 42,
  bool: true,
  undef: undefined,
};
const nested = Object.freeze({
  arr: Object.freeze([4, undefined, '2']),
  obj: Object.freeze({
    str: 'world',
    num: 3.14,
    bool: false,
  }),
});

Object.freeze(arr);
Object.freeze(obj);

console.log(escapeStr);
console.log(arr);
console.log(obj);
console.log(nested);