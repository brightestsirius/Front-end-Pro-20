// String to Number

// let x = 10,
//     y = +`10`; // NaN - Not a number

// let sum = x + y;  // 10 + NaN = NaN
// console.log(sum);

// console.log(x+y); // 1010
// console.log(x-y);
// console.log(x*y);
// console.log(x/y);

// let result = (x + y) / 2;
// console.log(result);

// x = x+5; // 15
// x += 5;
// x /= 5;

// x += 1;
// x++;
// ++x

// x++;

// console.log(x--); // 10
// console.log(x);

// console.log(x);
// console.log(y);
// console.log(sum);

// alert, prompt

// let userName = +prompt(`Enter your name`);
// console.log(userName, typeof userName);

// let userName = prompt(`Enter your name`)
//     .trim();

// console.log(userName);

// let str = `   jack sparrow. i love  `.trim();
// console.log(str);

// let userName = prompt(`Enter your name`, ` Abba   Viktoria `)
//     .trim()
//     .replaceAll(`  `, ` `);

// console.log(userName);

// let userEmail = prompt(`Enter email`, ` anna @ gma   il.com  `)
//     .replaceAll(` `, ``);

// console.log(userEmail);

// String methods
// trim()
// replace/replaceAll

// let str = new String(`manGO`);
// console.log(str);
// console.log(str.length);

// let indexOfLastLetter = str.length-1; // 4
// console.log(indexOfLastLetter);

// console.log( str[0] );
// console.log( str[2] );
// console.log( str[str.length-1] );
// console.log( str[str.length-2] );

// str = str.toLowerCase();
// str = str.toUpperCase();

// console.log(str);

// toLowerCase/toUpperCase

// let userName = `anTON`;
// // userName = userName[0].toUpperCase() + userName.slice(1).toLowerCase();

// let firstLetter = userName[0].toUpperCase(); // A
// let afterFirstLetter = userName.slice(1).toLowerCase(); // nton

// userName = firstLetter+afterFirstLetter;

// console.log(userName);
// console.log(firstLetter);
// console.log(afterFirstLetter);

// let newUserName = userName.slice(1, -3); // TNO
// console.log(newUserName);

// slice

// let userName = prompt(`Enter name`, `  aNnA bogDAna  `).trim(` `, ``); // "aNnaA bogDAna"

// userName = userName[0].toUpperCase() + userName.slice(1).toLowerCase();

// console.log(userName);

// let userName = "aNnA bogDAna serGiy";
// console.log(userName);

// userName = userName[0].toUpperCase() + userName.slice(1).toLowerCase();
// console.log(userName);

// userName = userName.slice(0,5) + userName[5].toUpperCase() + userName.slice(6);
// console.log(userName);

// indexOf

// let str = `asd fghd`; // d

// console.log( str.indexOf(` `) ); // 3

// let userName = `championship uniON`;

// userName = userName[0].toUpperCase() + userName.slice(1).toLowerCase();
// console.log(userName);

// let indexOfWhitespace = userName.indexOf(` `); // 4
// console.log(indexOfWhitespace);

// let nextWord = userName[indexOfWhitespace+1].toUpperCase();
// console.log(nextWord); // b

// userName = userName.slice(0, indexOfWhitespace+1) + nextWord + userName.slice(indexOfWhitespace+2);
// console.log(userName);

// Boolean
// if/else
// >=; ===;
// confirm
// switch/case
// break; continue