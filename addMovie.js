let newMovie;
function addMovie() {
  // e.preventDefault();
  newMovie = {
    id: Date.now(),
    Title: document.getElementById("movieTitle").value,
    Year: document.getElementById("movieYear").value,
    Rated: document.getElementById("movieRated").value,
    Released: document.getElementById("movieReleased").value,
    Runtime: document.getElementById("movieRuntime").value,
    Genre: document.getElementById("movieGenre").value,
    Director: document.getElementById("movieDirector").value,
    Writer: document.getElementById("movieWriter").value,
    Actors: document.getElementById("movieActors").value,
    Plot: document.getElementById("moviePlot").value,
    Language: document.getElementById("movieLanguage").value,
    Country: document.getElementById("movieCountry").value,
    Awards: document.getElementById("movieAwards").value,
    Poster: document.getElementById("moviePoster").value
  };
  console.log(newMovie);
  fetch(apiURL, {
    headers: {
      // "x-auth-token": tokenAccess,
      "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify(newMovie)
  })
    .then(response => {
      if (response.status === 403) {
        alert("You need to be authenticated to be able to create a movie");
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.log(error);
    });
  const addMovieForm = document.querySelector(".addMovieForm");
  addMovieForm.reset();
}
const saveMovie = document.querySelector(".saveMovie");
document.addEventListener("DOMContentLoaded", () => {
  saveMovie.addEventListener("click", addMovie);
});

// const tokenAccess = sessionStorage.getItem("accessToken");
// console.log(tokenAccess);
