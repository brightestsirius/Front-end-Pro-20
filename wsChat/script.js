const status = document.querySelector(`#status`);
const msgForm = document.querySelector(`#msgForm`);
const messages = document.querySelector(`#messages`);
const closeConnection = document.querySelector(`#closeConnection`);
const restartConnection = document.querySelector(`#restartConnection`);

const openWS = () => {
    const WS = new WebSocket(`ws://localhost:3000`);

    WS.addEventListener(`open`, () => status.innerHTML = `Online 🟢`);
    WS.addEventListener(`close`, () => {
        status.innerHTML = `Offline 🔴`;
    });

    msgForm.addEventListener(`submit`, e => {
        e.preventDefault();
    
        let message = msgForm.querySelector(`input`).value;
        console.log(WS.readyState);
    
        if(WS.readyState === 1){
            WS.send(message);
            msgForm.reset();
        }
    });

    WS.addEventListener(`message`, msg => {
        msg = JSON.parse(msg.data);
        Array.isArray(msg) ? renderMessages(msg) : renderMsg(msg);
    });

    closeConnection.addEventListener(`click`, () => {
        WS.close();
    })
}

openWS();

const renderMessages = list => list.forEach(item => renderMsg(item));

const renderMsg = msg => {
    const li = document.createElement(`li`);
    li.innerHTML = msg;
    messages.append(li);
}

restartConnection.addEventListener(`click`, () => {
    messages.innerHTML = ``;
    openWS();
});