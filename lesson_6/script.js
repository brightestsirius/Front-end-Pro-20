// while

// let yearOfBirth = prompt(`Enter year`);

// // '1990' => true ~ false
// // 'Year: 1990' = > true ~ false
// // null => false
// // '' => false

// while(!yearOfBirth || isNaN(yearOfBirth)){
//     yearOfBirth = prompt(`Enter year`);
// }

// console.log(yearOfBirth);  // 'Year: 1990'

// let age = new Date().getFullYear() - yearOfBirth; // 2022 - 'Year: 1990'; => NaN;
// console.log(age);

// let userName = prompt(`Enter name`); // Anna Viktoria
// if(userName) userName = userName.trim();

// while(!userName){
//     userName = prompt(`Not valid data. Enter name`); 
//     if(userName) userName = userName.trim();
// }

// do/while
// let userName;
// do{
//     userName = prompt(`Enter name`); // Anna Viktoria
//     if(userName) userName = userName.trim();
// } while(!userName);

// console.log(userName);

// let value = 20; // 15

// while(value<=15){
//     console.log(value);
//     value++;
// }

// do{
//     console.log(value);
//     value++;
// } while(value<=15)

// let countOfTries = 3;
// let emailValid = true;

// let email;
// do{
//     email = prompt(`Count of tries: #${countOfTries}. Enter email`); // null, "", hello
//     if(email) email = email.replaceAll(` `,``).toLowerCase();

//     countOfTries--;
// } while(countOfTries>0 && (!email || !email.includes(`@`)));

// if(countOfTries === 0 && (!email || !email.includes(`@`))){
//     console.log(`Count of tries = 0`);
// } else{
//     console.log(`Email: ${email}`);
// }

// for
// 1-5

// let number = 1;

// for(; number<=5; number++){
//     console.log(number); // 5
// }

// console.log(`after for: `, number);


// let x = 10;

// // x <= 15
// // y > 0

// for(let y=0; x<=15 && y>=3; x+=2, y--){
//     console.log(x, y);
// }

// let email; // undefined

// for(let countOfTries=3; countOfTries>0 && (!email || !email.includes(`@`)); countOfTries--){
//     email = prompt(`Enter email`);
//     if(email) email = email.replaceAll(` `,``).toLowerCase();
// }

// console.log(email);

// loop in loop

// let number = 5;

// for(let i=1; i<=number; i++){
//     console.log(i); // 3

//     for(let j=1; j<=i; j++){
//         console.log(`   ${j}`);

//         if(j===3){
//             continue;
//         }
//         console.log(`----`);
//     }

//     console.log(`***`);
// }

// break; continue;

// let number = 10;

// for(let i=1; i<=number; i++){
//     console.log(i); // 5

//     if(i===5){
//         continue;
//     }

//     console.log(`----`);
// }

// factorial

// 5 = 1*2*3*4*5; => 120

// let value = 10;
// let factorial = 1;

// for(let i=1; i<=value; factorial *= i, i++){}
// console.log(factorial);

// fibonacci

// let first = 0;
// let second = 1;

// console.log(first); // 0
// console.log(second); // 1

// let nextFib = first+second;

// console.log(nextFib); // 1

// let nextNextFib = second + nextFib;

// console.log(nextNextFib);

// let nextNextNextFib = nextFib + nextNextFib;
// console.log(nextNextNextFib);

// let first = 0;
// let second = 1;

// console.log(first); // 0
// console.log(second); // 1

// // 10 numbers form fibonacci row
// let nextFibonacci;

// for(let i=1; i<=13; i++){
//     nextFibonacci = first + second; // 3 = 1+2
//     console.log(nextFibonacci);

//     first = second; // 1
//     second = nextFibonacci; // 2
// }

// prime number

// 6

// // 6/1 = 6
// 6/2 = 3 => is not prime
// // 6/3 = 2
// // 6/4 = ..
// // 6/5 = ..
// // 6/6 = 1

// 5

// // 5/1 = 5
// 5/2 = ...
// 5/3 = ..
// 5/4 = ..
// // 5/5 = 1

const value = 10;
let isPrime = true;

for(let i=2; i<value; i++){
    let zalushok = value%i;

    console.log(`${value} % ${i} = ${zalushok}`);

    if(zalushok === 0){
        isPrime = false;
        break;
    }
}
console.log(`${value} is ${isPrime ? `prime` :  `not prime`}`);

// Array