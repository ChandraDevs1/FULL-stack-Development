// console.log("Hello");
// console.log("I Love Js");

// // for giving Notification in console button
// window.alert(`This is a alert!`);
// window.alert(`I like Pizza!`)

// document.getElementById("txt").textContent=`hello cs18`;
// document.getElementById("myp").textContent=`I like js`;

//   ££££££ Variables •••••••••••

// let fullname="Cs18";
// let age =18;
// let isStudent = true;

// document.getElementById("p1").textContent=`your name is ${fullname}`;
// document.getElementById("p2").textContent=`your age is ${age}`;
// document.getElementById("p3").textContent=`your are a student ${isStudent}`;


//  ••••••••••• Operators ••••••••••
// let result = 1+6-1*3/4**5;
// console.log(result);

//  §§§§§§§§§ Accept User Input ••••••••••••

// let username = window.prompt("What's your Username ?");

//                 Submit Button onclick

// document.getElementById("mysubmit").onclick= function() {
//     username = document.getElementById("mytext").value;
//     document.getElementById("myh1").textContent =`Hello ${username}`;
// }

//  type Conversion 

// let age = window.prompt("How old are you?");
// age = Number(age);
// age+=1;

// console.log(age , typeof age);

// let x = "90";
// let y = "67";
// let z = "";

// x =String(x);
// y = Number(y);
// z = Boolean(z);
// console.log(x , typeof x);
// console.log(y , typeof y);
// console.log(z , typeof z);


//  Const == value that can't changed
//   •••••••••• Radius of A circle  ••••••••

const PI = 3.14;
let radius;
let circumference;

document.getElementById("mysubmit").onclick = function(){
radius = document.getElementById("mytext").value;
radius  = Number(radius);

circumference = 2 * PI * radius;
document.getElementById("myh3").textContent = circumference + "cm";
}

//  Counter Program

