const WS = require(`ws`);
const server = new WS.Server({port: 3000});

server.on(`connection`, socket => {
    console.log(`Connection established on Server-side!`);

    let user = {
        name: `Taras`,
        age: 250
    }

    setTimeout(() => {
        socket.send(JSON.stringify(user));
    }, 2500);

    socket.on(`message`, msg => {
        msg = JSON.parse(msg.toString());
        console.log(msg);
    })

    setTimeout(() => {
        socket.close();
    }, 4000);

    socket.on(`close`, () => {
        console.log(`Connection closed on Server-side!`);
    })
})