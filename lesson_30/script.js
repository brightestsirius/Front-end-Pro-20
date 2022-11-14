// const API =
//   "https://raw.githubusercontent.com/brightestsirius/Front-end-Pro-19/master/lesson_27/tesla.json";

// const renderTesla = () => {
//   $.ajax({
//     method: "GET",
//     url: API,
//     async: false,
//     dataType: "JSON",
//     success: data => {
//         console.log(data);
//     },
//     error: (error) => console.log(error),
//   });
// };

// renderTesla();

// fetch(API) // Response
//     .then(data => data.json())
//     .then(data => renderTeslas(data))
//     .catch(err => console.log(err));

// const renderTeslas = data => {
//     console.log(data);
// }

// const renderTeslas = async () => {
//     let teslas = await fetch(API).then(data => data.json());
//     console.log(teslas);
// };

// renderTeslas();

console.log(`Hello, world 🥹`);

const mul = (x, y) => x*y;
console.log( mul(2,3) );

for(let i=1; i<=5; i++) console.log(i);

// class User{
//     constructor(obj){
//         Object.assign(this, obj);
//     }

//     getName(){
//         return `Hello, ${this.name}`;
//     }
// }

// let Jack = new User({name: `Jack`});
// console.log(Jack.getName());

console.log(window);

import User, {x} from './User.js';

let Oleg = new User({name: `Oleg`});
console.log(Oleg.getName());

console.log(x);

$(`h1`).css(`color`, `blue`);