// class Coffee{
//     constructor(obj){
//         Object.assign(this, obj);
//     }

//     static getCoffee(){
//         console.log(this);
//         this.cupRender();
//     }

//     cupRender(){}
// }

// let Late = new Coffee({
//     coffee: 20,
//     milk: 80
// });

// Coffee.getCoffee.call(Late);

// DOM

// document.write(`<h2>Hello, world!</h2>`);
// console.dir(document);

// setTimeout(() => document.location.href = `https://google.com`, 2000);
// setTimeout(() => window.open(`https://google.com`, `_blank`), 2000);

// document
// redirect
// querySelector

// let heading = document.querySelector(`h1`);
// console.dir(heading); // <h1>Hello</h1>

// heading.innerHTML += `...`;

// const div = document.querySelector(`div`);
// div.innerHTML += `<h3>New text</h3>`;

// const heading = document.querySelector(`#fourth`); // null
// console.log(heading);

// if(heading){
//     heading.innerHTML = `Hello`;
// }

// const headings = document.querySelectorAll(`h1`); // NodeList
// console.log(headings);

// headings.forEach((item, index) => item.innerHTML += ` ${index+1}`);

// const paragraphs = document.querySelectorAll(`.paragraph`);
// paragraphs.forEach((item, index) => item.innerHTML += `!!! – ${index}`);

// const lastLiLastUl = document.querySelector(`ul:last-of-type li:last-of-type`); // null
// lastLiLastUl.innerHTML += `!!!!!`;

// const example = document.querySelector(`#example`);
// console.dir(example);
// console.log(example.style.backgroundColor);

// example.style.backgroundColor = `pink`;
// example.style.color = `black`;
// example.style.borderColor = `indigo`;

// const squares = document.querySelectorAll(`.square`);

// const getRandomIntInclusive = (min=0, max=255) => {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }

// const getRandomColor = () => {
//     let colors = [];
//     for(let i=0; i<=2; i++){
//         colors.push(getRandomIntInclusive());
//     }

//     return `rgb(${colors.join(`,`)})`;
// }

// squares.forEach(square => {
//     setInterval(() => square.style.backgroundColor = getRandomColor(), 500);
// });

// const square = document.querySelector(`#square`);

// square.style.left = 0;
// square.style.top = 0;

// const STEP = 50;

// const squareMoving = setInterval(() => {
//     //console.log(square.style.left);
//     // "" => "100px";
//     // "100px" => 100+100+px => "200px"
//     // "200px" => 200+100+px => "300px"

//     square.style.left = square.style.left===`0px` ? `${STEP}px` : parseInt(square.style.left)+STEP+`px`;
//     square.style.top = square.style.top===`0px` ? `${STEP}px` : parseInt(square.style.top)+STEP+`px`;
    
//     let squareRightCoordinate = square.offsetLeft+square.offsetWidth;
//     let squareTopCoordinate = square.offsetTop+square.offsetHeight;

//     let bodyWidth = document.body.offsetWidth;
//     let bodyHeight = document.body.offsetHeight;

//     //console.log(squareRightCoordinate, bodyWidth);

//     if(squareRightCoordinate > bodyWidth){
//         console.log(`out of body!`);
//         clearInterval(squareMoving);

//         square.style.left = parseInt(square.style.left)-STEP*2+`px`;
//     } else if(squareTopCoordinate>bodyHeight){
//         console.log(`out of body!`);
//         clearInterval(squareMoving);

//         square.style.top = parseInt(square.style.top)-STEP*2+`px`;
//     }
// }, 1000);

const heading = document.querySelector(`h1`);
console.dir(heading);

// heading.classList.add(`third`);
// console.log(heading.classList.contains(`third`)); // true

// setTimeout(() => {
//     heading.classList.remove(`third`);
//     console.log(heading.classList.contains(`third`)); // false
// }, 1000);

// console.log(heading.className);

setInterval(() => {
    // if(heading.classList.contains(`third`)){
    //     heading.classList.remove(`third`);
    // } else{
    //     heading.classList.add(`third`);
    // }

    heading.classList.toggle(`third`);
}, 1000);

// // heading.className = heading.className.replace(`first `,``);

// let headingClasses = heading.className.split(` `);
// console.log(headingClasses);
// headingClasses.shift();
// console.log(headingClasses);

// heading.className = headingClasses.join(``);

// console.log(heading.className);

// html
// css
// class

// attributes
// dataset
// createElement
// remove
// events

// click events
//     onclick
//     ondblclick
//     oncontextmenu
//     onmousedown
//     onmouseup

// addEventListener/removeEventListener

// mouse events
//     onmouseover
//     onmouseout
//     onmouseenter
//     onmouseleave
//     onmousemove

// keyboard events
//     onkeypress
//     onkeydown
//     onkeyup

// Bubbling and capturing

// stopPropagation

// preventDeafault()