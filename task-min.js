'use strict';

//min-1
let sum = 0.1 + 0.2;
console.log(`${sum.toFixed(1)}`);

//min-2
let a = "1";
let b = 2;
let sum2 = +a + b;
console.log(`${sum2}`);

//min-3
const convertGbToMb = 1000;
const sizeFile = 820;

let userGb = prompt(`Скільки GB на вашій флешці?`);
let quantityFiles = userGb * convertGbToMb / sizeFile;
let quantity = Math.trunc(quantityFiles)
alert(`${quantity} файла(ів) розміром у 820МВ вміститься на вашій флешці`);