// Chess

// const FIGURES = [`rook`, `horse`, `bishop`, `king`, `queen`, `bishop`, `horse`, `rook`];
// let TRs = [];

// for(let tr=1; tr<=8; tr++){

//     let TDs = [];
//     let color = tr<=2 ? `white` : `black`;

//     for(let td=1; td<=8; td++){
//         let figure = ``;

//         if(tr === 2 || tr === 7){
//             figure = `<img src="chess/${color}/pawn.svg" alt="pawn" height="35" width="35">`
//         } else if(tr === 1 || tr === 8){
//             figure = `<img src="chess/${color}/${FIGURES[td-1]}.svg" alt="${FIGURES[td-1]}" height="35" width="35">`;
//         }

//         TDs.push(`<td>${figure}</td>`);
//     }
    
//     TRs.push(`<tr>
//         <td>${tr}</td>
//         ${TDs.join(``)}
//         <td>${tr}</td>
//     </tr>`);
// }

// // console.log(TRs);

// const alphabet = `abcdefgh`;
// let TDsAlphabet = [];

// for(let i=0; i<alphabet.length; i++){
//     TDsAlphabet.push(`<td>${alphabet[i]}</td>`);
// }
// // console.log(TDsAlphabet);

// TDsAlphabet.push(`<td></td>`);
// TDsAlphabet.unshift(`<td></td>`);

// let TrAlphabet = `<tr>${TDsAlphabet.join(``)}</tr>`;
// // console.log(TrAlphabet);

// document.write(`<table>
//     ${TrAlphabet}
//     ${TRs.join(``)}
//     ${TrAlphabet}
// </table>`);

// function

// function sayHello(name, age, country, city=`Kiev`){
//     console.log(`Hello, ${name}!`);

//     // if(city === undefined)
//     //     city = `Kiev`;

//     if(age !== undefined)
//         console.log(`I'm ${age} years old!`);
    
//     if(country)
//         console.log(`I'm from ${country}`);

//     console.log(`City is ${city}.`);

//     console.log(`-----`);
// }

// sayHello(`Anna`, 30, `Ukraine`);
// sayHello(`Igor`);
// sayHello(`Valerii`, undefined, `Poland`, `Wrozlaw`);

// let x = 10;
// console.log(x);

// function getUserInfo(){
//     let name = prompt(`Enter name`),
//         yearOfBirth = prompt(`Enter year of birth`, 1990);

//     let age = getUserAge(yearOfBirth); // 32

//     console.log(`Name: ${name}. Age: ${age}.`);
// }

// function getUserAge(year){ // 1990
//     return new Date().getFullYear() - year; // 32
// }

// let userAgree = confirm(`Will work?`); // true
// userAgree && getUserInfo();

// function getSum(x, y){
//     let sum = x+y;

//     return [`Operation sum with ${x} and ${y}`, sum];
// }

// let a = 100,
//     b = 200;

// let mySum = getSum(10, 20); // 900
// console.log(mySum);

// getSum(a, b)

// function sayHello(userName){
//    return `Hello, ${userName}.`;
// }

// let sayHelloResult = sayHello(`Anna`); // undefined
// console.log(sayHelloResult);

// function repairClock(clockName){
//     if(clockName === `Casio N123`){
//         return 100;
//     } else if(clockName === `Rolex 333`){
//         return 10000;
//     } else{
//         return 300;
//     }
// }

// let priceForRepair = repairClock(`Rolex 333`);
// console.log(priceForRepair);

function getUserInfo(userArr){
    let fullName = `FullName: ${userArr[0]} ${userArr[1]}.`;
    let age = `Age: ${new Date().getFullYear() - userArr[2]}.`;

    let arrInfo = [fullName, age];

    return arrInfo.join(` `);
}

let MaxInfo = getUserInfo( [`Max`, `Golubnichenko`, 1999] );
console.log(MaxInfo);

let AnnaInfo = getUserInfo( [`Anna`, `Shevchecnko`, 2003] );
console.log(AnnaInfo);

// return
// Lexical environment, Global/Local Scope
// hoisting
// closure
// arguments
// function as argument
// callback
// spread/rest in function
// arrow function
// recursion
// setTimeout
// setInterval/clearInterval

// Array methods
// forEach
// filter
// map
// find/findIndex
// every/some
// reduce