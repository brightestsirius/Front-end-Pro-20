// Methods for exist types

// Array.prototype.myPush = function(...args){
//     // args => [50,60];
//     // this => arr

//     for(let i=0; i<args.length; i++){
//         this[this.length] = args[i]+`!`;
//     }

//     return this.length;
// }

// let arr = [10,20,30];

// console.log(arr.myPush(50,60));
// console.log(arr);

// methods and functions

// function foo(){

// }

// const foo = () => {}

// let user = {
//     getCountry: function(){},
//     getCity(){}
// }

// this in arrow functions

// function getCountry(){
//     console.log(`I'm from ${this.country}.`);
// }

// const getCountry = () => {
//     console.log(this); // window
//     console.log(`I'm from ${this.country}.`);
// }

// let user = {
//     name: `Jack`,
//     country: `Ukraine`,
//     getCountry
// }

// user.getCountry();

// let user = {
//     name: `Jack`,
//     animals: [`cat`, `dog`, `lion`],
//     getAnimals(){
//         console.log(this); // user

//         this.animals
//             .forEach(animal => console.log(`${this.name} has ${animal}.`));

//         this.animals
//             .forEach(
//                 function(animal){
//                     console.log(this); // window
//                     console.log(`${this.name} has ${animal}.`);
//                 }
//             );
//     }
// }

// user.getAnimals();

// Function-constructor

// const Person = {
//     country: `Ukraine`,
//     getAge(){
//         return `${this.name} is ${this.age} years old.`
//     }
// }

// const Jack = Object.create(Person);
// Jack.name = `Jack`;
// Jack.age = 30;

// console.log(Jack);
// console.log(Jack.getAge());

// const Anna = Object.create(Person);
// Anna.name = `Anna`;
// Anna.age = 70;

// console.log(Anna);
// console.log(Anna.getAge());

// function Person(name, surname, age, city=`Kyiv`){
//     // this = {} = Jack
//     this.fullname = `${name} ${surname}`; // fullname: `Jack Shevchenko`
//     this.age = age; // 30
//     this.city = city;
// }

// Person.prototype.getInfo = function(){
//     return `Hello, my name is ${this.fullname}. I'm form ${this.country}.`;
// }
// Person.prototype.married = true;
// Person.prototype.country = `Ukraine`;

// let Jack = new Person(`Jack`, `Shevchenko`, 30);  // {}.Person(`Jack`, `Shevchenko`, 30);
// console.log(Jack);
// console.log(Jack.getInfo());

// let Anna = new Person(`Anna`, `First`, 18, `Odesa`);
// console.log(Anna);
// console.log(Anna.getInfo());

// Class

// class Person{
//     constructor(name, surname, age, city=`Kyiv`){
//         this.fullname = `${name} ${surname}`; // fullname: `Jack Shevchenko`
//         this.age = age; // 30
//         this.city = city;
//     }

//     getInfo(){
//         return `Hello, my name is ${this.fullname}. I'm form ${this.country}.`;
//     }

//     getCity(){
//         return `I'm form ${this.city}.`
//     }

//     getCountry(){
//         return `Ukraine`;
//     }

//     getSurname(){
//         return `Shevchenko`;
//     }
// }

// let Jack = new Person(`Jack`, `Shevchenko`, 30); // {}.Person.constructor(`Jack`, `Shevchenko`, 30)

// console.log(Jack);
// console.log( Jack.getCountry() );
// console.log( Jack.getSurname() );

// let Anna = new Person(`Anna`, `Ukrainka`, 18);
// console.log(Anna);
// console.log(Anna.getCountry());

// class Bicycle {
//     constructor(){
//         this.gear = 5;
//     }

//     braking(){
//         return `braking`;
//     }
// }

// let sportsBicycle = new Bicycle();

// console.log(sportsBicycle);
// console.log(sportsBicycle.gear);
// console.log(sportsBicycle.braking());

// Plane => Aerliner;

class Plane{
    constructor(name, number){
        this.name = name;
        this.number = number;
        this.title = `${this.name} ${this.number}`;
    }

    takeoff(){
        return `${this.title} takeoff!`
    }

    landing(){
        return `${this.title} landing!`
    }
}

class Aerliner extends Plane{
    constructor(name, number, maxPassangers){
        super(name, number); // Plane.constructor();
        this.maxPassangers = maxPassangers;
    }

    getMaxPassangers(){
        return `Max passangers for ${this.title} = ${this.maxPassangers}.`
    }
}

class Aerobatics extends Plane{
    constructor(name, number, maxFuelTime){
        super(name, number); // Plane.constructor();
        this.maxFuelTime = maxFuelTime;
    }

    getMaxFuelTime(){
        return `Max fuel time for ${this.title} = ${this.maxFuelTime} minutes.`
    }

    landing(){
        return `${this.title} landing of aerobatic plane!`;
    }
}

let Boeing_737 = new Aerliner(`Boeing`, 737, 300); // {}.Aerliner.constructor(`Boeing`, 737, 300)
let Extra_330 = new Aerobatics(`Extra`, 330, 3);

console.log(Boeing_737);
console.log(Boeing_737.getMaxPassangers());
console.log(Boeing_737.takeoff());
console.log(Boeing_737.landing());

console.log(Extra_330);
console.log(Extra_330.getMaxFuelTime());
console.log(Extra_330.takeoff());
console.log(Extra_330.landing());

// OOP
// SOLID