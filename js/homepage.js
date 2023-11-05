



const btnElement = document.getElementById('btn');
const searchInputElement = document.getElementById('search-input');
const container = document.getElementById('search-results');
btnElement.addEventListener('click', async ()=>{
    const searchPattern = searchInputElement.value;
    const respons = await fetch(`https://www.omdbapi.com/?s=${searchPattern}&page=2&apikey=ee731cd5`);
    const data = await respons.json();
    const movieArray = data.Search;
    //remove old search from container
    container.innerHTML = "";
    for(let movie of movieArray){
        //creating image element and setting src attribute
        let imgTag = document.createElement('img');
        imgTag.setAttribute('src',movie.Poster);

        //creating div element and setting class result-item
        let divEle = document.createElement('div');
        divEle.setAttribute('class','result-item');

        //adding movie id
        const movieId = movie.imdbID;
        divEle.id = movieId;
        //adding image element as child of div element
        divEle.appendChild(imgTag);

        //putting newly created div element into container
        container.appendChild(divEle);
    }
    
})