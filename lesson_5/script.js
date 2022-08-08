// document.write()

// let cat = true;
// let dog = true;

// document.write(`<ul class="list">
//     <li>First</li>
//     <li>Second</li>`);

// if(cat){
//     document.write(`<li>Cat</li>`);
//     console.log(`cat exist`);
// }

// if(dog) document.write(`<li>Dog</li>`);

// document.write(`</ul>`);

// "use strict"; // ES6 => EcmaScript 6

// let cat = `Tom`;

// let x = 10;
// x = 20;
// x = 30;

// let cat = confirm(`Would you like cat?`); // true/false

// if(cat){
//     let catName = prompt(`Enter cat name`);
//     console.log(catName);
// }

// confirm or prompt
// if/else or if/if
// let/const in if
// single line

// switch/case

// let cat = `Tom`;

// Anna
// Bogdan

// if(cat === `Tom`){
//     console.log(`Hello, Tom`);
// } else if(cat === `Anna`){
//     console.log(`Hello, Anna`);
// } else if(cat === `Bogdan`){
//     console.log(`Hello, Bogdan`);
// } else{
//     console.log(`Hello, someone!`);
// }

// switch(cat){
//     case `Tom`:
//         console.log(`Hello, Tom`);
//         break;
//     case `Anna`:
//         console.log(`Hello, Anna`);
//         break;
//     case `Bogdan`:
//         console.log(`Hello, Bogdan`);
//         break;
//     default:
//         console.log(`Hello, someone!`);
// }

// let father = `Oleksandr`;
// let surname;

// switch(father){
//     case `Anatoliy`:
//         surname = `Anatoliivna`;
//         break;
//     case `Oleksandr`:
//         surname = `Oleksandrivna`;
//         break;
// }

// let fullname = `${cat} ${surname}`;
// console.log(fullname);

// if(15>10) console.log(`15 more then 10`);


// let x = 15,
//     y = 20;

// if(x>y){
//     console.log(`x more then y`);
// } else if(x<y && x>15){
//     console.log(`x less then y`);
// } else if(x===y){
//     console.log(`x equal to y`);
// }

// switch(true){
//     case x>y:
//         console.log(`x more then y`);
//         break;
//     case x<y && x>=15:
//         console.log(`x less then y`);
//         break;
//     case x===y:
//         console.log(`x equal to y`);
//         break;
// }

//let color = prompt(`Choose color: red, green, blue`); // null, '', '...'

// null => false
// '' -> false
// '...' => true

// if(color) color = color.replaceAll(` `,``).toLowerCase();

// switch(color){
//     case `red`:
//         color = `#f44336`;
//         break;
//     case `green`:
//         color = `#4caf50`;
//         break;
//     case `blue`:
//         color = `#3f51b5`;
//         break;
//     default:
//         color = `#ff9800`;
// }

// document.write(`<h1 style="color: ${color}">Hello, world!</h1>`);

// ternar

// let x = 10;

// if(x>=10) console.log(`yes`);
// else console.log(`no`);

// x>=10 ? console.log(`yes`) : console.log(`no`);

// console.log(x>=10 ? `yes`);

// let x = 10;

// x>=10
//     x>10 => `more the 10`
//     x === 10 => `equals 10`
// x<10
//     x<=5 => `less then 5 or equals`
//     x>5 => `more then 5`

// console.log(
//     x>=10 
//     ? x>10 
//         ? `more the 10` 
//         : `equals 10`
//     : x<=5 
//         ? `less then 5 or equals` 
//         : `more then 5`
// )

// let cat = false,
//     dog = false;

// document.write(`<ul>
//     <li>First</li>
//     <li>Second</li>
//     <li>Cat ${ cat ? `exist` : `not exist` }</li>
//     ${ dog ? `<li>Dog</li>` : `` }
// </ul>`)

// let x = 18;

// x>=10 && x>13 && x<17 && console.log(`all conditions os true`);
// if(x>=10 && x>13 && x<17) console.log(`all conditions os true`);

// let email = prompt(`Enter email`); // null
// if(email) email = email.replaceAll(` `,``).toLowerCase();

// while(!email || !email.includes(`@`) || email.startsWith(`@`) || email.endsWith(`@`)){
//     email = prompt(`Enter email`);
//     if(email) email = email.replaceAll(` `,``).toLowerCase();
// }

// console.log(email);

// 1
// 2
// 3
// 4
// 5

// console.log(`before`);

// let value = 5;
// // debugger;

// while(value > 1){
//     console.log(value);
//     value -= 3;
// }

// // 5
// // 2

// // debugger;
// console.log(`After loop: ${value}`); // -1

// if(!email || !email.includes(`@`) || email.startsWith(`@`) || email.endsWith(`@`)){
//     console.log(`Email not valid`);
// }

// console.log(email);


// while
// do/while
// for
// break; continue;

// debugger

// array