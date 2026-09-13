
// fun1()
// function fun1 (){
//     console.log("Kill")
// }

fun2()
var fun2 = function(){
    console.log("hello");
    
}
 fun3()
const fun3 =function(){
    console.log("Nameste Bharat")
}


let a = 5;
let b = 4;
console.log(a + b);


// merory cration and excuation  amd declaraton return (reserve)

// Rule for meory creation 
// in the form of key : value
// var a =9

// let and const = this is <value unavilable/> in time of initlization


function fun(){

}// in case of fun declaration entire function are store in memory

var fun2 = function()
{

}//exactly same as var variable


// let fun3 = function()
// {

// } // same as let and cosnt varible rule <value unavible>


// Execution :-type of its (1):- Globle Execuation context (2):- fucnton Execuation Context
// such as assigning value and calling function and evaluating expressions 


// callstack again / LIFO :- last in first out

function recurse (){
    recurse()
}
recurse()

