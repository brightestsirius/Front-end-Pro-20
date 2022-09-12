// Object.assign()

// let arr_1 = [10,20,30];
// let arr_2 = [40,50,60];
// let arr_3 = [70,80,90];

// let result = arr_1.concat(arr_2, arr_3);

// console.log(arr_1);
// console.log(result);

// let obj_1 = {
//     a: `a`
// };

// let obj_2 = {
//     a: `a2`,
//     b: `b`
// };

// let obj_3 = {
//     b: `b3`,
//     c: `c`
// };

// let result = {};

// for(let key in obj_1){
//     result[key] = obj_1[key];
// }

// for(let key in obj_2){
//     if(!result[key])
//         result[key] = obj_2[key];
// }

// for(let key in obj_3){
//     if(!result[key])
//         result[key] = obj_3[key];
// }

// const concatObjects = (...args) => {
//     // console.log(args);
//     return args
//         .reduce((result, obj)=>{
//             for(let key in obj){
//                 // if(!result[key])
//                     result[key] = obj[key];
//             }
//             return result;
//         }, {});
// }

// let result = concatObjects(obj_1, obj_2, obj_3);

// let result = Object.assign({}, obj_1, obj_2, obj_3);

// console.log(obj_1);
// console.log(result);

// console.log(result);

// let obj = {
//     a: `a`,
//     b: {
//         c: `c`,
//         d: `d`
//     },
//     e: [10,20,30]
// }

// for(let key in obj){
//     let type = typeof obj[key]; // string, object, object
//     type = Array.isArray(obj[key]) ? `array` : type;
//     console.log(type);
// }

// let user = {
//     name: `Jack`,
//     surname: `Sparrow`,
//     age: 100,
//     children: [`Anna`, `Tanya`]
// }

// Object
//     .entries(user)
//     .forEach(item => console.log(item[1]));

// let arrayOfKeys = Object.keys(user); // ['name', 'surname', 'age', 'children']
// console.log(arrayOfKeys);

// arrayOfKeys.forEach(item => console.log(user[item]));

// Object
//     .keys(user) // ['name', 'surname', 'age', 'children']
//     .forEach(item => console.log(user[item]));

// console.log(`----`);

// for(let key in user){
//     console.log(user[key]);
// }

// let arr = [10,20,30];

// for(let i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }

// console.log(arr);

// for(let i in arr){
//     console.log(i);
//     if(i==1) break;
// }

// for(let key of arr){
//     console.log(key);
// }

// this

// function getAge(user){
//     let currentYear = new Date().getFullYear();
//     return currentYear - user.yearOfBirth;
// }

// let user = {
//     name: `Jack`,
//     surname: `Sparrow`,
//     yearOfBirth: 1990,
//     children: [`Anna`, `Tanya`],
//     getFullname(){
//         return `Hello, Jack Sparrow!`
//     },
//     getAge
// }

// console.log(user);
// console.log(user.name);
// console.log(user.getFullname());

// console.log(getAge(user));

// console.log(user.getAge());

// let user = {
//     surname: `Sheva`,
//     getSurname(){
//         console.log(this.surname);
//     }
// }

// user.getSurname();

// function getAge(){
//     // this
//     console.log(this, this.yearOfBirth);
//     return new Date().getFullYear() - this.yearOfBirth;
// }

// let Anna = {
//     yearOfBirth: 1986,
//     getAge
// }

// let Jack = {
//     yearOfBirth: 1975,
//     getAge
// }

// console.log( Anna.getAge() );
// console.log( Jack.getAge() );

// console.log( getAge() ); // window

// let cat = {
//     type: `cat`,
//     getInfo: getInfoCat
// }

// let murka = {
//     type: `murka`,
//     getInfo: getInfoCat
// }

// let Jack = {
//     name: `Jack`,
//     getInfo: getInfoHuman
// }

// function getInfoHuman(){
//     return `Hello, human ${this.name}.`;
// }

// function getInfoCat(){
//     return `Hi, ${this.type}.`;
// }

// console.log(cat.getInfo());
// console.log(murka.getInfo());
// console.log(Jack.getInfo());

// getInfoCat() // window

// let arr = [10,20]; // 2
// arr[100] = 100; // 101

// let arr = [10,20];

// let user = {
//     name: `Jack`,
// }

// console.log(user);
// console.log(arr);

// let x = new Number(10);
// console.log(x);

// let str = new String(`hello`);
// console.log(str);

// let Animal = {
//     getVoice(){
//         // this = cat
//         return `Hello ${this.name}, I'm animal! Auuuf.`
//     },
//     // prototype: Object
// }

// let cat = Object.create(Animal); // {}
// cat.name = `Patron`;

// console.log(cat);
// console.log(cat.getVoice());

// let dog = Object.create(Animal);
// dog.name = `Pushok`;

// console.log(dog);
// console.log(dog.getVoice());

// {
//     prototype: Animal{
//         getVoice,
//         prototype: Object
//     }
// }

// let cat = {};
// {
    prototype: Object
// }

// prototype
// Object.create

// let Parent = {
//     name: `Taras`,
//     surname: `Shevchenko`,
//     getFullName(){
//         // this = Lesya
//         return `Hello, I'm ${this.name} ${this.surname}.`
//     }
// }

// console.log(Parent);
// console.log(Parent.getFullName());

// let Lesya = Object.create(Parent);
// Lesya.name = `Lesya`;
// Lesya.surname = `Ukrainka`;
// Lesya.getFullName = function(){
//     return `Heloooooo! I'm ${this.name}.`
// }

// let Ivanko = Object.create(Parent);
// Ivanko.name = `Ivanko`;

// let IvankoChild = Object.create(Ivanko);
// IvankoChild.name = `IvankoChild`;

// Lesya = {
//     name: `Lesya`,
//     surname: `Ukrainka`
// } // {} => Object


// let Lesya = {
//     name: `Lesya`,
//     surname: `Ukrainka`
// }

// Lesya = Object.create(Parent); // {}

// console.log(Lesya);
// console.log(Lesya.getFullName());

// console.log(Ivanko);
// console.log(Ivanko.getFullName());

// console.log(IvankoChild);
// console.log(IvankoChild.getFullName());

// console.log(Parent.getFullName());

// function-constructor
// class

let Lion = {
    getInfo(){
        return `Type: ${this.type}, Name: ${this.name}.`
    }
}

// let cat = {
//     type: `cat`,
//     name: `Vailyi`
// }

// let CatLion = Object.create(Lion); // {} => Prototype: Lion;
// CatLion.type = cat.type;
// CatLion.name = cat.name;

// for(let key in cat){
//     CatLion[key] = cat[key];
// }

// Object.assign(CatLion, cat);

// console.log(CatLion.getInfo());

let cats = [
    {type: `cat_1`, name: `Cat 1`},
    {type: `cat_2`, name: `Cat 2`},
    {type: `cat_3`, name: `Cat 3`}
]

let catsLion = cats
    .map(item => {
        // item = {type: `cat_1`, name: `Cat 1`}
        let catLion = Object.create(Lion); // {} => Prototype: Lion;
        Object.assign(catLion, item); // {type: `cat_1`, name: `Cat 1`, Prototype: Lion}

        return catLion;
    });

console.log(catsLion);

catsLion.forEach(item => console.log( item.getInfo() ));