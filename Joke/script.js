const API = `https://api.chucknorris.io/jokes`;

const jokeForm = document.querySelector(`#jokeForm`);
const jokeCategories = document.querySelector(`#jokeCategories`);

const jokesForm = document.querySelector(`#jokesForm`);
const jokesFav = document.querySelector(`#jokesFav`);

// renderCategories
const renderCategories = () => {
    fetch(API+`/categories`)
        .then(data => data.json())
        .then(data => {
            //console.log(data);
            jokeCategories.innerHTML = data
                .map((category,index) => `<li>
                    <label>
                        ${category} 
                        <input 
                            type="radio" 
                            name="jokeCategory" 
                            value="${category}" 
                            ${!index ? `checked` : ``}
                        >
                    </label>
                </li>`)
                .join(``);
        })
}

renderCategories();
// renderCategories

// getJoke
jokeForm.addEventListener(`submit`, e=>{
    e.preventDefault();

    let jokeType = jokeForm.querySelector(`input[name="jokeType"]:checked`).value;
    // console.log(jokeType); // random, categories, search

    let path;

    switch(jokeType){
        case `random`:
            path = `/random`;
            break;
        case `categories`:
            let checkedCategory = jokeCategories.querySelector(`input[name="jokeCategory"]:checked`).value;
            path = `/random?category=${checkedCategory}`;
            break;
        case `search`:
            let jokeSearch = document.querySelector(`#jokeSearch`).value;
            // if(jokeSearch.length<3 || jokeSearch.length>120){
            //     console.log(`Not valid text length`);
            //     return;
            // }
            path = `/search?query=${jokeSearch}`;
    }

    //console.log(path);

    fetch(API+path)
        .then(data => data.json())
        .then(data => {
            if(data.error){
                console.log(data.message);
            } else{
                data.result ? data.result.forEach(item => renderJoke(item)) : renderJoke(data);
            }
        });
})
// getJoke

// renderJoke
const renderJoke = joke => {
    const jokeBlock = document.createElement(`div`);
    jokeBlock.dataset.id = joke.id;
    jokeBlock.className = `joke`;

    let jokeValue = `<p>${joke.value}</p>`;

    let jokeCategory = ``;
    if(joke.categories.length)
        jokeCategory = `<p><b>Category: ${joke.categories.join(`, `)}</b></p>`;

    jokeBlock.innerHTML = jokeValue+jokeCategory;

    const jokeFavBtn = document.createElement(`button`);
    jokeFavBtn.innerHTML = joke.favourite ? `Remove from favourite` : `Add to favourite`;
    jokeFavBtn.addEventListener(`click`, () => {
        let storageJokes = localStorage.getItem(`jokes`); // null || []
        storageJokes = storageJokes ? JSON.parse(storageJokes) : [];

        let jokeExistInStorage = storageJokes.findIndex(item => item.id===joke.id); // -1 || >=0
        console.log(jokeExistInStorage);

        if(jokeExistInStorage === -1){
            // Joke not in favourite
            joke.favourite = true;
            jokeFavBtn.innerHTML = `Remove from favourite`;

            storageJokes.push(joke);
            renderJoke(joke);
        } else{
            // Joke in favourite
            storageJokes.splice(jokeExistInStorage, 1);

            jokesFav.querySelector(`.joke[data-id="${joke.id}"]`).remove();

            let jokeFromForm = jokesForm.querySelector(`.joke[data-id="${joke.id}"]`); // null
            if(jokeFromForm){
                let jokeFromFormBtn = jokeFromForm.querySelector(`button`);
                jokeFromFormBtn.innerHTML = `Add to favourite`;
            }
        }
        

        localStorage.setItem(`jokes`, JSON.stringify(storageJokes));
    })

    jokeBlock.append(jokeFavBtn);

    joke.favourite ? jokesFav.prepend(jokeBlock) : jokesForm.append(jokeBlock);
}
// renderJoke

// getStorageJokes
const getStorageJokes = () => {
    let storageJokes = localStorage.getItem(`jokes`); // null || [];
    if(storageJokes){
        storageJokes = JSON.parse(storageJokes); // [...]
        storageJokes.forEach(joke => renderJoke(joke));
    }
}

getStorageJokes();
// getStorageJokes