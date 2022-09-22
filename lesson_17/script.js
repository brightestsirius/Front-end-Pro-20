// get/set

// class User{
//     constructor(obj){
//         Object.assign(this, obj);
//     }

//     // getCountry(){
//     //     return this.country ? this.country : `Ukraine`;
//     // }

//     // setCountry(country, city){
//     //     this.country = `${country} - ${city}`;
//     // }

//     get country(){
//         return this.countryValue ? this.countryValue : `Ukraine`;
//     }

//     set country(arr){
//         this.countryValue = `${arr[0]} - ${arr[1]}`;
//     }

//     get age(){
//         return new Date().getFullYear() - this.yearOfBirth;
//     }

//     // getInfo(){
//     //     return `My name is ${this.name}. I'm from ${this.getCountry()}.`;
//     // }
// }

// const James = new User({name: `James`, yearOfBirth: 1990});
// console.log(James);

// console.log(James.name); // James
// James.name = `Anna`;

// console.log(James.country);
// James.country = [`Poland`, `Katowice`];

// console.log(James.age);

// console.log(James.getCountry());
// console.log(James.getInfo());

// James.setCountry(`Poland`, `Katowice`);
// console.log(James.getCountry());

// static methods

// class User{
//     constructor(obj){
//         Object.assign(this, obj);
//     }

//     static sayHi(){
//         return `Hi!`;
//     }

//     sayHi(){
//         return `Hi, ${this.name}!`;
//     }
// }

// let James = new User({name: `James`});

// console.log( User.sayHi() );
// console.log( James.sayHi() );

// class myMath{
//     static myPI(){
//         return 3.14;
//     }
// }

// console.log(myMath.myPI());

// class myDate{
//     static getMonthNames(){
//         return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
//     }

//     static getCurrentMonthName(){
//         return myDate.getMonthNames()[new Date().getMonth()];
//     }
// }

// console.log( myDate.getMonthNames() );
// console.log( myDate.getCurrentMonthName() );

// 📘 Міксини – https://uk.javascript.info/mixins
// 📘 Приватні та захищені властивості та методи – https://uk.javascript.info/private-protected-properties-methods

// const Father = {
//     fatherMethod(){
//         return `${this.name} has fatherMethod!`;
//     }
// }

// const Mother = {
//     motherMethod(){
//         return `${this.name} has motherMethod!`;
//     }
// }

// class Child{
//     constructor(obj){
//         Object.assign(this, obj);
//     }

//     childMethod(){
//         return `${this.name} has childMethod!`;
//     };
// }

// let MotherFather = Object.assign({}, Mother, Father);
// console.log(MotherFather);

// Object.assign(Child.prototype, MotherFather);
// console.log( Child.prototype );

// let ChildJames = new Child({name: `ChildJames`});
// console.log(ChildJames.fatherMethod());
// console.log(ChildJames.motherMethod());
// console.log(ChildJames.childMethod());

// definedProperty
// const user = {
//     name: `James`,
//     age: 30
// }

// Object.defineProperty(user, `name`, {
//     configurable: false,
//     writable: false,
//     value: `Taras`,
//     enumerable: false
// })

// user.name = `Anna`;
// // delete user.name;

// console.log(user);

// for(let key in user){
//     console.log(key, user[key]);
// }

// let arr = [10,20,30];
// arr.dog = `Patron`;

// Object.defineProperty(arr, `dog`, {
//     enumerable: false
// })

// console.log(arr);

// for(let key in arr){
//     console.log(arr[key]);
// }

// const user = {
//     name: `Igor`
// };

// Object.defineProperty(user, `name`, {
//     value: `James`,
//     enumerable: true,
//     writable: true,
//     configurable: false
// });

// user.name = `Anna`;
// delete user.name;

// console.log(user);

// class User{
//     constructor(obj){
//         Object.assign(this, obj);

//         for(let key in this){
//             Object.defineProperty(this, key, {
//                 writable: false,
//                 configurable: false
//             })
//         }
//     }
// }

// let James = new User({name: `James`, age: 30});
// console.log(James);

// delete James.age;
// James.name = `Anna`;

// class Parent{
//     static getCountry(){
//         return `Ukraine`;
//     }
// }

// class Child extends Parent{
//     constructor(){
//         super();
//     }
// }

// console.log(Child.getCountry());

// const user = {};

// Object.defineProperties(user, {
//     name: {
//         value: `James`,
//         enumerable: true
//     },
//     age: {
//         value: 30
//     }
// });

// console.log(user);

// Object.defineProperty(user, `city`, {
//     value: undefined,
//     writable: true
// })

// user.city = `Kiev`;

// Object.defineProperty(user, `country`, {
//     get(){
//         return this.countryValue ? this.countryValue : `Ukraine`;
//     },
//     set(value){
//         this.countryValue = value;
//     }
// });

