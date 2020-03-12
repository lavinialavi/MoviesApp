const apiURL = "https://movies-api-siit.herokuapp.com/movies";
let next = null; //nextPage
let prev = null; //previousPage
let first = "https://movies-api-siit.herokuapp.com/movies?take=10&skip=0";
let last = "https://movies-api-siit.herokuapp.com/movies?take=10&skip=90";
let pageNr;
let nrOfPages;

function showLoader() {
  var loader = document.getElementsByClassName("loader")[0];
  loader.classList.add("show");
}

function hideLoader() {
  var loader = document.getElementsByClassName("loader")[0];
  loader.classList.remove("show");
}

function getDataFromServer(param) {
  showLoader();
  fetch(param)
    .then(parseResponse)
    .then(displayMovie)
    .catch(error)
    .finally(hideLoader);
}
function parseResponse(response) {
  if (response.status !== 200) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}
function error(error) {
  var errorContainer = document.getElementById("error");
  errorContainer.innerText = "Error: " + JSON.stringify(error);
}
function removeError(){
  var errorContainer = document.getElementById("error");
  errorContainer.innerText = "";
};
// function error(error) {
//   console.error('There has been a problem with your fetch operation:', error);
// }
function displayMovie(movies) {
  pageNr = movies.pagination.currentPage;
  nrOfPages = movies.pagination.numberOfPages;
  updatePageNumber(pageNumber, nrOfPages);
  next = movies.pagination.links.next;
  prev = movies.pagination.links.prev;
  disablePaginationButton();
  emptyContainer(movieList);
  removeError();
  for (var i = 0; i < movies.results.length; i++) {
    var movie = movies.results[i];
    createMovieItem(movie);
  }
  console.log(movies);
}
document.getElementById("movieList");

function setSessionId(movie) {
  sessionStorage.setItem("movieID", movie._id);
}

function createMovieItem(movie) {
  const itemContainer = document.createElement("div");
  itemContainer.classList.add("movie-item");
  if (movie.Poster != "N/A") {
    itemContainer.innerHTML = `
    <div class="card h-100 bg-warning">
    <img class="poster card-img-top" src='${movie.Poster}' alt="Batman movie poster"/>
    <div class="card-body">
    <h3 class="movieItem-Title card-title">${movie.Title}</h3>
    <p class="movieItem-details card-text">${movie.Year}, ${movie.Genre}</p>
    <p class="movieItem-details card-text">IMDB Rating: ${movie.imdbRating}</p>
    <a href="movieDetails.html" class="stretched-link movieDetailsLink"/a>
      </div>
    </div>`;
  } else {
    itemContainer.innerHTML = `
  <div class="card h-100 bg-warning">
  <img class="poster card-img-top" src='./assets/images/marcin-lukasik-uYpOYyJdhRE-unsplash.jpg' alt="Batman"/>
  <div class="card-body">
  <h3 class="movieItem-Title card-title">${movie.Title}</h3>
  <p class="movieItem-details card-text">${movie.Year}, ${movie.Genre}</p>
  <p class="movieItem-details card-text">IMDB Rating: ${movie.imdbRating}</p>
  <a href="movieDetails.html" class="stretched-link"/a>
    </div>
  </div>`;
  }
  movieList.appendChild(itemContainer);
  
  let a = document.querySelector(".movieDetailsLink");
  a.addEventListener("click", setSessionId(movie));
}
  // });
getDataFromServer(apiURL);
