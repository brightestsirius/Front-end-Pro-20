// extends

// let James = {
//     name: `James`,
//     surname: `Andres`,
//     age: 3,
//     animals: [`dog`, `parrot`],
//     getAnimals(){
//         console.log(this); // James
//         this.animals
//             .forEach(
//                 (animal) => {
//                     console.log(`${this.name} has ${animal}.`);
//                 }
//             )
//     }
// };

// James.getAnimals();

// class Human{
//     constructor(name, surname, age){
//         this.fullname = `${name} ${surname}`;
//         this.age = age;
//         this.country = `Ukraine`;
//     }
// }

// class Human{
//     constructor(obj){
//         // this = {}
       
//         // for(let key in obj){
//         //     this[key] = obj[key];
//         // }

//         Object.assign(this, obj);
//     }

//     getName(){
//         return `My name is ${this.name}.`;
//     }

//     getAge(){
//         return `I'm ${this.age} years old.`;
//     }

//     getFullInfo(){
//         // this = Anna
//         let info = [this.getName(), this.getAge()];
//         return info.join(` `);
//     }
// }

// let James = {
//     name: `James`,
//     surname: `Andres`,
//     age: 3,
//     animals: [`dog`, `parrot`]
// };

// James = new Human(James); // {}.Human.constructor();
// console.log(James);
// console.log(James.getName());
// console.log(James.getFullInfo());

// let Anna = {
//     name: `Anna`,
//     age: 33,
//     children: [`Katya`, `Tanya`]
// }

// Anna = new Human(Anna);
// console.log(Anna);
// console.log(Anna.getName());
// console.log(Anna.getFullInfo());

// Human => Man, Woman.

// class Human{
//     constructor(obj){
//         Object.assign(this, obj);
//     }

//     // Object-prototype of Human

//     superHuman(){
//         // if(this.boroda){
//         //     console.log(`yes!`);
//         // }
//         return `${this.name} super human!!!`
//     };

//     getBoroda(){
//         return ``;
//     };
// }

// class Man extends Human{
//     constructor(obj){
//         super(obj);
//         this.boroda = true;
//     }

//     // Object-prototype of Man

//     superMan(){
//         return `${this.name} super man.`
//     }

//     superHuman(){
//         // this = James
//         let humanFunc = super.superHuman(); // `James super human!!!`
//         return `${humanFunc} ${this.superMan()}`;
//     };
// }

// class Woman extends Human{
//     constructor(obj){
//         super(obj);
//     }

//     wonderWoman(){
//         return `${this.name} wondar woman.`;
//     }
// }

// let James = {
//     name: `James`,
//     surname: `Andres`,
//     age: 3,
//     animals: [`dog`, `parrot`]
// };

// James = new Man(James); // {}.Man.constructor(James);
// console.log(James);
// console.log(James.superMan());
// console.log(James.superHuman());

// let Anna = {
//     name: `Anna`,
//     age: 33,
//     children: [`Katya`, `Tanya`]
// }

// Anna = new Woman(Anna);
// console.log(Anna);
// console.log(Anna.wonderWoman());
// console.log(Anna.superHuman());

// class Animal{
//     constructor(obj){
//         Object.assign(this, obj);
//     }

//     getVoice(){
//         return `auuufff!`;
//     }
// }

// interface AnimalVoices{
//     getVoice,
//     agreeVoice,
//     happyVoice
// }

// interface AnimalFoods{
//     getFood,
//     agreeFood,
//     happyFood
// }

// class Cat extends Animal implements [AnimalVoices, AnimalFoods]{
//     constructor(obj){
//         super(obj);
//     }

//     getVoice(){
//         let defaultVoice = super.getVoice(); // `auuufff!`
//         return defaultVoice = ` myu-myu!`;
//     }

//     agreeVoice(){}
// }

// class Dog extends Animal implements AnimalVoices{
//     constructor(obj){
//         super(obj);
//     }

//     getVoice(){
//         return `gav-gav!`;
//     }
// }

// class Parrot extends Animal implements AnimalVoices{
//     constructor(obj){
//         super(obj);
//     }

//     getVoice(){
//         return `chirick-chirick!`;
//     }
// }

// let animals = [
//     {
//         type: `cat`,
//         name: `Tom`
//     },
//     {
//         type: `dog`,
//         name: `Patron`
//     },
//     {
//         type: `parrot`,
//         name: `Kesha`
//     },
//     {
//         type: `lion`,
//         name: `Simba`
//     }
// ];

// const ANIMALS_TYPES = {
//     cat: animal => new Cat(animal),
//     dog: animal => new Dog(animal),
//     parrot: animal => new Parrot(animal)
// }

// animals = animals
//     .map(animal => {
//         let animalType = animal.type; // lion
//         return ANIMALS_TYPES[animalType] ? ANIMALS_TYPES[animalType](animal) : new Animal(animal);
//     });

// console.log(animals);

// OOP
// SOLID

// get/set
// static