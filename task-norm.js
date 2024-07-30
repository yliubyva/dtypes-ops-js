'use strict';

//norm-1 
let userMoney;
let costChocolate;
let quantityChocolate;
let rest;

userMoney = prompt(`Скільки грошей у Вашому гаманці?`);
costChocolate = prompt(`Яка ціна шоколадки?`);

quantityChocolate = userMoney / costChocolate;
let quantity = Math.trunc(quantityChocolate);

alert(`${quantity} шт шоколадок ти можеш купити`);

rest = userMoney - quantity * costChocolate;

alert(`Твоя решта ${rest}`);

//norm-2
let str;
let result = '';

str = prompt(`Введи тризначне число`);
for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
}

alert(`${result}`);