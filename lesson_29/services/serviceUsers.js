const API = `https://jsonplaceholder.typicode.com/users`;

export const getList = () => fetch(API).then(data=> data.json());

export const addItem = obj => fetch(API, {
    method: `POST`,
    headers:{
        "Content-type": "application/json"
    },
    body: JSON.stringify(obj)
}).then(data => data.json());