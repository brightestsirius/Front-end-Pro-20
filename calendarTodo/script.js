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

const getStorageItem = key => {
    let storageItem = localStorage.getItem(key);
    storageItem = storageItem ? JSON.parse(storageItem) : [];
    return storageItem;
}

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

    let storageMeetings = getStorageItem(`meetings`);

    let meetingExist = storageMeetings
        .find(item => 
            item.room === newMeet.room 
            && item.day === newMeet.day 
            && item.hour === newMeet.hour
        );

    if(meetingExist){
        console.log(`🥵 Meeting on ${newMeet.day} at ${newMeet.hour}:00 in ${newMeet.room} room already exist!`);
        return;
    }

    let meetingDayHour = storageMeetings
        .filter(item => item.day === newMeet.day && item.hour === newMeet.hour);

    let someParticipantBusy = false;

    meetingDayHour.forEach(storageMeet => {
        newMeet.participants.forEach(participant => {
            let participantBusy = storageMeet.participants.includes(participant);
            if(participantBusy){
                someParticipantBusy = true;
                console.log(`👨🏻‍💻 ${participant} on ${storageMeet.day} at ${storageMeet.hour}:00 in ${storageMeet.room} room already busy!`);
            }
        })
    });

    if(someParticipantBusy) return;

    storageMeetings.push(newMeet);
    console.log(`🥳 Meeting on ${newMeet.day} at ${newMeet.hour}:00 in ${newMeet.room} room successfully added!`);

    localStorage.setItem(`meetings`, JSON.stringify(storageMeetings));

    renderMeet(newMeet);
});

const renderCaption = title => `<caption>Calendar for ${title} room</caption>`;

const renderThead = days => {
    return `<thead>
        <tr>
        <th></th>
        ${days.map(item => `<th>${item}</th>`).join(``)}
        </tr>
    </thead>`;
}

const renderTbody = room => {
    const roomHours = getHoursByRoom(room.title);

    const TRs = roomHours
        .map(hour => `<tr>
            <td>${hour}:00</td>
            ${room.days.map(day => `<td data-day="${day}" data-hour="${hour}"></td>`).join(``)}
        </tr>`)
        .join(``);

    return `<tbody>${TRs}</tbody>`;
}

const renderTable = room => {
    const table = document.createElement(`table`);
    table.id = `room${room.title}`;
    table.innerHTML = renderCaption(room.title) + renderThead(room.days) + renderTbody(room);

    roomsTables.append(table);
}

const renderMeet = meet => {
    const td = document.querySelector(`table#room${meet.room} td[data-day="${meet.day}"][data-hour="${meet.hour}"]`);
    
    const meetBlock = document.createElement(`div`);
    meetBlock.className = `meeting__block`;
    meetBlock.innerHTML = `<h3>${meet.title}</h3>
    <p>Participants: ${meet.participants.join(`, `)}</p>`;

    const meetBlockBtn = document.createElement(`button`);
    meetBlockBtn.innerHTML = `Delete meeting`;
    meetBlockBtn.addEventListener(`click`, () => {
        let storageMeetings = getStorageItem(`meetings`);
        let currentMeetingIndex = storageMeetings
            .findIndex(item => 
                item.room===meet.room 
                && item.day===meet.day 
                && item.hour===meet.hour);

        storageMeetings.splice(currentMeetingIndex,1);
        localStorage.setItem(`meetings`, JSON.stringify(storageMeetings));

        meetBlock.remove();
    })

    meetBlock.append(meetBlockBtn);

    td.append(meetBlock);
}

const renderTables = () => {
    ROOMS.forEach(room => renderTable(room));
}

const renderStorageMeetings = () => {
    let storageMeetings = getStorageItem(`meetings`);
    storageMeetings.forEach(meet => renderMeet(meet));
}

renderTables();
renderStorageMeetings();