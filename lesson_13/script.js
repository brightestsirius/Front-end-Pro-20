// map for two-dimensional array

// let arr = [
//     [10,20,30],
//     [40,50,60]
// ];

// function modifyArr(list){
//     list = JSON.parse(JSON.stringify(list));
//     list[0][0] *= 2;
// }

// modifyArr(arr);
// console.log(arr);

// let arr = [
//     [10,20,30],
//     [40,50,60]
// ];

// modifiedArr = [
//     [20,20,30],
//     [80,50,60]
// ];

// let modifiedArr = arr
//     .map(
//         function(item){
//             // item = [10,20,30]
//             item = [...item];
//             item[0] *= 2;
//             return item;
//         }
//     );

// let sum = 0;

// arr.forEach(
//     function(innerArr){ // [10,20,30]
//         innerArr[0] *= 2;
//         sum += innerArr[0];
//     }
// )

// console.log(arr);
// console.log(sum);

// console.log(arr);
// console.log(modifiedArr);

// every/some
// let arr = [`10`,20,`30`,40,50,`60`];

// let notNumberExist = false;

// for(let i=0; i<arr.length; i++){
//     if(typeof arr[i] !== `number`){
//         notNumberExist = true;
//         break;
//     }
// }


// let notNumberExist = arr.every(item => typeof item === `number`);
// let notNumberExist = arr.every(
//     function(item, index, arr){
//         console.log(item);
//         return typeof item === `number`; // true
//     }
// );

// console.log(notNumberExist);

// let notNumberExist = arr.some(
//     function(item, index, arr){
//         console.log(item);
//         return typeof item === `number`; // true
//     }
// );

// console.log(notNumberExist);

// let users = [
//     [`Jack`, 1990],
//     [`Anna`, 2000],
//     [`Bogdan`, 1990]
// ]

// let allUserHasYear = users.every(user => user[1]);
// console.log(allUserHasYear);

// forEach => unefined
// map => []
// filter => []
// every/some => true/false

// reduce

// let arr = [10,20,30];

// let sum = 0;
// for(let i=0; i<arr.length; sum += arr[i], i++){};
// console.log(sum);

// let sum = arr.reduce(
//     function(result, item, index, arr){
//         result += item; // 30
//         return result;
//     },
//     0
// )

// let sum = arr.reduce(
//     function(result, item, index, arr){
//         result += item;
//         return result;
//     }
// )
// console.log(sum);

// const products = [
// 	['apple',10],
// 	['banana',8],
// 	['mango',20],
// 	['grape',18]
// ];

// let price = 0;

// for(let i=0; i<products.length; i++){
//     let product = products[i]; // ['apple',10]
//     let productPrice = product[1]; // 10;

//     price += productPrice;
// }

// let price = products
//     .reduce(
//         function(result, item){
//             result += item[1];
//             return result;
//         },
//         0
//     )

// console.log(price);

// let animals = [
//     [`cat`, 10],
//     [`dog`, 20],
//     [`lion`, 30]
// ];
// animals = [`cat`, `dog`, `lion`];

// let animalNames = [];

// for(let i=0; i<animals.length; i++){
//     let animal = animals[i]; // [`cat`, 10]
//     animalNames.push(animal[0]);
// }
// console.log(animalNames);

// let animalNames = animals
//     .reduce(
//         function(result, animal, index, array){
//             // debugger;
//             result.push(animal[0]);
//             return result;
//         },
//         []
//     );

// let animalNames = animals
//     .reduce(
//         function(result, animal, index){
//             result += index === 0 ? animal[0] : `_${animal[0]}`;
//             return result;
//         },
//         ``
//     );

// console.log(animalNames); // `_cat_dog_lion`;

// const products = [
// 	['apple',10,true],
// 	['banana',8, true],
// 	['mango',20, true],
// 	['grape',18, false]
// ];

// const SEASON_KOEF = 2;

// let price = products
//     .filter(product => product[2])
//     .map(product => product[1] *= SEASON_KOEF)
//     .reduce((result, item) => {
//         result += item;
//         return result;
//     });

// console.log(price);

// function renderTable(list, koef){
//     let filteredModifiedList = list
//         .filter(product => product[2])
//         .map(product => {
//             product[1] *= koef;
//             return product;
//         });

