export default class User{
    constructor(obj){
        Object.assign(this, obj);
    }

    getName(){
        return `Hello, my name is ${this.name}`;
    }
}