const apiURL = "https://movies-api-siit.herokuapp.com/movies";
let next = null; //nextPage
let prev = null; //previousPage
let first = "https://movies-api-siit.herokuapp.com/movies?take=10&skip=0";
let last = "https://movies-api-siit.herokuapp.com/movies?take=10&skip=90";
let pageNr;
let nrOfPages;





function getDataFromServer(param) {
  fetch(param)
    .then(parseResponse)
    .then(displayMovie);
}
function parseResponse(response) {
  return response.json();
}
function displayMovie(movies) {
    pageNr = movies.pagination.currentPage;
    nrOfPages = movies.pagination.numberOfPages;
    updatePageNumber(pageNumber, nrOfPages);
    next = movies.pagination.links.next;
    prev = movies.pagination.links.prev;
    disablePaginationButton();
    emptyContainer(movieList);
  for (var i = 0; i < movies.results.length; i++) {
    var movie = movies.results[i];
    createMovieItem(movie);
  }
  console.log(movies);
}
document.getElementById('movieList');
// function createMovie(movieItem) {
//   var divMovieContainer = document.createElement("div");
//   var movieTitle = document.createElement("h1");
//   movieTitle.innerHTML = movieItem.Title;
//   var movieYear = document.createElement("p");
//   movieYear.innerHTML = "Year: " + movieItem.Year;
//   var movieImage = document.createElement("img");
//   movieImage.src = movieItem.Poster;
//   var movieDetails = document.createElement("h3");
//   movieDetails.innerHTML = "More movie details:";
//   var runtime = document.createElement("p");
//   runtime.innerHTML = "Runtime: " + movieItem.Runtime;
//   var genre = document.createElement("p");
//   genre.innerHTML = "Genre: " + movieItem.Genre;
//   var language = document.createElement("p");
//   language.innerHTML = "Language: " + movieItem.Language;
//   var imdbRating = document.createElement("p");
//   imdbRating.innerHTML = "IMDb Rating: " + movieItem.imdbRating;
//   var country = document.createElement("p");
//   country.innerHTML = "Country: " + movieItem.Country;
//   var imdbVotes = document.createElement("p");
//   imdbVotes.innerHTML = "IMDb Votes: " + movieItem.imdbVotes;
//   var linkToImdb = document.createElement("p");
//   var imdbMovieLink = document.createElement("a");
//   // imdbMovieLink.setAttribute = ('href', "https://www.imdb.com/title/" + movieItem.imdbID + "/?ref_=nv_sr_srsg_0")    imdbMovieLink.href = "https://www.imdb.com/title/" + movieItem.imdbID + "/?ref_=nv_sr_srsg_0";
//   linkToImdb.innerText = "See on IMDb: " + imdbMovieLink;
//   divMovieContainer.appendChild(movieTitle);
//   divMovieContainer.appendChild(movieYear);
//   divMovieContainer.appendChild(movieImage);
//   divMovieContainer.appendChild(movieDetails);
//   divMovieContainer.appendChild(runtime);
//   divMovieContainer.appendChild(genre);
//   divMovieContainer.appendChild(imdbRating);
//   divMovieContainer.appendChild(language);
//   divMovieContainer.appendChild(country);
//   divMovieContainer.appendChild(imdbVotes);
//   linkToImdb.appendChild(imdbMovieLink);
//   divMovieContainer.appendChild(linkToImdb);
//   body.append(divMovieContainer);
// }
// getDataFromServer();

function createMovieItem(movie) {
  const itemContainer = document.createElement("div");
  itemContainer.classList.add("movie-item");
 
  itemContainer.innerHTML = `
    <div class="card h-100 bg-warning stretched-link">
    <img class="poster card-img-top" src='${movie.Poster}' alt="Batman movie poster"/>
    <div class="card-body">
      <h3 class="movieItem-Title card-title">${movie.Title}</h3>
      <p class="movieItem-details card-text">${movie.Year}, ${movie.Genre}</p>
      <p class="movieItem-details card-text">IMDB Rating: ${movie.imdbRating}</p>
      </div>
    </div>`;
  movieList.appendChild(itemContainer);
  
};

getDataFromServer(apiURL);
