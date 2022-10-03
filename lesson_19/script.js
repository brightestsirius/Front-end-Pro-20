// attributes
// dataset

// const block = document.querySelector(`#block`);
// console.dir(block);

// block.setAttribute(`name`, `cat`);

// console.log(block.getAttribute(`id`));
// console.log(block.id);

// block.setAttribute(`data-sale`, true);
// block.setAttribute(`data-dog`, `Patron`);

// block.dataset.id = 1234;

// console.log(block.dataset);
// console.log(block.dataset.dog);

// createElement

// const block = document.querySelector(`#block`);
// block.innerHTML = `<h1>Hello, world</h1>`;

// document.body.innerHTML = `<h1>Hello, world</h1>` + document.body.innerHTML;

// const block = document.querySelector(`#block`);
// block.innerHTML = `<button id="blockBtn">Click me</button>`;

// const blockBtn = document.querySelector(`#blockBtn`);
// blockBtn.innerHTML = `Hello, click!`;

// let btn = document.createElement(`button`); // Object
// btn.innerHTML = `Click me`;

// let btn_2 = btn.cloneNode(true);

// console.dir(btn);

// block.prepend(btn);
// block.append(btn_2);

// remove

// const block = document.querySelector(`#block`);

// setTimeout(() => block.remove(), 1000);
// setTimeout(() => document.body.prepend(block), 2000);

// events

// const block_1 = document.querySelector(`#block_1`);
// const block_2 = document.querySelector(`#block_2`);
// const block_3 = document.querySelector(`#block_3`);

// function blockClick(text){
//     console.log(text);
// }

// block_1.onclick = () => blockClick(`block_1`);

// block_2.onclick = function(){
//     blockClick(`block_2`);
// };

// block_3.onclick = () => blockClick(`block_3`);

// const block = document.querySelector(`#block`);
// const circle = document.querySelector(`#circle`);

// function elementBg(e, color){
//     console.log(e);

//     e.target.style.background = color;

// }

// block.onclick = function(e){
//     elementBg(e, `green`);
// };

// circle.onclick = e => elementBg(e, `blue`);

// const block = document.querySelector(`#block`);

// const firstFunc = () => console.log(`first`);
// const secondFunc = () => console.log(`second`);

// block.onclick = () => {
//     firstFunc();
//     secondFunc();
// }

// block.addEventListener(`click`, firstFunc);
// block.addEventListener(`click`, secondFunc);

// block.addEventListener(`click`, function(e){
//     console.log(`third`);
//     e.target.classList.add(`active`)
// });

// block.addEventListener(`click`, () => console.log(`fourth`));

// const block = document.querySelector(`#block`);

// const onBlockClick = () => console.log(`Hello!`)

// block.addEventListener(`click`, onBlockClick);

// setTimeout(() => {
//     block.removeEventListener(`click`, onBlockClick);
// }, 2000);

// const block = document.querySelector(`#block`);

// const secondFunc = () => console.log(`Hello!`);
// const defautFunc = () => console.log(`defautFunc`);
// const redirectToGoogle = () => window.open(`https://google.com`, `_blank`);

// const firstFunc = () => {
//     redirectToGoogle();

//     block.removeEventListener(`click`, firstFunc);
//     block.addEventListener(`click`, secondFunc);
// }

// block.addEventListener(`click`, firstFunc);
// block.addEventListener(`click`, defautFunc);

// const block = document.querySelector(`#block`);

// const handler = e => console.log(e.type);

// block.addEventListener(`mousedown`, handler);
// block.addEventListener(`mouseup`, handler);
// block.addEventListener(`click`, handler);
// block.addEventListener(`dblclick`, handler);
// block.addEventListener(`contextmenu`, handler);

//     onmousedown
//     onmouseup

// click events
//     onclick
//     ondblclick
//     oncontextmenu

// addEventListener/removeEventListener

// const block = document.querySelector(`#block`);

// const handler = e => console.log(e.type);

// block.addEventListener(`mouseover`, handler);
// block.addEventListener(`mouseout`, handler);

// block.addEventListener(`mouseenter`, handler);
// block.addEventListener(`mouseleave`, handler);
// block.addEventListener(`mousemove`, handler);

// mouse events
//     onmouseover
//     onmouseout
//     onmouseenter
//     onmouseleave
//     onmousemove

// const block = document.querySelector(`#block`);
// block.style.left = 0;
// block.style.top = 0;

// let x_start, y_start;

// block.addEventListener(`mousedown`, e => {
//     x_start = e.clientX;
//     y_start = e.clientY;

//     console.log(e.type, x_start, y_start);

//     document.addEventListener(`mouseup`, mouseUpFunc);
//     block.addEventListener(`mousemove`, mouseMoveFunc);
// })

// const mouseMoveFunc = e => {
//     let x_end = e.clientX;
//     let y_end = e.clientY;

//     let x_dif = x_end-x_start; // left
//     let y_dif = y_end-y_start; // top

//     x_start = x_end;
//     y_start = y_end;

//     block.style.left = parseInt(block.style.left) + x_dif + `px`;
//     block.style.top = parseInt(block.style.top) + y_dif + `px`;

//     console.log(e.type, x_end, y_end);
// }

// const mouseUpFunc = e => {
//     let x_end = e.clientX;
//     let y_end = e.clientY;

//     let x_dif = x_end-x_start; // left
//     let y_dif = y_end-y_start; // top

//     block.style.left = parseInt(block.style.left) + x_dif + `px`;
//     block.style.top = parseInt(block.style.top) + y_dif + `px`;

//     console.log(e.type, x_end, y_end);

//     document.removeEventListener(`mouseup`, mouseUpFunc);
//     block.removeEventListener(`mousemove`, mouseMoveFunc);
// }

// keyboard events
//     keypress
//     keydown
//     keyup

// document.addEventListener(`keypress`, e => console.log(e));
// document.addEventListener(`keydown`, e => console.log(e));
// document.addEventListener(`keyup`, e => console.log(e));

// right 39
// bottom: 40

const block = document.querySelector(`#block`);
block.style.left = 0;
block.style.top = 0;

const STEP = 10;

const movingRight = () => {
    block.style.left = parseInt(block.style.left) + STEP + `px`;
}

const movingBottom = () => {
    block.style.top = parseInt(block.style.top) + STEP + `px`;
}

const ACTIONS = {
    39: movingRight,
    40: movingBottom
}

document.addEventListener(`keydown`, e => ACTIONS[e.keyCode] && ACTIONS[e.keyCode]());

// Bubbling and capturing

// stopPropagation

// preventDeafault()