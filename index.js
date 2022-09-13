//this will fetch the data and load it up
fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=cbb53a38daad4a38723daab094adb724')
.then ((res) => res.json())
.then((movie) =>  {
    console.log(movie.results, "fetched form database");
    for(let i = 0; i < movie.results.length; i++){
        renderMovies(movie.results[i]);
    }

});
//makes the movie images load 
function renderMovies(movie) {
    let panel = document.querySelector(".genreButton")
    let image = document.createElement("img")
    //span.innerText = movie.title
    image.src = `https://image.tmdb.org/t/p/w185/${movie.poster_path}`
    panel.append(image)

image.addEventListener("click", () => {
    console.log("clicked movie")
    renderDetails(movie)

image.addEventListener("mouseover", () => {

})
})
}
// display when we click the movie images
function renderDetails(movie) {

let movieTitle = document.querySelector("#title")
movieTitle.textContent = movie.title
let language = document.querySelector("#language")
language.innerText =`Original Language: ${movie.original_language}`
let releaseDate = document.querySelector("#release_date")
releaseDate.innerText =  movie.release_date
let voteAverage = document.querySelector("#vote_average")
voteAverage.innerText = movie.vote_average
let description = document.querySelector("#overview")
description.innerText = movie.overview
console.log(movie.title)
}

// add a submit form 
