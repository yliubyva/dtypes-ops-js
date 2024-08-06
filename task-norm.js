'use strict';

//norm-1 
let userMoney = prompt(`Скільки грошей у Вашому гаманці?`);
let costChocolate = prompt(`Яка ціна шоколадки?`);

let quantityChocolate = userMoney / costChocolate;
let quantity = Math.trunc(quantityChocolate);

alert(`${quantity} шт шоколадок ти можеш купити`);

let rest = userMoney - quantity * costChocolate;

alert(`Твоя решта ${rest}`);

//norm-2
let str;
let result = '';

str = prompt(`Введи тризначне число`);
for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
}

alert(`${result}`);