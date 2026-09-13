// let student = {
//     name :"suraj",
//     rollno :54,
//     subjects : ["math" , "english" , "hindi"]
// }

// // How to remane keys 
// let {subjects  : pen,totalMarks = 438 ,...varible} = student
// // console.log(subjects);
// // console.log(totalMarks)

// // merge the objects
// let obj1 ={
//   name: "vandana",
//     phone: 840384030
// }

// let obj2 ={
//     address: "India",
//     addharCard : 93939028402,
//       name: "suraj",
// }

// let obj3 ={...obj1, ...obj2}
// // 
//  // array and object update
//  const arr = [3,3,232,2,5]
//  arr [232] = "updated"
// //  console.log(arr);

//  let obj = {
//   name : "suraj",
//   rollno : 43,
//   address: null
//  }

//  obj.name = "Vandana Bharti"
//  delete obj.rollno // properties delete --> this is for object 
// //  console.log(obj);
// //  console.log(obj.address);
// //  console.log(obj.address?.street);// optional changing 



//  let num = [34,34,2,5,5,6,]
// //  num.splice(2,3) // delete for number
// //  num.splice(3,1['replace'] ) //replace
// //  num.splice(3,0 ['add']) // add
// //  console.log(num);


// // let trimArr =num.slice(2,5)
// // console.log(trimArr);

// // let res = arr1.find (value) => {
// //  if (value ===3){
// //   return value
// //  }
// // }

// // console.log(res);

// // flat 
// let arr3 = [73,3,5,2,[6,4,[4,34,5]]]
// console.log(arr3.flat(Infinity));


// let arr4 = [4,3,7,8,9,0]
// let arrcopy = arr4;
// let arrcopy2 = "...arr4";
// arrcopy.pop()
// arrcopy2.pop()
// console.log("arr4" ,arr4)
// console.log("arrcopy" ,"arrcopy2")



// // Map and Filter and Reduce  --> array function


// let originalPrices = [434,43,66665,4532,]
// let discountePrices = []

// for (value of originalPrices){
//   discountePrices.push(value * 0.9)
// }
//   console.log (originalPrices);
//   console.log (discountePrices);

//   const discountePrices2 = originalPrices.map(value) => {
//     return value * 0.9
//   }
// console.log(discountePrices2)


// let students = [
//   {
//   name : Ayan,
//   rollno: 34,
// },
//   {
//   name : jain,
//   rollno: 34,
// },
//   {
//   name : Ayan,
//   rollno: 34,
// },
//   {
//   name : Ayan,
//   rollno: 34,
// },
//   {
//   name : Ayan,
//   rollno: 08,
// },
// ]
// let studentNames = []
// student.forEach (value) => {
//   studentNames.push (value.name)
// }


// const studentNames= student.map(student) => return( student.name)

// console.log(studentNames)


// let boostMarks = student.map ((student)) => {
//   return {...student, marks : student.marks + 10}

// }

// let boostMarks= student.map (student => ({...student,marks: student.marks + 10}))
// console.log(boostMarks);


// let failedStudent = {}

// student.foreach ((student) => {
//   if {student.marks < 33} {
//     failedStudent.push(student)
//   }
// })

// const failedStudent = student.filterO((student) => student.marks <33)  .map((studentNames)=> student.name
// console.log(failedStudent );
// console failedStudentame = failedStudent.map((studentNames)=> student.name



let marks =[43,54,24,64,64]

// totalmarks = 0
// marks.forEach((marks) => totalmarks= totalmarks + marks)

const totalMarks= marks.reduce ((accumulator ,currentvalue) => {
  return accumulator + currentvalue
} ,0)

console.log(totalmarks);

const attendence = ["present" , "absent" , "present" , "present" , "absent"]

// let obj={}
//  attendence.forEach((value)=> {
  
// if (obj[value])
// {obj [value] + 2

// }
// else{obj [value] =2

// })
// {obj [value]})
// {obj [value]})

const obj = attendence.reduce((acc,value) => {
  acc(value) = (acc[value])
  acc(value) = (acc[value] ||0) +1 ;
  return acc
},{})












