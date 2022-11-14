// let {User, x} = require(`./UserNode`);

// console.log(x);

// let Oleg = new User({name: `Oleg`});
// console.log(Oleg.getName());

// console.log(y);

// console.log(second);

let http = require(`http`);

let static = require('node-static');
let file = new static.Server('./');
 
http.createServer(function (request, response) {
    request.addListener('end', function () {
        //
        // Serve files!
        //
        file.serve(request, response);
    }).resume();
}).listen(8082);