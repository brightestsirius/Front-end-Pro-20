// 🥵👨🏻‍💻🥳

const ROOMS = [
    {
        title: `Orange`,
        days: [`Monday`, `Wednesday`, `Friday`],
        hours: {
            start: 9,
            end: 15
        }
    },
    {
        title: `Red`,
        days: [`Wednesday`, `Thursday`, `Friday`],
        hours: {
            start: 12,
            end: 19
        }
    },
    {
        title: `Green`,
        days: [`Monday`, `Tuesday`, `Wednesday`],
        hours: {
            start: 10,
            end: 18
        }
    }
];

const PARTICIPANTS = [`Jack`, `Taras`,`Volodymyr`,`Olena`];

const meetingForm = document.querySelector(`#meetingForm`);
const meetingFormTitle = document.querySelector(`#meetingFormTitle`);
const meetingFormRoom = document.querySelector(`#meetingFormRoom`);
const meetingFormDay = document.querySelector(`#meetingFormDay`);
const meetingFormHour = document.querySelector(`#meetingFormHour`);
const meetingFormParticipants = document.querySelector(`#meetingFormParticipants`);

const roomsTables = document.querySelector(`#roomsTables`);

const renderFormRoom = () => {
    const rooms = ROOMS
        .map(item => item.title)
        .map(item => `<option value="${item}">${item}</option>`)
        .join(``);

    meetingFormRoom.innerHTML = rooms;
}

const getDaysByRoom = room => {
    const currentRoom = ROOMS.find(item => item.title === room);
    return currentRoom.days;
}

const renderFormDay = room => {
    meetingFormDay.innerHTML = getDaysByRoom(room)
        .map(item => `<option value="${item}">${item}</option>`)
        .join(``);
}

const getHoursByRoom = room => {
    const currentRoom = ROOMS.find(item => item.title === room);
    let start = currentRoom.hours.start;
    let end = currentRoom.hours.end;

    const hours = [];
    for(; start<=end; start++){
        hours.push(start);
    }

    return hours;
}

const renderFormHour = room => {
    meetingFormHour.innerHTML = getHoursByRoom(room)
        .map(item => `<option value="${item}">${item}:00</option>`)
        .join(``);
}

const renderFormParticipants = () => {
    meetingFormParticipants.innerHTML = PARTICIPANTS
        .map(item => `<option value="${item}">${item}</option>`)
        .join(``);
}

renderFormRoom();
renderFormDay(meetingFormRoom.value);
renderFormHour(meetingFormRoom.value);
renderFormParticipants();

meetingFormRoom.addEventListener(`change`, e => {
    renderFormDay(e.target.value);
    renderFormHour(e.target.value);
})

meetingForm.addEventListener(`submit`, e=>{
    e.preventDefault();

    let participants = [...meetingFormParticipants.selectedOptions].map(item => item.value);
    if(!participants.length){
        console.log(`🥵 Select at least one participant!`);
        return;
    }

    let newMeet = {
        title: meetingFormTitle.value,
        room: meetingFormRoom.value,
        day: meetingFormDay.value,
        hour: meetingFormHour.value,
        participants: participants
    }

    //console.log(newMeet);

    let storageMeetings = localStorage.getItem(`meetings`); // null || [...]
    storageMeetings = storageMeetings ? JSON.parse(storageMeetings) : [];

    storageMeetings.push(newMeet);
    localStorage.setItem(`meetings`, JSON.stringify(storageMeetings));
})