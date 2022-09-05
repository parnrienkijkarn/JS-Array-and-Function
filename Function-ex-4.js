// Exercise #4 Grouping Function with Objects

// Start coding here

// ก้อนนี้ไม่เกี่ยวลองงมดูเฉยๆ 
// let add = (a, b) => a + b;
// let subtract = (a, b) => a - b;
// let multiply = (a, b) => a * b;
// let divide = (a, b) => a / b;

// อันนี้แบบเวอร์ชั่นยาวไป
// let calculator = {
//   add: function add(a, b) {
//     return a + b;
//   },
//   subtract: function subtract(a, b) {
//     return a - b;
//   },
//   multiply: function multiply(a, b) {
//     return a * b;
//   },
//   divide: function divide(a, b) {
//     return a / b;
//   }
// };

// อันนี้เวอร์ชั่นสั้น
let calculator = {
    add: add = (a, b) => a + b,
    subtract: subtract = (a, b) => a - b,
    multiply: multiply = (a, b) => a * b,
    divide: divide = (a, b) => a / b
  };

let resultAdd = add(10, 20);
console.log(resultAdd);

let resultDivide = divide(3000, 10);
console.log(resultDivide);

