/* let age = 25;
  if(age < 11)
  {
 alert("you are a child");
  }
  else if(age < 20)
  { 
 alert("you are a teen");
  }
  else if(age < 45)
  { 
    alert("you are a adult");
  }
  else
  {
    alert("you are a wise person");
  }

 let num = 1;
 switch(num)
 {
    case 1:
        alert("ONE");
        break;
        case 2:
            alert("TWO");
            break;
             case 3:
                alert("THREE");
                break;
                default:
                    alert("Match not Found");

}
 
age < 11 ?
alert("you are a child")
:
alert("you are a teen")  


let adult = age > 18 ? true : false
alert(adult);

for( let i = 0 ; i < 10 ; i = i + 1)
if(i % 2 == 0)
{
    console.log(i);
}

for(let i = 10 ; i > 0 ; i = i - 1)
let i = 0;
while(i < 10){
  if(i % 2 != 0)
{
   console.log(i);
}
i= i + 1;
}
function addtwonumbers()
{
    let fnum = +prompt("Enter the First Number");
let snum = +prompt("Enter the Second Number");
alert(`The sum of two numbers are ${fnum + snum}`);
}
 
function getsquare()
{
    let num = +prompt("Enter the number");
    alert(`The square root of${num} is ${num * num}`);
}

addtwonumbers();
getsquare();


function names()
{
    let name = "Jaswanth";
    console.log(`Hello ${name}`);
}
names();


function names(name, occupation)
{
    console.log(`I am ${name} a ${occupation}`);
}

names("John", "Hunter");
names("Jaswanth", "Developer");
names("Rohith", "Racer");
names("Bhargav", "Contracter");
names("Srihitha", "Doctor");


function names(name, occupation)
{
    return `I'am ${name} a ${occupation}`;
}

let m1 = names("John", "Hunter");
let m2 = names("Jaswanth", "Developer");
let m3 = names("Rohith", "Racer");
let m4 = names("Bhargav", "Contracter");
let m5 = names("Srihitha", "Doctor");

alert(m1);
console.log(m2);

// arrow function

const add = (num1, num2) => num1 + num2;

add(12 + 12);

const square = (num) => num1 * num2;

const add = (num1, num2) => {
    return num1 + num2;
}

add(12, 12);


// function expression

const add1 = function add(num1, num2)
{
    return num1 + num2;

}
add1(10,10);

// anonymous function

const add2 = function (num1, num2)
{
    return num1 + num2;
}
add2(12,24);

let details ={
    name: "jaswanth",
    age: 24,
    sex: male,
}
let colors = ["red","green","blue","yellow","black"];
let numbers = [10,15,2,3,48,24,53,65,78];

for(let i = 0; i < colors.length; i++)
{
    console.log(colors[i]);
}

for(let i = 0; i < numbers.length; i++)
{
    console.log(numbers[i]);
}*/

//let colors = ["red","green","blue","yellow","black"];
//let numbers = [10,15,2,3,48,24,53,65,78];

