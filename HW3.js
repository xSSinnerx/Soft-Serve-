// task 1 

let result = 1;
let arr = [2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
	result = result * arr[i];
}
alert(result);

// task 2

for (let x=0; x<=15; x++) {
    if (x === 0) {
            console.log(x +  " is even");
    }
    else if (x % 2 === 0) {
            console.log(x + " is even");   
    }
    else {
            console.log(x + " is odd");
    }
}

// task 3 

let arr = []
function randArray() {
   let a = Math.floor(Math.random() * 500) + 1;
   let b = Math.floor(Math.random() * 500) + 1;
   let c = Math.floor(Math.random() * 500) + 1;
   let d = Math.floor(Math.random() * 500) + 1;
   let e = Math.floor(Math.random() * 500) + 1;
   return  arr.push (a,b,c,d,e);
}
randArray();
console.log (arr);

// task 4 
function raiseToDegree (a,b){
  a = prompt ('Напиши номер A')
  b = prompt ('Напиши номер B')
result = Math.pow (a,b);
return result
}
raiseToDegree ()
console.log (result)

// task 5 

function findMin(){
        if(arguments[0] instanceof Array)
          arguments = arguments[0];
      
        return Math.min.apply( Math, arguments );
      }
      
      let min = findMin(10, 11,12,13,55,1,44,-1,-44,66,77);
      console.log("=>: "+ min);

// task 6 


function findUnique(arr){      
        for (let i = 0; i < arr.length; i++){
          for (let j = (i + 1); j < arr.length; j++) {
            if (arr[1] === arr [j]){
              return false;
            }
          }
        }
        return true;
      }

console.log (findUnique ([1, 2, 3, 5, 3,]));

// task 7 
function lastElem (arr, count) {
  if (count == null) {
    console.log (arr.pop())
  }
  else {
    console.log (arr.slice (-count));
  }
}
console.log (lastElem ([3,4,10,-5]));
console.log (lastElem ([3,4,10,-5],2));
console.log (lastElem ([3,4,10,-5],8));

// task 8 

function bigFirstLetter (str)
{
  let array1 = str.split (' ');
  let newarray1 = [];

  for (let i = 0; i < array1.length; i++){
newarray1.push(array1[i].charAt(0).toUpperCase()+array1[i].slice(1));
  }
  return newarray1.join ('');
  
}

console.log(bigFirstLetter('i love java script'));
