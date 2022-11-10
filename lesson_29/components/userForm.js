import {addItem} from './../services/serviceUsers.js';

export const userForm = document.querySelector(`#userForm`);

userForm.addEventListener(`submit`, async e=>{
    e.preventDefault();

    let inputValue = e.target.querySelector(`input`).value;
    let user = {name: inputValue};

    let addedUser = await addItem(user);
    console.log(addedUser);
})