/*for(let color of colors)
{
    console.log(color);
}

for(let number of numbers)
{
    console.log(number);
}

let odd = [],
even = [];

for(let number of numbers)
{
    if(number % 2 === 0 )
    {
      even.push(number);  
    }
    else
    {
      odd.push(number);
    }
}

let student ={
    Name: "jaswanth",
    age: 24,
    isAdult: true,
    favfruits: ["apple","banana"],
}
console.log(student);

function names()
{
    let name = "Jaswanth";
    console.log(`Hello ${name}`);
}
names();


function names(name, occupation)
{
    return `I'am ${name} a ${occupation}`;
}

let m1 = names("John", "Hunter");
let m2 = names("Jaswanth", "Developer");
let m3 = names("Rohith", "Racer");
let m4 = names("Bhargav", "Contracter");
let m5 = names("Srihitha", "Doctor");

alert(m1);
console.log(m2);


function names(name1)
{
    return `Hello ${name1}`;
}

let m1 = names("jaswanth");
let m2 = names("vamsi");
let m3 = names("rahul");

alert(m1);
alert(m2);
alert(m3);

// arrow function

const add = (num1, num2) => num1 + num2;


add(12 ,12);

let details ={
    name: "jaswanth",
    age: 24,
    sex: "male",
}

let colors = ["red","green","blue","yellow","black"];
let numbers = [10,15,2,3,48,24,53,65,78];

for(let i = 0; i < colors.length; i++)
{
    console.log(colors[i]);
}

for(let i = 0; i < numbers.length; i++)
{
    console.log(numbers[i]);
}
function add(a, b)
{
    return a+b;
}

let operation = 
{
    sum:add,
}

let message = "Hello World";

let total = 100.1234567;

let colors = [
    "aqua",
    "red",
    "green",
    "brown",
    "grey",
    "purple",
    "pink",
    "black",
];


let numbers = [1,2,3,4,5,6,7,8,9,10,11,111,121,150,200];


// Call back function using For each method 

let allcolor = "";

colors.forEach(foreachcolor)
function foreachcolor(color)
{

    allcolor += color + " ";
}
console.log(allcolor);



let allnumber = "";
numbers.forEach(foreachnumber)

function foreachnumber(num)
{

    allnumber += num + " ";
}
console.log(allnumber);




let colors = [
    "aqua",
    "red",
    "green",
    "brown",
    "grey",
    "purple",
    "pink",
    "black",
];


let numbers = [1,2,3,4,5,6,7,8,9,10,11,111,121,150,200];

function log(color){
    console.log(color);
}
colors.forEach(log);

numbers.forEach(function(number){
      console.log(number);
});

numbers.forEach((num) => console.log(num));  // arrow function



// map method 
let colors = [
    "aqua",
    "red",
    "green",
    "brown",
    "grey",
    "purple",
    "pink",
    "black",
];


let numbers = [1,2,3,4,5,6,7,8,9,10,11,111,121,150,200];

function double(number)
{
   
    return number * 2;
}

let doublenum = numbers.map(double);

console.log(doublenum);




// Filter method

let colors = [
    "aqua",
    "red",
    "green",
    "brown",
    "grey",
    "purple",
    "pink",
    "black",
];


let numbers = [1,2,3,4,5,6,7,8,9,10,11,111,121,150,200];

function Even(num)
{
   return num % 2 === 0;
}

let evennum = numbers.filter(Even);
console.log(evennum);

// Find & FindIndex  method
let numbers = [1,2,3,4,5,6,7,8,9,10,11,111,121,150,200];

function IsTwelve(num)
{
   return num % 2 === 0;
}

let ans = numbers.find(IsTwelve);
let ans1 = numbers.findIndex(IsTwelve);
console.log(ans);
console.log(ans1);

// Some & Every method
let numbers = [1,2,3,4,5,6,7,8,9,10,11,111,121,150,200];

let colors = [
    "aqua",
    "red",
    "green",
    "brown",
    "grey",
    "purple",
    "pink",
    "black",
];


let ret = numbers.every(function(num){
    return num > 0;
});

let retcol = colors.every(function(col){
       return col.includes("red");
});


let ret1 = numbers.some(function(num){
    return num > 0;
});

let retcol1 = colors.some(function(col){
       return col.includes("red");
});

// Sort method
let numbers = [1,2,3,4,5,6,7,8,9,10,11,111,121,150,200];

function compare(a,b)
{
    return b - a;
}

let sorted = [...numbers].sort(compare);*/


// // Reduce method
// let numbers = [1,2,3,4,5,6,7,8,9,10,11,111,121,150,200];

// let colors = [
//     "aqua",
//     "red",
//     "green",
//     "brown",
//     "grey",
//     "purple",
//     "pink",
//     "black",
// ];


// let sum = numbers.reduce((acc, num)=>{
//      return acc + num ;
// },0);


// let color1 = colors.reduce((acc, color)=>{
//     return acc + color;
// },"");

const menu = document.querySelector('#mobile-menu');
const links = document.querySelector('.navbar__menu');
 
menu.addEventListener('click',function(){
    menu.classList.toggle('is-active')
    links.classList.toggle('active')
})