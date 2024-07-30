'use strict';

//max-1
let sumDeposit;
let period = 2;
let percentYear = 5;

sumDeposit = prompt(`Яка сума вкладу в банк?`);
let chargeAmount = sumDeposit * ((percentYear / 100) * (period / 12));
alert(`Ваша сума нарахованих відсотків ${chargeAmount.toFixed(2)}`);

//max-2
2 && 0 && 3   //0
2 || 0 || 3   //2
2 && 0 || 3   //3