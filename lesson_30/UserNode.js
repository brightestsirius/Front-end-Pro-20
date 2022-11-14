class User{
    constructor(obj){
        Object.assign(this, obj);
    }

    getName(){
        return `Name is ${this.name}`;
    }
}


let x = 10;

module.exports = {User, x};