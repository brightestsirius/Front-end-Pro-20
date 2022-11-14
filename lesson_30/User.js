export default class User{
    constructor(obj){
        Object.assign(this, obj);
    }

    getName(){
        return `Name is ${this.name}`;
    }
}


export let x = 10;