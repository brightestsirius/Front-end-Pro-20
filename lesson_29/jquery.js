const API = `https://jsonplaceholder.typicode.com/todos`;

const getList = () => fetch(API).then(data => data.json());