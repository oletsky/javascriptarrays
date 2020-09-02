"use strict";
let mas=["aaa","zzz","lll","bbb","fff"];
console.log("aaa" in mas); //false
console.log(0 in mas); //true
console.log(mas.includes("aaa")); //true
mas.sort(); //Be careful!
console.log(mas);
mas.reverse();
console.log(mas);
