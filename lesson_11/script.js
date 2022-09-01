// arguments

// function sum(arr){
//     let result = 0;
//     for(let i=0; i<arr.length; i++){
//         result += arr[i];
//     }
//     return result;
// }

// console.log( sum([10,20]) );
// console.log( sum([10,20,30]) );

// function sum(){
//     console.log(arguments);
    
//     let result = 0;
//     for(let i=0; i<arguments.length; i++){
//         result += arguments[i];
//     }
//     return result;
// }

// console.log( sum(10,20,30) );

// function foo(...myArgs){
//     // console.log(arguments);
   
//     // let args = [];
//     // for(let i=0; i<arguments.length; i++){
//     //     args.push(arguments[i]);
//     // }

//     // let args = [...arguments];
//     // args.push(`new`);

//     myArgs.push(`new`);
//     console.log(myArgs);
// }

// foo(10, `hello`, true, 100);

// function as argument

// function mathOperation(arr, funcName){
//     // if(typeof funcName === `function`){
//     //     return funcName(arr); // callback-function
//     // } else{
//     //     return arr;
//     // }

//     return typeof funcName === `function` ? funcName(arr) : arr;
// }

// function sum(arr){
//     let result = 0;
//     for(let i=0; i<arr.length; i++){
//         result += arr[i];
//     }
//     return result;
// }

// function multiply(arr){
//     let result = 1;
//     for(let i=0; i<arr.length; i++){
//         result *= arr[i];
//     }
//     return result;
// }

// console.log( mathOperation([10,20,30], sum) );
// console.log( mathOperation([10,20,30], multiply) );

// console.log( mathOperation([10,20,30]) );
// console.log( mathOperation([10,20,30], 100) );

// callback
// spread/rest in function

// function mathOperation(funcName, ...arr){
//     // console.log(arr);
//     return typeof funcName === `function` ? funcName(arr) : arr;
// }

// console.log(mathOperation(sum, 10,20,30));
// console.log(mathOperation(multiply, 100,200,300));

// arrow function

// function sum(a, b){
//     return a+b;
// }

// const sum = (a, b) => a+b;
// console.log( sum(10,20) );

// functionName = (variables) => return;

// const myFunc = x => Math.pow(x, 2);
// console.log( myFunc(3) );

// const myFunc = (x, y) => Math.pow(x, y);
// console.log( myFunc(3, 3) );

// const defaultFunc = () => `Hello, world!`;

// function defaultFunc(){
//     return `Hello, world!`;
// }

// console.log( defaultFunc() );

// function helloWorld(name, surname, yearOfBirth){
//     let age = new Date().getFullYear() - yearOfBirth;
//     return `Hello, ${name} ${surname}. I'm ${age} years old.`;
// }

// const helloWorld = (name, surname, yearOfBirth) => {
//     let age = new Date().getFullYear() - yearOfBirth;
//     return `Hello, ${name} ${surname}. I'm ${age} years old.`;
// }

// console.log( helloWorld(`Jack`, `Franko`, 1990) );

// const foo = (...args) => {
//     console.log(args);
// }

// foo(10,20,`hello`);

// setTimeout

// setTimeout(function(){
//     alert(`After 2s`);
// }, 2000);

// const myFunc = () => console.log(`Hello, world`);
// setTimeout(myFunc, 2000);

// console.log(`start`);

// setTimeout(() => console.log(`Hello`), 1000);

// console.log(`after first setTimeout`);

// setTimeout(() => console.log(`world!`), 2000);

// console.log(`after second setTimeout`);

// console.log(`start`);

// setTimeout(() => console.log(`Hello`), 1000);

// for(let i=0; i<=100; i++){
//     console.log(i); // 50000
// }

// function first(){}
// function second(){}
// function third(){}

// first()   second()     third()
// 3s          2s          4s

// STOP: result = resultFirst + resultSecond + resultThird;
// console.log(result);

// console.log(`start`);

// setTimeout(() => console.log(`Hello, world!`), 0);

// for(let i=0; i<=50; i++){
//     console.log(i);
// }

// console.log(`end`);

// let vacancies = [];

// function renderVacancies(){
//     //for...vacancies
// }

// setTimeout(renderVacancies, 5000);

// setTimeout(firstFunc,1000);
// setTimeout(secondFunc,1000);

// function main() {
//     console.log('A');

//     setTimeout(function exec() {
//       console.log('B');
//     }, 0)

//     console.log('C');

//     runWhileLoopForNSeconds();
// };

// main();

// setInterval/clearInterval

// let count = 0;

// function firstInterval(){
//     console.log(`hello: ${++count}`);
// }

// setInterval(firstInterval, 1000);

// console.log(`HELLO`);
// for(let i=0; i<=50; i++){
//     console.log(i);
// }

// 1s

// for(let i=0; i<=50; i++){
//     console.log(i);
// }

// let count = 0;

// function firstInterval(){
//     console.log(`🟢 hello: ${++count}`);
// }

// function secondInterval(){
//     console.log(`🔴 hello: ${++count}`);
// }

// const myFirstInterval = setInterval(firstInterval, 1000);
// const mySecondInterval = setInterval(secondInterval, 1000);

// setTimeout(function(){
//     clearInterval(myFirstInterval);
//     clearInterval(mySecondInterval);
// }, 3000);

// 🟢🔴
// Event loop

// Array methods
// forEach

// let arr = [10,20,30];

// for(let i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }

// function currentItem(item, index, list){
//     console.log(item, index, list);
// }

// arr.forEach(currentItem);

// let arr_2 = [`cat`, `dog`, `lion`];
// arr_2.forEach(currentItem);

let animals = [`cat`, `dog`, `lion`];

// animals.forEach(
//     function(item, index, list){
//         console.log(item);
//     }
// )

// function currentAnimal(item, index, list){
//     console.log(item);
// }
// animals.forEach(currentAnimal);

// animals.forEach(
//     (item, index, list) => {
//         console.log(item);
//     }
// )

// animals.forEach(item => console.log(item));

// filter
// map
// find/findIndex
// every/some
// reduce

// Imperative vs Declarative Programming