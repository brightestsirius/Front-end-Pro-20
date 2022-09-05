// forEach

// let arr = [10, 20, 30]; // * 2
// console.log(arr);

// arr.forEach((item, index, arr) => console.log(item, index, arr));

// for(let i=0; i<arr.length; i++){
//     // arr[i] *= 2;
//     console.log(arr[i]*2);
// }

// function multiply(value){
//     value *= 2;
// }

// arr.forEach(
//     function(item){
//         item *= 2;
//         console.log(item);
//     }
// )

// console.log(arr);

// arr.forEach(
//     function(item){
//         item = Math.pow(item, 2);
//         console.log(item);
//     }
// )

// console.log(arr);

// let arr = [10, 20, 30];
// console.log(arr);

// arr.forEach(
//     function(item, index, arr){
//         // arr[index] *= 2;
//         item *= 2;
//     }
// )

// console.log(arr);

// let arr = [10,20,30];
// console.log( arr.push(100,200) ); // 5

// arr.forEach(
//     function(item){
//         document.write(`<p>${item}</p>`);
//     }
// )

// let modifiedArr = arr.forEach(
//     function(item){
//         return item*2;
//     }
// )

// console.log(arr);
// console.log(modifiedArr);

// filter
// let arr = [10, `10`, true, 20, -100];

// let numbers = [];
// for(let i=0; i<arr.length; i++){
//     if(typeof arr[i] === `number`)
//         numbers.push(arr[i]);
// }

// for(let i=0; i<numbers.length; i++){
//     document.write(`<p>${numbers[i]}</p>`);
// }

// let numbers = arr.filter(
//     function(item){
//         return typeof item === `number`;
//     }
// )

// arr
//     .filter(
//         function(item){
//             return typeof item === `number` && item>0;
//         }
//     ) // [10, 1000];
//     // .filter(
//     //     function(item){
//     //         return item>0;
//     //     }
//     // ) // [10,1000];
//     .forEach(
//         function(item){
//             document.write(`<p>${item}</p>`);
//         }
//     ) // undefined

// let users = [
//     [`Artem`, 15, `Ukraine`],
//     [`Anna`, 16],
//     [`Jack`, 14],
//     [`Tanya`, 18, `Poland`]
// ];

// // >=15 && <=17
// // country

// let filteredUsers = users
//     .filter(user => user[1]>=15 && user[1]<=17)
//     .filter(user => user[2])

// console.log(filteredUsers);


// let arr = [10,20,30,40];

// let modifiedArr = arr
//     .filter(
//         function(item, index){
//             return index===1 ? item*0 : item*2; // 20 => true; 0 => false
//         }
//     );

// console.log(arr);
// console.log(modifiedArr);

// map

// let arr = [10,20,0,30]; // *2

// let modifiedArr = arr
//     .map(
//         function(item){
//             return item*2;
//         }
//     )

// console.log(arr);
// console.log(modifiedArr); // [20,40,0,60]

// let arr = [10,true,'hello',-100,300];

// 1. number, >0 => [10,300]
// 2. Math.pow(item, 2) => [100, 90000]
// 3. render as <p>

// let filteredNumbers = []
// for(let i=0; i<arr.length; i++){
//     if(typeof arr[i] === `number` && arr[i]>0)
//         filteredNumbers.push(arr[i]);
// }

// for(let i=0; i<filteredNumbers.length; i++){
//     filteredNumbers[i] = Math.pow(filteredNumbers[i],2);
// }

// for(let i=0; i<filteredNumbers.length; i++){
//     document.write(`<p>${filteredNumbers[i]}</p>`);
// }

// V2

// for(let i=0; i<arr.length; i++){
//     if(typeof arr[i] === `number` && arr[i]>0){
//         document.write(`<p>${Math.pow(arr[i], 2)}</p>`);
//     }
// }

// V3
// arr
//     .filter(
//         function(item){
//             return typeof item === `number` && item>0;
//         }
//     )
//     .map(
//         function(item){
//             return Math.pow(item, 2);
//         }
//     )
//     .forEach(
//         function(item){
//             document.write(`<p>${item}</p>`);
//         }
//     )

// V4

// let arr = [10,true,'hello',-100,300];

// let LIs = arr
//     .filter(item => typeof item === `number` && item>0)
//     .map(item => `<li>${Math.pow(item, 2)}</li>`)
//     .join(``);

// document.write(`<ul>${LIs}</ul>`);

// let filteredModifiedArr = arr
//     .filter(item => typeof item === `number` && item>0)
//     .map(item => Math.pow(item, 2));

// console.log(filteredModifiedArr);

// let LIs = filteredModifiedArr
//     .map(item => `<li>${item}</li>`)
//     .join(``);

// let TRs = filteredModifiedArr
//     .map(item => `<tr><td>${item}</td></tr>`)
//     .join(``);

// document.write(`<ol>${LIs}</ol>`);
// document.write(`<table>${TRs}</table>`);

// find/findIndex

// let arr = [10,20,30,40,50];

// let string;

// for(let i=0; i<arr.length; i++){
//     if(typeof arr[i] === `string`){
//         string = arr[i];
//         break;
//     }
// }

// console.log(string);

// let string = arr
//     .find(
//         function(item){
//             return typeof item === `string`;
//         }
//     );

// console.log(string);

// findIndex

// let arr = [10,20,`30`,40,`50`];

// let string = arr
//     .findIndex(
//         function(item){
//             return typeof item === `string`;
//         }
//     );

// console.log(string);

// Olympic

const continents = [
    ['fr','Europe'],
    ['it','Europe'],
    ['us','America'],
    ['ca','America'],
    ['no','Europe'],
    ['jp','Asia'],
    ['au','Oceania'],
    ['gb','Europe'],
    ['se','Europe'],
    ['ro','Europe'],
    ['ua','Europe'],
    ['dk','Europe'],
    ['de','Europe'],
    ['ke','Africa'],
    ['ml','Africa']
];

// function getContinentByCountry(abbrCountry){
//     for(let i=0; i<continents.length; i++){
//         let countryInfo = continents[i];
//         if(countryInfo[0] === abbrCountry){
//             return countryInfo[1];
//         }
//     }
// }

// function getContinentByCountry(abbrCountry){
//     let country = continents
//         .find(
//             function(countryInfo){
//                 return countryInfo[0] === abbrCountry;
//             }
//         );
//     return country[1];
// }

// console.log( getContinentByCountry(`gb`) );
// console.log( getContinentByCountry(`ke`) );
// console.log( getContinentByCountry(`ua`) );

function getCountriesByContinent(continent){
    return continents
        .filter(
            function(countryInfo){
                // countryInfo = ['ml','Africa']
                return countryInfo[1] === continent;
            }
        )
        .map(
            function(countryInfo){
                // countryInfo = ['ml','Africa']
                return countryInfo[0];
            }
        );
}

let EuropeCountries = getCountriesByContinent(`Europe`);
console.log(EuropeCountries);

let AsiaCountries = getCountriesByContinent(`Asia`);
console.log(AsiaCountries);


// every/some
// reduce

// object
// this
// prototype