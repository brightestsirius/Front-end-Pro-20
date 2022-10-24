// const getFile = (file, cb) => {
//     const request = new XMLHttpRequest();
//     request.open(`GET`, file, false);
//     request.send();

//     console.log(`Start getting ${file}`);

//     request.addEventListener(`readystatechange`, () => {
//         if(request.readyState === 4 && request.status === 200){
//             console.log(`End getting ${file}`);
//             let response = JSON.parse(request.response);
//             cb(response);
//         }
//     })
// }

// getFile(`./files/dog.json`);

// const animalsIcons = [];

// const cbCat = data => {
//     //console.log(data.age);
//     animalsIcons.push(data.icon);
//     getFile(`./files/dog.json`, cbDog);
// }

// const cbDog = data => {
//     //console.log(data.name);
//     animalsIcons.push(data.icon);
//     getFile(`./files/lion.json`, cbLion);
// }

// const cbLion = data => {
//     //console.log(data.icon);
//     animalsIcons.push(data.icon);
//     console.log(animalsIcons);
// }

// getFile(`./files/cat.json`, cbCat);

// setTimeout(() => {
//     console.log(`After 1 second`);

//     setTimeout(() => {
//         console.log(`After 2 second`);

//         setTimeout(() => {
//             console.log(`After 1 second`);
//         }, 1000);
//     }, 2000);
// }, 1000);

// 🟢🔴😡🥳

// Promise
// const hasMoney = false;

// const myPromise = new Promise(
//     function(resolve, reject){

//         setTimeout(() => {
//             if(hasMoney){
//                 resolve();
//             } else{
//                 reject();
//             }
//         }, 1500);

//     }
// );

// const resolve = () => {
//     console.log(`🟢 In 1 resolve function`);
//     resolve2();
// }

// const resolve2 = () => {
//     console.log(`🟢 In 2 resolve function`);
//     resolve3();
// }

// const resolve3 = () => {
//     console.log(`🟢 In 3 resolve function`);
// }

// const reject = () => console.log(`🔴 In reject function`);

// myPromise
//     .then(
//         function(){
//             console.log(`🟢 In 1 resolve function`);
//         },
//         function(){
//             console.log(`🔴 In 1 reject function`);
//         }
//     )
//     .then(
//         function(){
//             console.log(`🟢 In 2 resolve function`);
//         },
//         function(){
//             console.log(`🔴 In 2 reject function`);
//         }
//     )
//     .then(
//         function(){
//             console.log(`🟢 In 3 resolve function`);
//         },
//         function(){
//             console.log(`🔴 In 3 reject function`);
//         }
//     )

// const bankPromise = new Promise(
//     function(balanc, cash){
//         let userChoice = confirm(`Do you want check balanc?`);
//         userChoice ? balanc() : cash();
//     }
// )

// bankPromise
//     .then(
//         function(){
//             console.log(`in 1 balanc func`);
//         },
//         function(){
//             console.log(`in 1 cash func`);
//             return Promise.reject();
//         }
//     )
//     .then(
//         function(){
//             console.log(`in 2 balanc func`);
//         },
//         function(){
//             console.log(`in 2 cash func`);
//             return Promise.reject();
//         }
//     )
//     .then(
//         function(){
//             console.log(`in 3 balanc func`);
//         },
//         function(){
//             console.log(`in 3 cash func`);
//         }
//     )

// let myResolvePromise = new Promise(
//     (resolve) => {
//         setTimeout(() => resolve(),1000);
//     }
// )

// myResolvePromise
//     .then(
//         () => {
//             console.log(`🟢 in 1 resolve func`)
            
//             return new Promise(
//                 function(resolve){
//                     setTimeout(() => resolve(), 2000);
//                 }
//             )
//         }
//     )
//     .then(
//         () => {
//             console.log(`🟢 in 2 resolve func`)

//             return new Promise(
//                 function(resolve){
//                     setTimeout(() => resolve(), 1000);
//                 }
//             )
//         }
//     )
//     .then(
//         () => console.log(`🟢 in 3 resolve func`)
//     )

