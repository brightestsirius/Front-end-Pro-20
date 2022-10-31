const promiseTimeout = timeout => {
    return new Promise(resolve => {
        console.log(`Start ${timeout}`);
        setTimeout(() => resolve(timeout), timeout);
    })
}

// promiseTimeout(1000)
//     .then(
//         data => {
//             console.log(`End ${data}`);
//             return promiseTimeout(2000);
//         }
//     )
//     .then(
//         data => {
//             console.log(`End ${data}`);
//             return promiseTimeout(1500);
//         }
//     )
//     .then(
//         data => console.log(`End ${data}`)
//     )

// callback hell

// const secondFunc = () => {
//     thirdFunc();
// }

// firstFunc(1000, secondFunc);

// async/await

console.log(`before`);

// async function someFunc(){
//     // return; // undefined
//     // return new Promise(() => {})
// }

const someFunc = async () => {
    let firstTimeout = await promiseTimeout(1000);
    console.log(firstTimeout); // Promise(pending)

    let secondTimeout = await promiseTimeout(2000);
    console.log(secondTimeout);

    let thirdTimeout = await promiseTimeout(1500);
    console.log(thirdTimeout);

    // let jokeAnimalRequest = await fetch(`https://api.chucknorris.io/jokes/random?category=animal`),
    //     jokeAnimalResponse = await jokeAnimalRequest.json();

    // console.log(jokeAnimalResponse); // Promise(pending);

    // let jokeSportRequest = await fetch(`https://api.chucknorris.io/jokes/random?category=sport`),
    //     jokeSportResponse = await jokeSportRequest.json();

    // console.log(jokeSportResponse); // Promise(pending);

    let jokesFromCategoriesRequest = await Promise
        .all([
            fetch(`https://api.chucknorris.io/jokes/random?category=animal`)
                .then(data => data.json()),
            fetch(`https://api.chucknorris.io/jokes/random?category=sport`)
                .then(data => data.json())
        ]);

    console.log(jokesFromCategoriesRequest); // [obj, obj]
}

someFunc();

console.log(`after`);