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
result = Math.pow (3,4);
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

// task 6 task ще не доробив. 


function findUnique(arr) {
        const seenValues = {}
      
        for (let i = 0; i < arr.length; i++) {
          if (seenValues[arr[i]]) {
            return false;
          } else {
            seenValues[arr[i]] = true
          }
        }
      
        return true;
      }

let arr = (1,2,4,5,3);
findUnique = arr ;


