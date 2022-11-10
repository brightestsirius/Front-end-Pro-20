export default class User{
    constructor(obj){
        Object.assign(this, obj);
    }

    getInfo(){
        return `Hello, my name is ${this.name}.`
    }

    getRole(){
        return `I'm ${this.role}.`;
    }
};