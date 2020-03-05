// const apiUrl = "https://ancient-caverns-16784.herokuapp.com/movies";
// let paginationUrl = apiUrl + "?take=10&skip=";

// const response = fetch(apiUrl, {method:'GET'})
//     .then(response => {
//         if (response.status ===! 200){

//             throw new Error('Something went wrong.');
//         }
//         return response.json();
//     })
//     .then(data =>  {

//         console.log(data);
//     })
//     .catch(err => console.log(err))

var body = document.querySelector("body");
function getDataFromServer() {
  fetch("https://ancient-caverns-16784.herokuapp.com/movies")
    .then(parseResponse)
    .then(displayMovie);
}
function parseResponse(response) {
  return response.json();
}
function displayMovie(movies) {
  for (var i = 0; i < movies.results.length; i++) {
    var movieItem = movies.results[i];
    createMovie(movieItem);
  }
  console.log(movies);
}

function createMovie(movieItem) {
  var divMovieContainer = document.createElement("div");
  var movieTitle = document.createElement("h1");
  movieTitle.innerHTML = movieItem.Title;
  var movieYear = document.createElement("p");
  movieYear.innerHTML = "Year: " + movieItem.Year;
  var movieImage = document.createElement("img");
  movieImage.src = movieItem.Poster;
  var movieDetails = document.createElement("h3");
  movieDetails.innerHTML = "More movie details:";
  var runtime = document.createElement("p");
  runtime.innerHTML = "Runtime: " + movieItem.Runtime;
  var genre = document.createElement("p");
  genre.innerHTML = "Genre: " + movieItem.Genre;
  var language = document.createElement("p");
  language.innerHTML = "Language: " + movieItem.Language;
  var imdbRating = document.createElement("p");
  imdbRating.innerHTML = "IMDb Rating: " + movieItem.imdbRating;
  var country = document.createElement("p");
  country.innerHTML = "Country: " + movieItem.Country;
  var imdbVotes = document.createElement("p");
  imdbVotes.innerHTML = "IMDb Votes: " + movieItem.imdbVotes;
  var linkToImdb = document.createElement("p");
  var imdbMovieLink = document.createElement("a");
  // imdbMovieLink.setAttribute = ('href', "https://www.imdb.com/title/" + movieItem.imdbID + "/?ref_=nv_sr_srsg_0")    imdbMovieLink.href = "https://www.imdb.com/title/" + movieItem.imdbID + "/?ref_=nv_sr_srsg_0";
  linkToImdb.innerText = "See on IMDb: " + imdbMovieLink;
  divMovieContainer.appendChild(movieTitle);
  divMovieContainer.appendChild(movieYear);
  divMovieContainer.appendChild(movieImage);
  divMovieContainer.appendChild(movieDetails);
  divMovieContainer.appendChild(runtime);
  divMovieContainer.appendChild(genre);
  divMovieContainer.appendChild(imdbRating);
  divMovieContainer.appendChild(language);
  divMovieContainer.appendChild(country);
  divMovieContainer.appendChild(imdbVotes);
  linkToImdb.appendChild(imdbMovieLink);
  divMovieContainer.appendChild(linkToImdb);
  body.append(divMovieContainer);
}
getDataFromServer();
