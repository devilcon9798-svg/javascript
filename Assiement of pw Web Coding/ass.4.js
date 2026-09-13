// Object , Dot and Bracket Notion ,Object.leys() ,values,entries, Object Destructuing , Shorthand Propetiees ans 





// let obj1  = {
//     name:"rahul" ,
//     Email: "rahul@gmail.com" ,
//     Role : "developer"
// }
// console.log(obj1)

// const product ={
//     name : "Laptop",
//     Price: 5000, 
//     Category : "Electronics"
    
// }

// console.log(product.name) // indviual print of name and price
// console.log(product.Price)

// const user ={
//     name : "rahul",
//     email: "rahul@gmail.com"
// }
// console.log(user["email"]) // second ways to print indviual




// const user = { 
// name: "Rahul", 
// email: "rahul@example.com" 
// }; 
// const key ="name"
// console.log(user[key]) //  print only values of individual user



// let  user = { 
// name: "Rahul", 
// role : "student"
// }; 
//  user.role = "developer"
// console.log(user); // Rename of value of individul




// const user = { 
// name: "Rahul", 
// email: "rahul@example.com" 
// }; 

// user.isLoggedIn = true;
// console.log(user)



// const user () = { 
// name: "Rahul", 
// email: "rahul@example.com" 
// }; 
// const keys = Object.keys(user);
// console.log(keys)



// const product = { 
// name: "Laptop", 
// price: 50000, 
// category: "Electronics" 
// }; 
// const values = Object.values(product)
// console.log(values)



// const settings = {
//     theme: "dark",
//     language : 'English',
//     Notification: true
// }
// const entries = Object.entries(settings)
// console.log(entries);




// const user = { 
// name: "Rahul", 
// email: "rahul@example.com" 
// };

// Object.entries(user).forEach(function([key,value]) {
// console.log(`${key} : ${value}`);
// });




// const user = { 
// name: "Rahul", 
// email: "rahul@example.com", 
// role: "developer" 
// }; 
// const {name,email} =user; // take together user.name and user.email = const (email,name)

// console.log(name);
// console.log(email)



// const product = { 
// name: "Laptop", 
// price: 50000 
// }; 

// const {name:productname} = product // rename of keys with destructring
// console.log(productname);




const name = "Rahul"
const email = "rahul@exmple.com"
const role = "developer"

const user = {
    name,
    email,
    role
}
console.log(user);