//     console.log(filteredModifiedList);

//     // let price = filteredModifiedList
//     //     .reduce((result, item) => {
//     //         result += item[1];
//     //         return result;
//     //     }, 0);

//     let price = filteredModifiedList
//         .map(product => product[1])
//         .reduce((result, item) => {
//             result += item;
//             return result;
//         });

//     console.log(price);

//     return `<table>
//         <thead>
//             <tr>
//                 <th>Name</th>
//                 <th>Price</th>
//             </tr>
//         </thead>
//         <tbody>
//             ${filteredModifiedList
//                 .map(product => `<tr>
//                     <td>${product[0]}</td>
//                     <td>${product[1]}</td>
//                 </tr>`)
//                 .join(``)
//             }
//         </tbody>
//         <tfoot>
//             <tr>
//                 <td colspan="2">Final price: ${price}</td>
//             </tr>
//         </tfoot>
//     </table>`
// }

// let productsTable = renderTable(products, SEASON_KOEF);
// document.write(productsTable);

// let cat = [`cat`, 20];
// let dog = [`dog`, 21];
// let lion = [`lion`, 18];
// let parrot = [`parrot`, 3];

// const renderAnimal = animalInfo => `<div>
//         <h4>${animalInfo[0]}</h4>
//         <p>${animalInfo[1]}</p>
//     </div>`;

// const renderAnimalCat = animalInfo => `<div>
//     <h1>${animalInfo[0]}</h1>
//     <p>${animalInfo[1]*2}</p>
//     </div>`;

// document.write(renderAnimalCat(cat));

// const renderHeading = animalName => {
//     switch(animalName){
//         case `cat`:
//             return `<h1>${animalName}</h1>`;
//         case `dog`:
//             return `<h2>${animalName}</h2>`;
//         case `lion`:
//             return `<h3>${animalName}</h3>`;
//         default:
//             return `<h4>${animalName}</h4>`
//     }
// }

// const renderAge = animal => {
//     let age = animal[1];

//     switch(animal[0]){
//         case `cat`:
//             age *= 2;
//             break ;
//         case `dog`:
//             age *= 3;
//             break;
//     }

//     return `<p>${age}</p>`;
// }

// const renderAnimal = animalInfo => {
//     return `<div>
//         ${renderHeading(animalInfo[0])}
//         ${renderAge(animalInfo)}
//     </div>`;
// }

// document.write(renderAnimal(cat));
// document.write(renderAnimal(dog));
// document.write(renderAnimal(lion));
// document.write(renderAnimal(parrot));

// object

// let user = [`Sasha`, `Bogdan`, 3];
// const products = [
// 	['apple',10,14],
// 	['banana',8, true],
// 	['mango',20, true],
// 	['grape',18, false]
// ];

// let user = {
//     name: `Sasha`,
//     surname: `Bogdan`,
//     age: 20,
//     married: true,
//     children: [`Anya`, `Tanya`],
//     yearOfBirth: 1990,
//     dog: {
//         name: `Patron`,
//         type: `Jack Rassel`
//     }
// }

// console.log( user.name );
// console.log( user.married );
// console.log( user.children[0] );

// // console.log(user["year of birth"]);
// console.log(user.yearOfBirth);

// console.log(user.dog);
// console.log(user.dog.name);

// let users = [
//     {
//         name: `User 1`,
//         age: 10
//     },
//     {
//         name: `User 2`,
//         age: 12,
//         children: [`Anya`, `Katya`]
//     }
// ];

// users.forEach(user => console.log(user.name));

// let user = {
//     name: `Anton`
// };

// user.surname = `Shevchenko`;
// user.age = 10;
// user.child = `Anya`;

// user.name += ` Antonina`;

// delete user.name;

// console.log(user);

// user = {
//     age: 10,
//     child: `Anya`
// }

// console.log(user);

let user = {
    surname: `Shevchenko`,
    age: 30,
    name: `Anton`
}

console.log(user);

for(let key in user){
    //console.log(key); // `surname`
    // user[key]
    console.log(user[key]);
    // console.log(user.key);  
}

// this
// prototype
// class