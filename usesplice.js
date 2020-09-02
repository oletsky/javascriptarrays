"use strict";
let mas = [10, 20, 30, 40, 50];

//Deleting
mas.splice(2, 1);
console.log(mas);
//[ 10, 20, 40, 50 ]
//Inserting
mas.splice(2, 0, 30);
console.log(mas);
//[ 10, 20, 30, 40, 50 ]
