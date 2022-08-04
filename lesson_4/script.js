// logic string

// let userName = `Oleg`;
// let userDateOfBirth = 1990;

// let str = `Hello ${userName}! Age ${new Date().getFullYear() - userDateOfBirth} years old.`;
// console.log(str);

// indexOf

// let str = `hello`;
// console.log(str.indexOf(`@`)); // -1

// let email = prompt(`Enter email`);
// console.log(email);

// Boolean

// Types to Boolean

// null, undefined, 0, '' => false
// ' ', 1, -1 => true

// let email = prompt(`Enter email`); // Cancel => null
// console.log(email);

// if(email){
//     console.log(`in if`);
// } else{
//     console.log(`in else`);
// }

// if/else
// >=; ===; !==;

// value < 0
//     console.log(`less then 0`)
// value > 0
//     console.log(`more then 0`)
// value === 0
//     console.log(`equals 0`)

// let userValue = prompt(`Enter value`); // null

// if(userValue === null){
//     console.log(`Ok, no!`);

// } else if (userValue === ''){
//     console.log(`Ok, no!`);

// } else if(userValue<0){
//     console.log(`less then 0`);
// } else if(userValue > 0){
//     console.log(`more then 0`);
// } else if(userValue === 0){
//     console.log(`equals 0`);
// }

// let userValue = -10;

// if(userValue>0 && userValue>5 && userValue>10){
//     console.log(`ok`);
// }

// let userValue = -1;

// if(userValue<0 || userValue === 10){
//     console.log(`ok`);
// }

// true && true && true => true

// true && false && true => false

// false && true && true => false

// true || true || true => true
// true || false || true => true
// false || true || true => true
// false || false || false => false

// let email = prompt(`Enter email`); // Cancel, ``

// if(email === null || email === ``){
//     console.log(`Not valid email`);
// } else{
//     console.log(`Valid email`);
// }

// let email;
// console.log(email);

// let userName = `Oleg`;
// console.log( userName[100] ); // undefined

// null, undefined, 0
// let userValue = prompt(); // "123hello"
// userValue = "";

// let userValue = 10;

// if( (userValue>0 && userValue===5) || (userValue>0 && userValue>=10) ){
//     console.log(`in if`);
// }

// let value = 10;
// let userValue = +`10`;

// > true
// < false

// >= true
// <= false

// if(value == userValue){

// }

// &&, ||

// let email = prompt(`Enter email`);

// if(email === null || email === `` || !email.includes(`@`) || email.startsWith(`@`) || email.endsWith(`@`)){
//     console.log(`Not valid email`);
// } else{

//     email = email.replaceAll(` `,``).toLowerCase();
//     console.log(`Valid email: ${email}`);
// }

// includes @, not start with @, not end with @

// let word = prompt(`Enter word`, `hello`); // null

// if(word !== null && word.includes(`@`) && !word.startsWith("@") && !word.endsWith("@") && !word.includes(`.`)){
//     word = word.replaceAll(` `,``).toLowerCase();
    
//     console.log(word);
// }

// !=
// !==

// '10' != 10 => false
// '10' == 10 => true

// `10` === 10 => false
// `10` !== 10 => true

// !true => false 

// !'' => TextTrackCue

// includes, startsWith, endsWith
// isNaN

// let value = +`123hello`; // NaN;
// console.log(value);

// if( isNaN(value) ){
//     console.log(`yours string is not a number`);
// }

// let applePrice = 3;
// let appleCount = +prompt(`Enter count of apples`); // "3 apples" => NaN

// if( !isNaN(appleCount) ){
//     let result = applePrice*appleCount;
//     console.log(result); // NaN
// }

// confirm
// let userChoice = prompt(`Would you like to work with us?`);
// console.log(userChoice);

// if(userChoice !== null){
//     console.log(`Ok, let's go!`);
// }

// let userChoice = confirm(`Would you like to work with us?`); // true/false
// console.log(userChoice);

// if(userChoice){
//     console.log(`Ok, let's go!`);
// }

let userChoice = confirm(`Would you like to work with us?`);

if(userChoice){
    let appleChoise = confirm(`Would you like apples?`);

    if(appleChoise){
        let applesCount = +prompt(`Enter count of apples`);

        if(!isNaN(applesCount)){
            let applePrice = 10;
            let appleFinalPrice = applePrice*applesCount;

            console.log(`Final proce for ${applesCount} = $${appleFinalPrice}.`)
        }
    }
}

// switch/case

// while
// do/while
// for
// break; continue