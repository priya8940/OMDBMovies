



const btnElement = document.getElementById('btn');
const searchInputElement = document.getElementById('search-input');
btnElement.addEventListener('click', async ()=>{
    const searchPattern = searchInputElement.value;
    const respons = await fetch(`https://www.omdbapi.com/?s=${searchPattern}&page=2&apikey=ee731cd5`);
    const data = await respons.json();
    const movieArray = data.Search;
    const container = document.getElementById('search-results');
    for(let movie of movieArray){
        let imgTag = document.createElement('img');
        imgTag.setAttribute('src',movie.Poster);
        let divEle = document.createElement('div');
        divEle.setAttribute('class','result-item');
        divEle.appendChild(imgTag);

        container.appendChild(divEle);
    }
    
})