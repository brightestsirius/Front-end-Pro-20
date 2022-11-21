let WS = new WebSocket(`ws://localhost:3000`);

WS.addEventListener(`open`, () => console.log(`Connection established on Client-side!`));

WS.addEventListener(`message`, msg => console.log(JSON.parse(msg.data)));

WS.addEventListener(`close`, () => console.log(`Connection closed on Client-side!`));

const sendMsg = document.querySelector(`#sendMsg`);
sendMsg.addEventListener(`click`, () => {
    // WS.send(`Hello, I'm Client`);
    let user = {
        name: `Patron`,
        age: 7
    }

    console.log(WS.readyState);

    if(WS.readyState === 1) WS.send(JSON.stringify(user));
})

const closeConnection = document.querySelector(`#closeConnection`);
closeConnection.addEventListener(`click`, () => {
    WS.close();
})