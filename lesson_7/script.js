// HW && RegEx

// const COUNT_OF_WORDS = 3;

// let finalString = ``;

// for(let i=1; i<=COUNT_OF_WORDS; i++){
//     let word = prompt(`Enter word #${i}`);
//     finalString += word;
    
//     // if(i === COUNT_OF_WORDS){
//     //     finalString += `?`
//     // } else{
//     //     finalString += ` `;
//     // }

//     finalString += i === COUNT_OF_WORDS ? `?` : ` `;
// }

// console.log(finalString); // `I love you?`;

// let str = `Hello, world`; // 12
// let hasNumber = false;

// for(let i=0; i<str.length; i++){
//     let letter = str[i];

//     if(!isNaN(letter) && letter !== ` `){
//         hasNumber = true;
//         break;
//     }
// }

// console.log(hasNumber ? `Word has number` : `Word has not a number`);

// RegEx

// let str = `Hello, Л1234234л worлld`;
// console.log( str.match( //ig ) );

// let str;
// do{
//     str = prompt(`Enter word`);
// } while(!str || str.match(/\d/));

// console.log(str);

// Array

// let student_1_name = `Oleg`;

// let names = [`Oleg`, `Anna`, `Tetiana`];
// console.log(names);

// console.log( names[0] );
// console.log( names[names.length-1] );
// console.log( names.length );
// console.log( names[100] ); // undefined

// names[100] = `cat`;

// console.log( names[100] );

// console.log(names);

// console.log(names[56]); // undefined

// let names = []; // 0
// console.log(names);

// names[names.length] = `cat`; // [`cat`];
// names[names.length] = `dog`;  // [`cat`, `dog`];

// let names = [`cat`];
// console.log(names);

// names[0] = `dog`;

// let animals = [`cat`, `dog`, `lion`];
// console.log(animals);

// animals[0] = animals[1];
// animals[1] = animals[2];

// animals.length = 2;

// let animals = [`cat`, `dog`, `lion`];
// console.log(animals);

// animals.length = 1;
// console.log(animals);

// animals.length = 3;
// console.log(animals);

// let arr = [10, 20, '30', 40, `hello`, 50];
// console.log(arr);

// let sum = 0;
// for(let i=0; i<arr.length; i++){
//     // console.log(arr[i]);
//     if(!isNaN(arr[i])) sum += +arr[i];
// }

// console.log(sum); // NaN

// min/max element in array

// let arr = [10, -20, 40, 59, -37, 100, -15, 34];
// console.log(arr);

// let minEl = maxEl = arr[0];

// for(let i=1; i<arr.length; i++){
//     if(arr[i] < minEl){
//         minEl = arr[i];
//     }

//     if(arr[i] > maxEl){
//         maxEl = arr[i];
//     }
// }

// console.log(minEl, arr.indexOf(minEl));
// console.log(maxEl, arr.indexOf(maxEl));

// let indexOfMin = arr.indexOf(minEl);
// let indexOfMax = arr.indexOf(maxEl);

// let tempVal = arr[indexOfMin]; // -37
// arr[indexOfMin] = arr[indexOfMax];
// arr[indexOfMax] = tempVal;

// console.log(arr);

// min/max element in array by index
// change position of min/max

// Math.random()

// let arr = [];

// for(let i=1; i<=10; i++){
//     arr[arr.length] = getRandomIntInclusive(-37, 38);
// }
// console.log(arr);

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

// let arr = [];
// let arrLength = +prompt(`Enter length of array`, 10); // "10"

// for(let i=1; i<=arrLength; i++){
//     arr[arr.length] = getRandomIntInclusive(-37, 38);
// }

// console.log(arr);

// let arr = [];
// let arrLength = +prompt(`Enter length of array`, 10); // "10"

// arr.length = arrLength;
// console.log(arr);

// for(let i=0; i<arr.length; i++){
//     arr[i] = getRandomIntInclusive(-37, 38);
// }
// console.log(arr);

// let arr = [];
// arr.length = 10;

// let arrLength = +prompt(`Enter length of array`, 10);
// let arr = new Array(arrLength);

// console.log(arr);

// Copy of array

// Array methods
//     push
//     pop
//     shift
//     unshift
//     reverse
//     concat
//     slice
//     splice
//     join
//     split
//     indexOf

// Two dimensional array