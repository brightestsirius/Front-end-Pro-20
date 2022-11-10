// JS Modules

import User from './components/User.js';
import {ROLES, users, x, firstFunc} from './components/variables.js';
import {getList} from './services/serviceUsers.js';
import {userForm} from './components/userForm.js';

users
    .map(item => ROLES[item.role] ? ROLES[item.role](item) : new User(obj))
    .forEach(item => console.log(item.getInfo()));

console.log(x);
console.log(firstFunc(10));

getList()
    .then(data => console.log(data));

// NodeJS
// http
    // require()
    // module.exports = {}

// npm
// node-static