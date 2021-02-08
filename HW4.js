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
alert('НЕ ВІРНІ ДАНІ '+ isNaN (age))
function checkAge(name, age) {
    if(age < 14) {
      return ("Go home, " + name + "!");
    }
    else {
      return ("Welcome, " + name + "!");
     
      }
    }
      
    let output = checkAge(name, age);
  alert(output);


