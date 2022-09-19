function Plane(name, number){
    this.name = name;
    this.number = number;
    this.title = `${name} ${number}`;
}

Plane.prototype.takeoff = function(){
    return `${this.title} взлетів!`;
};
Plane.prototype.landing = function(){
    return `${this.title} сів!`;
};

function Aerobatics(name, number, maxFuelTime){
    this.maxFuelTime = maxFuelTime;
}

function Airliner(name, number, maxPassangers){
    this.maxPassangers = maxPassangers;
}

let Boeing_737 = new Airliner(`Boeing`, 737, 300);
let Airbus_300 = new Airliner(`Airbus`, 300, 500);

console.log(Boeing_737);
console.log(Airbus_300);

let Extra_330 = new Aerobatics(`Extra`, 330, 3);
let Yak_52 = new Aerobatics(`Yak`, 52, 2);

console.log(Extra_330);
console.log(Yak_52);

//         Plane

// Aerobatics   Airliner