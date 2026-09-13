// lexical enviroment 



// function outter(){
//     const a = 4;
//     function inner(){
//         console.log(a);
//     }
//     a = 10
//     return inner
// }
// const response= outter;
// response()

function outter (){
    let count = 0;
    function counter(){
        count =count+1;
    }return counter
}


// const counter1=outter();
// const counter2=outter();
counter()
counter1()
counter2()

