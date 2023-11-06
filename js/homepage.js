const btnElement = document.getElementById('btn');
const searchInputElement = document.getElementById('search-input');
const container = document.getElementById('search-results');
const favoriteMovies = [];
btnElement.addEventListener('click', async ()=>{
    const searchPattern = searchInputElement.value;
    const respons = await fetch(`https://www.omdbapi.com/?s=${searchPattern}&page=2&apikey=ee731cd5`);
    const data = await respons.json();
    const movieArray = data.Search;
    //remove old search from container
    container.innerHTML = "";
    for(let movie of movieArray){
        //creating image element and setting src attribute
        let imgEle = document.createElement('img');
        imgEle.setAttribute('src',movie.Poster);

        //creating div element and setting class result-item
        let divEle = document.createElement('div');
        divEle.setAttribute('class','result-item');

        //adding movie id
        divEle.id = movie.imdbID;

        //adding image element as child of div element
        divEle.appendChild(imgEle);

        //creating like element 
        let iEle = document.createElement('i');
        
        //setting classes
        iEle.classList.add('class', "fa-regular")
        iEle.classList.add('class', "fa-heart");
        
        //setting like dislike click listener
        iEle.addEventListener('click', likeOrDislike);
        //inserting like element into div
        divEle.appendChild(iEle);

        //putting newly created div element into container
        container.appendChild(divEle);
    }
    
})

//Liking and disliking function

function likeOrDislike(event){
    const parent = event.target.parentElement;
    const movieId = parent.id;
    if(event.target.classList.contains('favorite')){
        //icon is red, we need to turn it white
        event.target.classList.remove('favorite');
        event.target.classList.remove('fa-solid');
        event.target.classList.add('fa-regular');

        //search movieId in array and remove it
        let ind = -1;
        for(let i=0; i<favoriteMovies.length;i++){
            if(favoriteMovies[i]===movieId){
                ind = i;
            }
        }
        if(ind!=-1){
            favoriteMovies.splice(ind,1);
        }
    }else{
        //icon is white, we need to turn it Red
        event.target.classList.add('favorite');
        event.target.classList.add('fa-solid');
        event.target.classList.remove('fa-regular');
       
        //add movie id to fav array
        favoriteMovies.push(movieId);
    }
    console.log(favoriteMovies);
}