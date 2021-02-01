// task 1

let x = 1;
let y = 2;

let res1 = x + '' + y
console.log(res1); // "12"
console.log(typeof res1); // "string"

let res2 = 'true' + y
console.log(res2); // "true2"
console.log(typeof res2); // "string"

let res3 = x < y
console.log(res3); // true
console.log(typeof res3); // "boolean"

let res4 = x + y + NaN
console.log(res4); // NaN
console.log(typeof res4); // "number"


let x = prompt("Enter your number", "");
let res5 = x % 2 == 0
console.log (res5); alert (res5)
let res6 = x % 2 == 1
console.log (res6); alert (res6)
let res7 = x % 7 == 0
console.log (res7); alert (res7)

// task 3 
let arr = [22, '55' , false , null];
console.log (arr)
let y = prompt ("Enter anything")
arr [4] = y
console.log (arr)
arr.shift()
console.log (arr)
alert (arr)

// task 4 
let cities = ["Rome", "Lviv", "Warsaw"];
let citiesnew = cities.join ('*'); 
alert( citiesnew ); 

// task 5

let isAdult = prompt ("Введіть скільки Вам років?", '')
if (isAdult < 18)
{alert ("Ви неповнолітні доступ заборонено")}
else (isAdult >18)
{alert ("Вітаємо!")}

// task 6 - в процесі не готово ще

let q = prompt ("введіть довжину AB")
let w = prompt ("введіть довжину BC")
let e = prompt ("введіть довжину AC")

// Task 7 - в процесі!