// const hasMoney = false;

// let myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         hasMoney ? resolve() : reject();
//     }, 1000);
// })

// myPromise
//     .then(
//         () => console.log(`🟢 In 1 resolve`),
//     )
//     .then(
//         () => console.log(`🟢 In 2 resolve`)
//     )
//     .then(
//         () => console.log(`🟢 In 3 resolve`)
//     )
//     .then(
//         () => console.log(`🟢 In 4 resolve`)
//     )
//     .catch(
//         () => {
//             console.log(`😡 In catch`);
//             return Promise.reject();
//         }
//     )
//     .then(
//         () => console.log(`🟢 In 5 resolve`),
//         () => console.log(`🔴 In 5 reject`)
//     )
//     .then(
//         () => console.log(`🟢 In 6 resolve`)
//     )

// const getFile = true;
// const getFile2 = true;
// const getFile3 = true;

// const promiseGetFile = new Promise((resolve, reject) => {
//     getFile ? resolve() : reject();
// })

// promiseGetFile
//     .then(
//         () => {
//             console.log(`🟢 First file getted!`);
//             return new Promise((resolve, reject) => {
//                 getFile2 ? resolve() : reject();
//             })
//         }
//     )
//     .finally(
//        () => console.log(`🥳 In 1 finally`) 
//     )
//     .then(
//         () => {
//             console.log(`🟢 Second file getted!`);
//             return new Promise((resolve, reject) => {
//                 getFile3 ? resolve() : reject();
//             })}
//     )
//     .finally(
//         () => console.log(`🥳 In 2 finally`) 
//     )
//     .then(
//         () => console.log(`🟢 Third file getted!`)
//     )
//     .finally(
//         () => console.log(`🥳 In 3 finally`) 
//     )
//     .catch(
//         () => console.log(`😡 File didn't get!`)
//     )
//     .finally(
//         () => console.log(`🥳 In 4 finally`) 
//     )

// const hasMoney = true;
// const money = 100;

// const myPromise = new Promise((resolve, reject) => {
//     hasMoney ? resolve({money: money, str: `Hello, world`}) : reject(money);
// })

// myPromise
//     .then(
//         (obj) => {
//             console.log(`In 1 resolve ${obj.money}`);
//             console.log(obj.str);
//             return obj.money;
//         },
//         (data) => {
//             console.log(`In 1 reject ${data}`);
//             return Promise.reject(data);
//         }
//     )
//     .finally(
//         () => console.log(`In finally`)
//     )
//     .then(
//         (data) => {
//             console.log(`In 2 resolve ${data}`)
//         },
//         (data) => {
//             console.log(`In 2 reject ${data}`);
//             return Promise.reject(data);
//         }
//     )
//     .catch(
//         (data) => console.log(`In catch ${data}`)
//     )

const getFile = file => {
    return new Promise((resolve, reject) => {

        const request = new XMLHttpRequest();
        request.open(`GET`, file);
        request.send();

        request.addEventListener(`readystatechange`, () => {
            if(request.readyState === 4){
                request.status===200 ? 
                    resolve(JSON.parse(request.response)) 
                    : reject(request.statusText);
            }
        })

    })
}

const animalsIcons = [];

getFile(`./files/cat.json`)
    .then(
        cat => {
            console.log(`🟢 In 1 resolve:`, cat);
            animalsIcons.push(cat.icon);

            return getFile(`./files/dog.json`);
        }
    )
    .then(
        dog => {
            console.log(`🟢 In 2 resolve:`, dog);
            animalsIcons.push(dog.icon);

            return getFile(`./files/lion.json`);
        }
    )
    .then(
        lion => {
            console.log(`🟢 In 3 resolve:`, lion);
            animalsIcons.push(lion.icon);
        }
    )
    .finally(
        () => console.log(animalsIcons)
    )
    .catch(
        data => console.log(`😡 In catch: ${data}`)
    )

// cat 1s
// dog 2s
// lion 1s

// [cat, dog, lion] = 4s

// 2s [cat, dog, lion]