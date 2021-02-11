// task 1

let length = prompt("Enter a whole number for the length of your rectangle.");
        let width = prompt("Enter a whole number for the width of your rectangle.");
        function calcRectangleArea(length, width) {
            return length * width;
        }   
        alert ('The area of your rectangle is ' + calcRectangleArea(length, width));         
    
// task 2

let name = prompt ('What is your name')
let age = prompt ('How old are you?')
function checkAge(name, age) {
  try{
    if(age == "")
    throw new Error ("The field is empty! Please enter your age")
    else if (isNaN(parseInt(age))) 
    throw new Error ("Please enter the number")
    else if (age < 14) 
    throw new Error ("Go home")
    alert ("Welcome" + name )}
    catch (e) {
      alert (e.name+""+e.message)
      }
    }
      
    let output = checkAge(name, age);
  alert(output);

// task 3  я тут по суті розбирав Ваш приклад - але для мене це стало ясніше, не можу сказати що я розвязав це самостійно.
class MonthException {
  constructor(message){
    this.message = message;
    this.name = 'MonthException';
  }
}
function showMonthName(month){
  month = month - 1;
  let months = ['Січень','Лютий','Березень','Квітень','Травень','Червень','Липень','Серпень','Вересень','Жовтень','Листопад','Грудень'];
if (months[month]!== undefined){
  return months [month];
} else {
  throw new MonthException ('Невірне число місяця');
}
}
try {
  let myMonth = 14;
  let monthName = showMonthName(myMonth);
  console.log (monthName);
} catch (e) {
  monthName = 'невідомо';
  console.error(e.name, e.message);
}

// task 4 
function showUser (id){
  if (id<0){
    throw new Error ('ID must not be negative:'+id);
  }
  return {id: id};
}
function showUsers(ids){
  let result = [];
  ids.forEach(function (id) {
    try {
      let persone = showUser(id);
      result.push(person);
    } catch (exceprtion) {
      console.log (exceprtion.message);
    }
    
  });
  return result;
}
showUsers ([7,-12,44,22]);




// task 1 
let mentor = { 
  course: "JS fundamental", 
  duration: 3,
  direction: "web-development" 
};
Object.keys(mentor).length


// task 2 
let Mark = {
   age : 32,
gender : 'male',
salary : 35000,
terittory : 'West',
annualplan : 25000000,}
console.log (Mark);
function showProps(obj){
Object.values(Mark);
}
console.log (showProps);

