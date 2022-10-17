// let animals = [`cat`, `dog`];
// // console.log(animals);

// let storageAnimals = localStorage.getItem(`animals`); // null || [...];
// console.log(storageAnimals);

// if(storageAnimals === null){
//     localStorage.setItem(`animals`, JSON.stringify(animals));
// }

// const addAnimal = document.querySelector(`#addAnimal`);
// addAnimal.addEventListener(`change`, e => {
//     let storageAnimals = JSON.parse(localStorage.getItem(`animals`));
//     storageAnimals.push(e.target.value);
//     localStorage.setItem(`animals`, JSON.stringify(storageAnimals));
// });

// localStorage.setItem(`name`, `Oleg`);

// console.log( localStorage.getItem(`name`) );

// setTimeout(() => {
//     localStorage.setItem(`name`, `Anna`);
//     console.log( localStorage.getItem(`name`) );
// }, 2000);

// setTimeout(() => {
//     localStorage.removeItem(`name`);
//     console.log( localStorage.getItem(`name`) ); // null
// }, 3000);

// localStorage.setItem(`age`, JSON.stringify(30));
// console.log( JSON.parse(localStorage.getItem(`age`)) ); // string

// localStorage.setItem(`married`, JSON.stringify(false));
// console.log( JSON.parse(localStorage.getItem(`married`))); // string

// localStorage.setItem(`animals`, JSON.stringify(([`cat`,`dog`])));
// console.log( JSON.parse((localStorage.getItem(`animals`)))); // string

// localStorage.setItem(`user`, JSON.stringify({name: `Oleg`}));
// console.log( JSON.parse(localStorage.getItem(`user`))); // string

// sessionStorage.setItem(`user`, JSON.stringify({name: `Oleg`}));
// console.log( JSON.parse(sessionStorage.getItem(`user`))); // string

// localStorage.setItem(`name`, `Ilona`);

// setTimeout(() => {
//     localStorage.removeItem(`name`);
// }, 1500);

const animals = [`cat`, `dog`, `lion`];

const storageAnimals = localStorage.getItem(`animals`); // !null
if(!storageAnimals){
    localStorage.setItem(`animals`, JSON.stringify(animals));
}

const renderUl = () => {
    const ul = document.createElement(`ul`);
    document.body.append(ul);
}

const renderLi = animal => {
    const li = document.createElement(`li`);

    const btn = document.createElement(`button`);
    btn.innerHTML = `${animal} delete`;
    btn.addEventListener(`click`, () => {
        let storageAnimals = JSON.parse(localStorage.getItem(`animals`));
        let animalIndex = storageAnimals.findIndex(item => item===animal);

        storageAnimals.splice(animalIndex,1);
        localStorage.setItem(`animals`, JSON.stringify(storageAnimals));

        li.remove();
    })

    li.append(btn);

    let ul = document.querySelector(`ul`); // null
    if(!ul){
        renderUl();
        ul = document.querySelector(`ul`);
    }
    ul.append(li);
}

const renderList = () => {
    const storageAnimals = JSON.parse(localStorage.getItem(`animals`));
    console.log(storageAnimals);

    if(storageAnimals.length){
        renderUl();
        storageAnimals.forEach((animal) => renderLi(animal));

        // second version (bad)

        // let LIs = storageAnimals
        //     .map(animal => {
        //         return `<li>
        //             <button>${animal} delete</button>
        //         </li>`
        //     })
        //     .join(``);

        // document.body.innerHTML += `<ul>${LIs}</ul>`;

        // let BTNs = document.querySelectorAll(`li button`);
        // BTNs.forEach((btn, index) => {
        //     btn.addEventListener(`click`, () => {
        //         storageAnimals.splice(index,1);
        //         localStorage.setItem(`animals`, JSON.stringify(storageAnimals));

        //         btn.parentNode.remove();
        //     })
        // })
    }
}

renderList();

const addAnimal = document.querySelector(`#addAnimal`);
const addAnimalName = document.querySelector(`#addAnimalName`);

addAnimal.addEventListener(`submit`, e=>{
    e.preventDefault();

    let newAnimal = addAnimalName.value;
    //console.log(newAnimal);

    let storageAnimals = JSON.parse(localStorage.getItem(`animals`)); // [...]
    storageAnimals.push(newAnimal);
    localStorage.setItem(`animals`, JSON.stringify(storageAnimals));
    
    renderLi(newAnimal);

    addAnimal.reset();
})