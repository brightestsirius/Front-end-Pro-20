// let animals = [`cat`, `dog`, `lion`];

// console.log(`before request`);

// const request = new XMLHttpRequest();
// // console.log(request.readyState); // 0

// request.open(`GET`, `./animals.json`); // false === sync, true === async
// // console.log(request.readyState); // 1

// request.send();

// request.addEventListener(`readystatechange`, () => {
//     if(request.readyState === 2){
//         console.log(`Request send!`)
//     }

//     if(request.readyState === 4 && request.status>=200 && request.status<400){
//         let response = request.response;
//         response = JSON.parse(response);
//         console.log(response);
//     }
// });

// console.log(`after request`);

// for(i=0; i<=100; i++){
//     console.log(i);
// }

// const catRequest = new XMLHttpRequest();
// catRequest.open(`GET`, `./cat.json`);
// catRequest.send();

// catRequest.addEventListener(`readystatechange`, () => {
//     if(catRequest.readyState === 4 && catRequest.status===200){
//         console.log(JSON.parse(catRequest.response));
//     }
// })

const getFile = file => {
    const request = new XMLHttpRequest();
    request.open(`GET`, file);

    console.log(`Start getting ${file}`);

    request.send();

    request.addEventListener(`readystatechange`, () => {
        if(request.readyState === 4 && request.status===200){
            console.log(`End getting ${file}`);
            console.log(JSON.parse(request.response));
        }
    })
}

getFile(`./animals.json`);
getFile(`./cat.json`);
getFile(`./dog.json`);