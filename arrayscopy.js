"use strict";
//Using =
let mas1 = [10, 20, 30, 40, 50];
let mas2 = mas1;
mas2[1]=1000;
console.log(mas1); //[ 10, 1000, 30, 40, 50 ]
console.log(mas2); //[ 10, 1000, 30, 40, 50 ]
//Using slice
let mas3= [10, 20, 30, 40, 50];
let mas4 = mas3.slice(mas3);
mas4[1]=1000;
console.log(mas3); //[ 10, 20, 30, 40, 50 ]
console.log(mas4); //[ 10, 1000, 30, 40, 50 ]

