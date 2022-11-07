const API = `https://63693f7228cd16bba71904e4.mockapi.io`;

const getList = (path) => fetch(API+path).then(data => data.json());

const changeItem = (path, obj) => fetch(API+path, {
    method: `PUT`,
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify(obj)
}).then(data => data.json());

const deleteItem = path => fetch(API+path, {
    method: `DELETE`
}).then(data => data.json());

const addItem = (path, obj) => fetch(API+path, {
    method: `POST`,
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify(obj)
}).then(data => data.json());

// const controller = (path, method=`GET`, obj) => {
//     let options = {
//         method: method,
//         headers: {
//             "Content-type": "application/json"
//         }
//     }

//     if(obj) options.body = JSON.stringify(obj);
//     return fetch(API+path, options).then(data => data.json());
// }

// controller(`/users`);
// controller(`/users`, `POST`, {title: `Task 1`});
// controller(`/users/1`, `PUT`, {title: `Task 1`});

// getList(`/users`)
//     .then(data => console.log(data))
//     .then(() => getList(`/tasks`))
//     .then(data => console.log(data));

(async () => {
    let users = await getList(`/users`);
    console.log(users);

    let tasks = await getList(`/tasks`);
    console.log(tasks);

    let changedFirstUser = await changeItem(`/users/1`, {name: `Taras Gryrorovich`});
    console.log(changedFirstUser);

})();

const userForm = document.querySelector(`#userForm`);
const userFormId = document.querySelector(`#userFormId`);
const userFormName = document.querySelector(`#userFormName`);
const userDelete = document.querySelector(`#userDelete`);
const addUser = document.querySelector(`#addUser`);

userForm.addEventListener(`submit`, async e => {
    e.preventDefault();

    let id = userFormId.value;
    let name = userFormName.value;

    let changedUser = await changeItem(`/users/${id}`, {name: name});
    console.log(changedUser);
});

userDelete.addEventListener(`click`, async () => {
    let deletedUser = await deleteItem(`/users/${userFormId.value}`);
    console.log(deletedUser);
})

addUser.addEventListener(`click`, async () => {
    let newUser = {};
    let addedUser = await addItem(`/users`, newUser);
    console.log(addedUser);
})