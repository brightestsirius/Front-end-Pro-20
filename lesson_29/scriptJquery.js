// JQuery

// selectors

// const block = document.querySelectorAll(`.block`);
// block.forEach(block => {
//     block.innerHTML = `Hello`;
//     block.style.backgroundColor = `green`;
//     block.style.border = `3px solid black`;
//     block.style.borderRadius = `7px`;
// });

// const blockJQ = $(`.block`);
// console.log(blockJQ);

// blockJQ.css(`background-color`, `orange`);
// blockJQ.css({
//     'border': `7px dashed red`,
//     'border-radius': `15px`
// })

// blockJQ.each((index, item) => {
//     $(item).html(`Hello, ${index+1}`);
// });

// $('.owl-carousel').owlCarousel({
//     loop:false,
//     margin:10,
//     nav:false,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:3
//         },
//         1000:{
//             items:5
//         }
//     }
// })

// blockJQ.html(`Hello jq`);
// blockJQ.css(`background-color`, `orange`);
// blockJQ.css({
//     'border': `7px dashed red`,
//     'border-radius': `15px`
// })

// $(blocks).each((index, block)=>{})
// css
// addClass, removeClass, toggleClass

// .prev()
// block.previousElementSibling
// blockJQ.prev()

// .next()
// .siblings()
// .parents()

// .wrap();
// blockJQ.wrap(`section`)
// blockJQ.unwrap();

// text()/html()
// prepend()/append()
// before()/after()
// wrap()/unwrap()
// empty(), remove(), clone()

// actions/on

// animation
// hide/show/toggle
// fadeIn()/fadeOut()/fadeToggle()
// slideUp()/slideDown()/slideToggle(3000)

// $( "#clickme" ).click(function() {
//     $( "#book" ).fadeToggle( "fast", function() {
//       console.log(`Patron slow fadeOut`)
//     });
// });

// btn.click(() => {})
// btn.on(`click`, () => {})

// Ajax

// const URL = `https://jsonplaceholder.typicode.com/posts`;

// fetch(URL)
//     .then(data => data.json())
//     .then(data => console.log(data))
//     .then(() => fetch(URL))
//     .then(data => data.json())
//     .then(data => console.log(data))

// $.ajax({
// 	url : URL,
// 	method: 'GET',
// 	success: data => {
//         console.log(data);

//         $.ajax({
//             url : URL,
//             method: 'GET',
//             success: data => console.log(data),
//             error: error => console.log(error)
//         });
//     },
// 	error: error => console.log(error)
// })

// або
// $.ajax({
//     url : URL,
//     method: 'GET',
//     error: error => console.log(`in catch:`, error)
// })
// .done(data => {
//     console.log(`in resolve 1:`, data);
//     return data;
// })
// .done(data => {
//     console.log(`in resolve 2:`, data);
// });

// POST
// $.ajax({
// 	url: URL,
// 	type: "POST",
// 	dataType: "JSON",
// 	data: {title: "New title"},
// 	success: data => console.log(data),
// 	error: error => console.log(error)
// });

// let btn = $('button.knopka');

(async () => {
    try{
        let users = await fetch(`https://jsonplaceholder.typicode.com/users`).then(data => data.json());
        console.log(users);
    
        let firstUser = await fetch(`https://jsonplaceholder.typicode.com/users/1`).then(data => data.json());
        console.log(firstUser);

        let threeUsers = await Promise
            .allSettled([
                fetch(`https://jsonplaceholder.typicode.com/users/1`).then(data => data.json()),
                fetch(`https://jsonplaceholder.typicode.com/users/2`).then(data => data.json()),
                fetch(`https://jsonplaceholder.typicode.com/users/3`).then(data => data.json()),
            ])
            .then(
                data => data.filter(item => item.status===`fulfilled`).map(item => item.value)
            );

        console.log(threeUsers);
    } catch(err){
        console.log(err);
    }
})();