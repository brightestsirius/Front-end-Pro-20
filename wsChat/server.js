const WS = require(`ws`);
const Server = new WS.Server({port: 3000});

const messages = [];

Server.on(`connection`, socket => {
    console.log(`Connection established!`);
    socket.send(JSON.stringify(messages));

    socket.on(`message`, msg => {
        msg = msg.toString();
        console.log(msg);
        
        messages.push(msg);

        // socket.send(msg);
        Server.clients.forEach(client => {
            client.send(JSON.stringify(msg));
        })
    })

    socket.on(`close`, () => {
        console.log(`Connection closed by Client!`);
    })
})