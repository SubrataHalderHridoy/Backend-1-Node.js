// let n = 5;
// for(let i = 0; i<n; i++){
//     console.log("hello, ", i);
// }
// console.log("alpha");


// let args = process.argv;
// for(let i = 2; i<args.length; i++){
//     console.log("hello to ", args[i]);
// }

// ** module.exports ** -----
// const someValue = require("./math");
// console.log(someValue.sum(2, 3));
// console.log(someValue.mul(3, 5));
// console.log(someValue.PI);



// const info = require("./Fruits");
// console.log(info[0]);




// const figlet = require("figlet");
// figlet("HRIDOYPUJA", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });



import {sum, PI} from "./math.js";
import { generate } from "random-words";
console.log(generate());