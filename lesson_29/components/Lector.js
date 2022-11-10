import User from './User.js';

export default class Lector extends User{
    constructor(props) {
        super(props);
    }

    getInfo(){
        return [super.getInfo(), this.getRole()].join(` `);
    }
};