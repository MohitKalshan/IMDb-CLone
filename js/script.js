"use strict";
// (function () {
  const searchKeyword = document.getElementById("search");
  const suggestionsContainer = document.getElementById("card-container");
  const favMoviesContainer = document.getElementById("fav-movies-container");
  const emptyText = document.getElementById("empty-search-text");
//   const showFavourites = document.getElementById("favorites-section");
//   const emptyFavText = document.getElementById("empty-fav-text");

//   addToFavDOM();
//   showEmptyText();
  let suggestionList = [];
  let favMovieArray = [];

  searchKeyword.addEventListener("keydown", (event) => {
    if (event.key == "Enter") {
      event.preventDefault();
    }
  });
//   function showEmptyText() {
//     if (favMoviesContainer.innerHTML == "") {
//       emptyFavText.style.display = "block";
//     } else {
//       emptyFavText.style.display = "none";
//     }
//   }

  // Event listner on search
  searchKeyword.addEventListener("keyup", function () {
    let search = searchKeyword.value.trim();
    if (search === "") {
      emptyText.style.display = "block";
      suggestionsContainer.innerHTML = "";
      // clears the previous movies from array
      suggestionList = [];
    } else {
      emptyText.style.display = "none";
      (async () => {
        let data = await fetchMovies(search);
        addToSuggestionContainerDOM(data);
      })();

      // suggestionsContainer.style.display = "flex";
      suggestionsContainer.style.cssText = `
      display: flex;
      // justify-content: space-between;
      flex-wrap:wrap;
      // margin: 3px;
    `;
    }
  });
 
  // Fetches data from api and calls function to add it in
  async function fetchMovies(search) {
    const url = `https://www.omdbapi.com/?i=tt3896198&apikey=e8e9899f&t=${search}`;
    console.log(url)
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      return data;
    } catch (err) {
      console.log(err);
    }
  }

  // Shows in suggestion container DOM
  function addToSuggestionContainerDOM(data) {
    // document.getElementById("empty-fav-text").style.display = "none";
    let isPresent = false;

    // to check if the movie is already present in the suggestionList array
    suggestionList.forEach((movie) => {
      if (movie.Title == data.Title) {
        isPresent = true;
      }
    });

    if (!isPresent && data.Title != undefined) {
      if (data.Poster == "N/A") {
        data.Poster = "./image/not-found.png";
      }
      suggestionList.push(data);
      const movieCard = document.createElement("div");
      movieCard.setAttribute("class", "text-decoration");

      movieCard.innerHTML = `
        <div class="card my-2 mx-2 " data-id = "${data.Title}" style="width: 18rem;">
        <a href="./MovieInfo/MovieInfo.html">
          <img
            src="${data.Poster} "
            class="card-img-top"
            alt="..."
            data-id = "${data.Title} "
            width="150px" height="350px"
          />
          <div class="card-body text-start">
            <h5 class="card-title" >
              <a href="./MovieInfo/MovieInfo.html" data-id = "${data.Title} "> ${data.Title}  </a>
            </h5>
            <p class="card-text">
              <i class="fa-solid fa-star">
                <span id="rating">${data.imdbRating}</span>
              </i>
              <button class="fav-btn mx-2">
                <i class="fa-solid fa-heart add-fav" data-id="${data.Title}"></i>
              </button>
            </p>
          </div>
        </a>
      </div>
    `;
    // add at beginning of suggestion
      suggestionsContainer.prepend(movieCard);
    }
      
}
// )();