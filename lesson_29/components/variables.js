import Student from './Student.js';
import Lector from './Lector.js';
import Admin from './Admin.js';

export const ROLES = {
    student: obj => new Student(obj),
    admin: obj => new Admin(obj),
    lector: obj => new Lector(obj),
}

export const users = [
    {
        name: `User 1`,
        role: `student`
    },
    {
        name: `User 2`,
        role: `admin`
    },
    {
        name: `User 3`,
        role: `lector`
    }
];

export let x = 10;
x+=15;

export const firstFunc = value => secondFunc(value);
const secondFunc = value => value**2;