// Copy of array

// let arr = [10,20,30];
// let arr_2 = [];

// for(let i=0; i<arr.length; i++){
//     arr_2[i] = arr[i];
// }
// console.log(arr_2);

// arr_2[0] = `dog`;
// console.log(arr, arr_2);

// Copy of array: second
// let arr = [10,20,30];
// let arr_2 = [`lion`, `parrot`];

// for(let i=0; i<arr.length; i++){
//     arr_2[arr_2.length] = arr[i]; // 10
// }
// console.log(arr_2);
// console.log(arr, arr_2);

// ...

// let arr = [10,20,30];
// let arr_2 = [...arr]; // [10,20,30]

// arr_2[0] = `dog`;
// console.log(arr, arr_2);

// let arr = [10,20,30];
// let arr_2 = [`cat`, `dog`, ...arr ]; // [`cat`, `dog`, 10,20,30]
// console.log(arr, arr_2);

// Array methods
//     push

// let arr = [10,20];
// arr.push(`cat`, true, 100);

// let arrOfNewItems = [`cat`, true, 100];
// for(let i=0; i<arrOfNewItems.length; i++){
//     arr[arr.length] = arrOfNewItems[i];
// }

// console.log( arr.push(`cat`, true) ); // 4
// console.log(arr);

//     unshift

// let arr = [10,20];
// arr.unshift(`cat`, true, 100);
// console.log( arr.unshift(`cat`, true, 100) ); // 5
// console.log(arr);

//     pop

// let arr = [10,20,30,40];
// // arr.pop();
// console.log( arr.pop() ); // 40
// console.log(arr);

//     shift

// let arr = [10,20,30,40];
// arr.shift();
// console.log(arr);

//     reverse

// let arr = [10,20,30,40,50];
// arr.reverse();

// console.log(arr);

//     concat

// let numbers = [10,20,30];
// let animals = [`cat`, `dog`];
// let users = [`student`, `lector`]

// [10,20,30,`cat`, `dog`];

// let newArr = numbers.concat(users, animals);

// console.log(newArr);

// let numbers = [10,20,30];
// let animals = [`cat`, `dog`];
// let users = [`student`, `lector`];

// let finalArr = numbers
//                 .concat(animals, users) // [10,20,30, `cat`, `dog`, `student`, `lector`]
//                 .reverse(); // [10,20,30, `cat`, `dog`, `student`, `lector`]

// finalArr.push(`HELLO`);
// console.log(finalArr);

//     slice

// let arr = [10,20,30,40,50,60,70];
// let arr_2 = arr.slice(2, -1);

// console.log(arr, arr_2);

//     splice

// let arr = [10,20,30,40,50,60,70]; // [10,20, `cat`, `dog`, 10000, true,60,70]
// let arr_2 = arr.splice(2, 0, `cat`, `dog`, 10000, true, false, `hello`);

// console.log(arr, arr_2);

//     join

// let arr = [10,20,30,40];
// let arrToString = arr.join(` `); // `10,20,30,40`

// console.log(arr);
// console.log(arrToString);

// let arr = [10,20,30,40];
// let LIs = arr.join(`</li><li>`);

// console.log(LIs); // 10</li><li>20</li><li>30</li><li>40
// document.write(`<ul><li>${LIs}</li></ul>`);

//     split

// let fullName = `Artem Kobzar`;
// let userInfo = fullName.split(`m Ko`);

// console.log(fullName);
// console.log(userInfo);

// let str = `first second third fourth`;

// let strArr = str.match(` `);
// console.log(strArr);

// for(let i=0; i<strArr.length; i++){
//     strArr[i] = strArr[i][0].toUpperCase() + strArr[i].slice(1).toLowerCase();
// }

// console.log(strArr);

// let modifiedStr = strArr.join(` `);
// console.log(modifiedStr);

// let str = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque quo laboriosam, sapiente neque hic numquam minus sunt, vitae, culpa amet iusto asperiores laudantium inventore nisi tenetur consequatur. Saepe quas voluptatibus totam iure distinctio ullam dolorum eos id numquam hic accusantium consequatur, sint earum laborum, nam debitis commodi quaerat magnam dolore.`;
// let words = str.match(/\w+/g);
// console.log(words);

// Two dimensional array

// let arr = [10, 20, [[`table`], `floor`]]; 
// console.log(arr);

// console.log( arr[2][0][0] ); // [`table`]

// let users = [
//     [`Anna`, 23],
//     [`Bogdan`, 100],
//     [`Olesya`, 50]
// ];

// for(let i=0; i<users.length; i++){
//     let user = users[i], // [`Anna`, 23]
//         age = user[1];

//     console.log(age);
// }

// Copy of array

// let users = [
//     [`Anna`, 23], // [`Anna`, 23]
//     [`Bogdan`, 100],
//     [`Olesya`, 50, [`cat`, `dog`]],
//     `Katya`
// ];

// let usersCopied = [];

// for(let i=0; i<users.length; i++){
//     let user = users[i]; // [`Anna`, 23]

//     if(Array.isArray(user)){
//         let innerArray = [];
//         for(let j=0; j<user.length; j++){ // [`Anna`, 23]
//             innerArray.push(user[j]); // `Anna`
//         }
//         // [`Anna`, 23]
//         usersCopied.push(innerArray);
//     } else{
//         usersCopied.push(user);
//     }

// }

// usersCopied[2][2][0] = `Artem`;

// console.log(users);
// console.log(usersCopied);

// Array.isArray()

// let users = [
//     [`Anna`, 23],
//     [`Bogdan`, 100],
//     [`Olesya`, 50, [`cat`, `dog`]],
//     `Katya`
// ];

// let copiedUsers = JSON.parse(JSON.stringify(users));

// let decodeUsers = JSON.stringify(users);
// let encodeUsers = JSON.parse(decodeUsers);

// console.log(decodeUsers);
// console.log(encodeUsers);

// copiedUsers[2][2][0] = `Artem`;

// console.log(users);
// console.log(copiedUsers);

// Chess
// Function