// task 1 
function upperCase(str){
    regexp = /^[A-Z]/;
    if (regexp.test(str))
    {
        console.log("String's starts with uppercase character");
    }
    else
    {
        console.log("String's not starts with uppercase character");
    }
}
upperCase('regexp');
upperCase('RegExp');
//task 2 
function checkEmail(data) {
    let regExp = /\S+@\S+\.\S+/;
    console.log(regExp.test(data));
}
checkEmail("ffggdbd221@gmail.com");
//task 3 

let myRe = /d(b+)(d)/i;
let myArray = myRe.exec("cbdBdbsbz")
console.log(myArray);

//task 4

let re = /(\w+)\s(\w+)/;
let str = "Java Script";
let newstr = str.replace(re,"$2,$1");
console.log(newstr);

//task 5

function checkBankCard(str) {
    let regExp = /^\d{4}-\d{4}-\d{4}-\d{4}\b/;
    let result = regExp.test(str);
    if(result){
        console.log("Validation successful");
    } else {
        console.log("Please, try again. Incorrect data inpute!");
    }
}
checkBankCard('1111-2222-3333-4444')
checkBankCard('11113-2222-3333-4444')
checkBankCard('1111f-2222-3333-4444')

// task 6
function checkEmail(str){
    let mailPattern = /^[a-zA-Z0-9]+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
    if (mailPattern.test(str)){
        console.log("Email is correct!");
    }
 else {
     console.log("Email is not correct!");
}}
checkEmail('Nes.Khom@gmail.c0m');

checkEmail('NestorKhomytskiy@gmail.com');

//task 7

function checkLogin(data){
    let re = /^[a-zA-Z]{1}[a-zA-Z0-9\.]{1,9}$/;
    let reqNumber = /[0-9\.]+/g;
    let resultNumber = data.match(reqNumber);
    let result = re.test(data);
    console.log(`${data} is ${result} - ${resultNumber}`);
}
checkLogin('sfk33133')
checkLogin('2223jj3')
checkLogin('gggggkkkkfdkd883883//3vcccz-2.')
checkLogin('jfjfddaa@e')