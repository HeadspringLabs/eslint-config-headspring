import fs from 'fs';

let index = 0;
console.log(index++);

// Dangling commas are required on multiline literals
const object = {
  a: 1,
  b: 2,
  c: 3,
};
const array = [
  1,
  2,
  3,
];
console.log(object, array);
