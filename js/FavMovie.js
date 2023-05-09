const favMoviesContainer = document.getElementById("fav-movies-container");
const showFavourites = document.getElementById("favorites-section");
const emptyFavText = document.getElementById("empty-fav-text");

// console.log("a", window.location);
// const pageHref = window.location.search;
// // Construct a new object and pass the page href to URLSearchParams
// const searchParams = new URLSearchParams(pageHref);
// const movieID = searchParams.get("i");
// console.log("i = ", movieID);

// Retrieve imdbID from local storage
let imdbID = localStorage.getItem("imdbID");
console.log("i = ", imdbID);
// Fetch data for the clicked movie
async function fetchMovieData(imdbID) {
  const url = `https://www.omdbapi.com/?i=${imdbID}&apikey=e8e9899f`;
  const response = await fetch(url);
  const data = await response.json();
  // Display the fetched data on the page as required
  // ...
}

fetchMovieData(imdbID);

// // Get the query parameters from the URL
// const urlParams = new URLSearchParams(window.location.search);

// // Get the movie data from the query parameters
// const imdbID = urlParams.get("i");
// const title = urlParams.get("title");
// const year = urlParams.get("year");
// const poster = urlParams.get("poster");

// // Display the movie information
// const movieTitle = document.getElementById("movie-title");
// const movieYear = document.getElementById("movie-year");
// const moviePoster = document.getElementById("movie-poster");

// movieTitle.textContent = title;
// movieYear.textContent = year;
// moviePoster.setAttribute("src", poster);
