// 🟢🔴😡🥳

// const getFile = file => {
//     return new Promise((resolve, reject) => {
//         let request = new XMLHttpRequest();
//         request.open(`GET`, file);
//         request.send();

//         console.log(`Start getting ${file}`);

//         request.addEventListener(`readystatechange`, () => {
//             if(request.readyState === 4){
//                 console.log(`End getting ${file}`);

//                 request.status === 200 
//                 ? resolve(JSON.parse(request.response)) 
//                 : reject([request.status, request.statusText])
//             }
//         })
//     })
// }

// getFile(`./files/cat.json`)
//     .then(
//         cat => console.log(`🟢 In resolve: `, cat)
//     )
//     .then(
//         () => getFile(`./files/dog.json`)
//     )
//     .then(
//         dog => console.log(`🟢 In resolve: `, dog)
//     )
//     .then(
//         () => getFile(`./files/lion.json`)
//     )
//     .then(
//         lion => console.log(`🟢 In resolve: `, lion)
//     )
//     .catch(
//         ([status, statusText]) => {
//             console.log(`🔴 In catch:`, status, statusText);
//         }
//     )

// getFile(`./files/animals.json`)
//     .then(
//         animals => {
//             console.log(animals);
//             return animals.map(animal => getFile(`./files/${animal}.json`));
//         }
//     )
//     .then(
//         arrOfResponses => console.log(`🟢 In second resolve`, arrOfResponses)
//     )
//     .then(
//         () => console.log(`🟢 In third resolve`)
//     )
//     .catch(
//         ([status, statusText]) => {
//             console.log(`🔴 In catch:`, status, statusText);
//         }
//     )

// Promise
//     .all([
//         getFile(`./files/cat.json`), // 3s
//         getFile(`./files/dogs.json`), // 2s
//         getFile(`./files/lion.json`) // 1s
//     ])
//     .then( // 3s
//         arrOfResponces => {
//             let arrOfIcons = arrOfResponces.map(item => item.icon).join(` `);
//             console.log(arrOfIcons);
//         }
//     )
//     .catch(
//         ([status, statusText]) => {
//             console.log(`🔴 In catch:`, status, statusText);
//         }
//     )

// Promise
//     .allSettled([
//         getFile(`./files/cat.json`), // 3s
//         getFile(`./files/dogs.json`), // 2s
//         getFile(`./files/lion.json`) // 1s
//     ])
//     .then( // 3s
//         arrOfResponces => {
//             console.log(arrOfResponces);
//             return arrOfResponces.filter(item => item.status === `fulfilled`)
//         }
//     )
//     .then(
//         arrOfResponces => {
//             console.log(arrOfResponces)
//             return arrOfResponces.map(item => item.value);
//         }
//     )
//     .then(
//         arrOfResponces => console.log(arrOfResponces)
//     )
//     .catch(
//         ([status, statusText]) => {
//             console.log(`🔴 In catch:`, status, statusText);
//         }
//     )

// Promise
//     .allSettled([
//         getFile(`./files/cat.json`), // 3s
//         getFile(`./files/dog.json`), // 2s
//         getFile(`./files/lion.json`) // 1s
//     ])
//     .then( // 3s
//         arrOfResponces => arrOfResponces.filter(item => item.status === `fulfilled`).map(item => item.value)
//     )
//     .then(
//         arrOfResponces => console.log(arrOfResponces)
//     )
//     .catch(
//         ([status, statusText]) => {
//             console.log(`🔴 In catch:`, status, statusText);
//         }
//     )

// Promise
//     .race([
//         getFile(`./files/cats.json`), // 3s
//         getFile(`./files/dog.json`), // 2s
//         getFile(`./files/lion.json`) // 1s
//     ])
//     .then( // 3s
//         data => console.log(data)
//     )
//     .catch(
//         ([status, statusText]) => {
//             console.log(`🔴 In catch:`, status, statusText);
//         }
//     )

// getFile(`./files/animals.json`)
//     .then(
//         animals => {
//             console.log(animals); // ['cat', 'dog', 'lion']

//             return Promise
//                 .allSettled(animals.map(item => getFile(`./files/${item}.json`)))
//         }
//     )
//     .then(
//         arrOfResponses => arrOfResponses.filter(item => item.status === `fulfilled`).map(item => item.value)
//     )
//     .then(
//         arrOfResponses => {
//             console.log(`🟢 In third resolve`, arrOfResponses);
//             return arrOfResponses.map(item => item.icon).join(` `);
//         }
//     )
//     .then(
//         stringOfIcons => console.log(`🟢 In fourth resolve`, stringOfIcons)
//     )
//     .catch(
//         ([status, statusText]) => {
//             console.log(`🔴 In catch:`, status, statusText);
//         }
//     )

// fetch(`./files/cat.json`)
//     .then(response => {
//         console.log(response); // Response
//         console.log(response.json()) // cat
//     })

// const getFile = file => {
//     return fetch(file)
//         .then(response => response.ok ? response.json() : Promise.reject([response.status, response.statusText]))
// }

// getFile(`./files/animals.json`)
//     .then(
//         animals => {
//             console.log(animals); // ['cat', 'dog', 'lion']

//             return Promise
//                 .allSettled(animals.map(item => getFile(`./files/${item}.json`)))
//         }
//     )
//     .then(
//         arrOfResponses => arrOfResponses.filter(item => item.status === `fulfilled`).map(item => item.value)
//     )
//     .then(
//         arrOfResponses => {
//             console.log(`🟢 In third resolve`, arrOfResponses);
//             return arrOfResponses.map(item => item.icon).join(` `);
//         }
//     )
//     .then(
//         stringOfIcons => console.log(`🟢 In fourth resolve`, stringOfIcons)
//     )
//     .catch(
//         ([status, statusText]) => {
//             console.log(`🔴 In catch:`, status, statusText);
//         }
//     )