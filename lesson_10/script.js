// const universes = [
// 	['DC', ['Superman', 'Batman', 'Wonder Woman']],
// 	['Marvel', ['Iron Man', 'the Hulk', 'Black Widow']]
// ];

// const heroesDC = ['Superman', 'Batman', 'Wonder Woman'];
// const heroesMarvel = ['Iron Man', 'the Hulk', 'Black Widow'];

// const heroes = [heroesDC, heroesMarvel];

// const STYLES = [`color`, `border-color`];

// function getStyles(){
//     let styles = [];
//     for(let i=0; i<STYLES.length; i++){
//         styles.push(`${STYLES[i]}: ${getStyle(STYLES[i])}`);
//     }

//     // [`color: red`, `border-color: green`];
//     // `color: red; border-color: green`;

//     return STYLES.length ? `style="${styles.join(`; `)}"` : ``;
// }

// function getStyle(option){
//     return prompt(`Enter ${option}`);
// }

// function renderHeroesTable(arr){
//     let TRs = [];

//     for(let i=0; i<arr.length; i++){
//         TRs.push(`<tr><td>${arr[i]}</td></tr>`);
//     }
    
//     return `<table ${getStyles()}>${TRs.join(``)}</table>`;
// }

// function renderArrayOfTables(arr){
//     let tables = [];
//     for(let i=0; i<arr.length; i++){
//         tables.push(renderHeroesTable(arr[i]));
//     }

//     return tables.join(``);
// }

// document.write(renderArrayOfTables(heroes));

// debugger;

// let heroes = ['DC', ['Superman', [`apple`]]];

// function renderHeroTable(arr){
//     // debugger;
//     let TRs = [];

//     for(let i=0; i<arr.length; i++){
//         if(Array.isArray(arr[i])){
//             TRs.push(`<tr><td>${ renderHeroTable(arr[i]) }</td></tr>`);
//         } else{
//             TRs.push(`<tr><td>${arr[i]}</td></tr>`);
//         }

//         //TRs.push(`<tr><td>${Array.isArray(arr[i]) ? arr[i].join(`; `) : arr[i]}</td></tr>`)
//     }

//     return `<table>${TRs.join(``)}</table>`;
// }

// document.write( renderHeroTable(heroes) );

// recursion

// let arr = [10,20,30,[40,50,60,[70,80,90]]];

// function copyOfArray(array){
//     let newArray = [];

//     for(let i=0; i<array.length; i++){
//         if(Array.isArray(array[i])){
//             newArray.push(copyOfArray(array[i]));
//         } else{
//             newArray.push(array[i]);
//         }
//     }

//     return newArray;
// }

// let arr_2 = copyOfArray(arr);

// arr_2[3][3][0] = `HELLO`;

// console.log(arr);
// console.log(arr_2);

// Lexical environment, Global/Local Scope

// let x = 10;

// function foo(){ // 10
//     x = 100;
//     x++; // 101
//     console.log(`In function: ${x}`); // 101
// }

// foo();

// hoisting

// let x = 10;

// function f1(x){
//     console.log(`At start f1`);
//     x++; // 11

//     x = f2(x); // 12

//     console.log(`At the end f1. In function f1: ${x}`); // 12
// }

// function f2(){ // 11
//     x++; // 12
//     console.log(`In function f2: ${x}`); // 12

//     return x;
// }

// f1(x);
// f2();

// console.log(`After function: ${x}`); // 10

// closure

// let x = 10;

// function f1(x){ // 10
//     // debugger;
//     x++; // 11

//     f2(x);

//     console.log(`In function f1: ${x}`); // 12
// }

// function f2(y){ // 11
//     // debugger;
//     x++; // 12
//     y++; // 12
//     console.log(`In function f2: ${x}, ${y}`); // 12
// }

// f1(x);
// console.log(`After function: ${x}`); // 10

// arguments
// function as argument
// callback
// spread/rest in function
// arrow function
// setTimeout
// setInterval/clearInterval
// Event loop

// Array methods
// forEach
// filter
// map
// find/findIndex
// every/some
// reduce