// console.log(user);
// console.log( user.country );
// user.country = `Poland`;
// console.log( user.country );

// let user = {
//     name: `James`
// }

// Object.defineProperty(user, `name`, {
//     writable: false,
//     configurable: false
// });

// Object.defineProperty(user, `country`, {
//     get(){
//         return `Ukraine`;
//     }
// })

// console.log(user);
// console.log( Object.getOwnPropertyDescriptor(user, `name`) );
// console.log( Object.getOwnPropertyDescriptor(user, `country`) );

// const arr = [10,20,30];
// arr[0] += 1;

// Object.defineProperty(arr, 0, {
//     writable: false
// })

// arr[0] += 1;
// console.log(arr);

// Destructuring assignment
// const colors = [`red`, `green`, `blue`];

// // let red = colors[0];
// // let green = colors[1];
// // let blue = colors[2];

// let [first,,second] = colors;

// const colors = [`red`, undefined, `blue`];

// let [red, green=`green`, blue] = colors;

// console.log(green);

// const colors = [`red`, [`cat`, `dog`, [`lion`, `parrot`]]];

// // let [red, [, dog, [,parrot]]] = colors;
// let [, [,,[,parrot]]] = colors;
// let parrot2 = colors[1][2][1];

// // console.log(red);
// // console.log(dog);
// console.log(parrot);
// console.log(parrot2);

// console.log(first);
// console.log(second);

// const user = {
//     animals: [`cat`, `dog`],
//     wife: {
//         name: `Wife`,
//         age: 80
//     },
//     children: [
//         {
//             name: `Child 1`,
//             age: 3
//         },
//         {
//             name: `Child 2`,
//             age: 4
//         }
//     ],
//     name: `James`,
//     age: 60
// }

// const usersChildren = ( {children}={} ) => {
//     console.log(children);
// }

// usersChildren(user);
// usersChildren();

// const getFirstUserChild = ( {children:[{name:firstChildName}={}]=[]}={} ) => {
//     //let firstChild = Array.isArray(user.children) ? user.children[0] : undefined;
//     console.log(firstChildName);
// }

// getFirstUserChild(user);
// getFirstUserChild({name: `Anna`});
// getFirstUserChild();

// const user = {};

// Object.defineProperty(user, `country`, {
//     get(){
//         return this.userCountryCity ? this.userCountryCity : `Ukraine – Kharkiv.`
//     },
//     set([country, city]){
//         this.userCountryCity = `${country} – ${city}.`;
//     }
// });

// console.log(user.country);
// user.country = [`Poland`, `Warsaw`];
// console.log(user.country);

// let {
//         name:JamesName, 
//         age:JamesAge=30, 
//         country=`Ukraine`, 
//         animals:JamesAnimals,
//         animals:[, JamesDog],
//         wife:JamesWife,
//         wife:{name:JamesWifeName},
//         children:[,{name:JamesSecondChild}]
//     } = user;

// console.log(JamesName);
// console.log(JamesAge);
// console.log(country);
// console.log(JamesAnimals);
// console.log(JamesCat);
// console.log(JamesDog);
// console.log(JamesWife);
// console.log(JamesWifeName);
// console.log(JamesSecondChild);

// call/apply/bind

// let James = {
//     name: `James`,
//     age: 30,
//     getAge(sign=`.`, city=`Lviv`){
//         // this = Anna
//         return `Hello, ${this.name}. You are ${this.age} years old${sign} I'm from ${city}.`;
//     }
// };

// let Anna = {
//     name: `Anna`,
//     age: 20
// }

// console.log( James.getAge(`!!!`, `Kyiv`) );
// console.log( James.getAge.call(Anna, `???`, `Odesa`) );
// console.log( James.getAge.apply(Anna, [`???`, `Odesa`]) );

// console.log( James.getAge() );
// console.log( James.getAge.call(Anna) );
// console.log( James.getAge.apply(Anna) );

// const getAgeAnna = James.getAge.bind(Anna);
// console.log( getAgeAnna() );

// console.log( James.getAge.bind(Anna)() );

// const getAgeAnna = James.getAge.bind(Anna, `...`, `Mykolaiv`);
// const getAgeAnna = James.getAge.bind(Anna, `...`);
// console.log( getAgeAnna(`Berdychiv`) );

class User{
    constructor(obj){
        Object.assign(this, obj);
    }

    getAge(){
        //this => James;
        console.log(this);
        console.log(`I'm ${this.age} years old.`);
    }

    renderBtn(){
        // this => James

        let btn = document.createElement(`button`);
        btn.innerHTML = `Get age`;
        btn.onclick = this.getAge.bind(this);

        document.querySelector(`body`).append(btn);
    }
}

let James = new User({name: `James`, age: 30});
console.log(James);

James.renderBtn();