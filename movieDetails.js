let movieURL = `https://movies-api-siit.herokuapp.com/movies/`;


let movieID = sessionStorage.getItem("movieID");
function getMovieItem() {
  fetch(movieURL + movieID)
    .then(parseResponse)
    .then(getMovieDetails)
    .catch(error);
}
function parseResponse(response) {
  if (response.status !== 200) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}
function error(error) {
  console.error('There has been a problem with your fetch operation:', error);
}
function getMovieDetails(movie) {
  console.log(movie);
  const titleContainer = document.getElementById("titleDetails");
  const posterContainer = document.getElementById("posterDetails");
  const contentContainer = document.getElementById("contentDetails");
  if (movie.Poster != "N/A") {
    posterContainer.innerHTML = `
    <img src='${movie.Poster}' alt="Batman movie poster"/>`;
  } else {
    posterContainer.innerHTML = `
    <img src="./assets/images/marcin-lukasik-uYpOYyJdhRE-unsplash.jpg" alt="Batman"/>`;
  }
  
  let title = document.createElement("h4");
  title.innerHTML = ` ${movie.Title} (${movie.Year})`;
  titleContainer.appendChild(title);
  var plot = document.createElement("h6");
  plot.innerHTML = movie.Plot;
  contentContainer.appendChild(plot);
  var rated = document.createElement("p");
  rated.innerHTML = `Rated: ${movie.Rated}`;
  contentContainer.appendChild(rated);
  var released = document.createElement("p");
  released.innerHTML = `Released: ${movie.Released}`;
  contentContainer.appendChild(released);
  var runtime = document.createElement("p");
  runtime.innerHTML = `Runtime: ${movie.Runtime}`;
  contentContainer.appendChild(runtime);
  var genre = document.createElement("p");
  genre.innerHTML = `Genre: ${movie.Genre}`;
  contentContainer.appendChild(genre);
  var director = document.createElement("p");
  director.innerHTML = `Director: ${movie.Director}`;
  contentContainer.appendChild(director);
  var writer = document.createElement("p");
  writer.innerHTML = `Writer: ${movie.Writer}`;
  contentContainer.appendChild(writer);
  var actors = document.createElement("p");
  actors.innerHTML = `Actors: ${movie.Actors}`;
  contentContainer.appendChild(actors);
  
  var language = document.createElement("p");
  language.innerHTML = `Language: ${movie.Language}`;
  contentContainer.appendChild(language);
  var country = document.createElement("p");
  country.innerHTML = `Country: ${movie.Country}`;
  contentContainer.appendChild(country);
  
  var awards = document.createElement("p");
  if(movie.Awards != "N/A"){
    awards.innerHTML = `Awards: ${movie.Awards}`;
  };
  contentContainer.appendChild(awards);
  
  const array = movie.Ratings;
array.forEach((element) => {
  var ratings = document.createElement("div");
  ratings.innerHTML =
  `Ratings by:  
  ${element.Source} : 
  ${element.Value} `
  contentContainer.appendChild(ratings);
})
var metascore = document.createElement("p");
if(movie.Metascore != "N/A") {
metascore.innerHTML = `Metascore: ${movie.Metascore}`
};
contentContainer.appendChild(metascore);
var imdbRating = document.createElement("p");
if(movie.imdbRating != "N/A"){
  imdbRating.innerHTML = `imbdRating: ${movie.imdbRating}`;
};
contentContainer.appendChild(imdbRating);
var imdbVotes = document.createElement("p");
if(movie.imdbVotes != "N/A") {
  imdbVotes.innerHTML = `imdbVotes: ${movie.imdbVotes}`;
}
contentContainer.appendChild(imdbVotes);
var imdbID = document.createElement("p");
if(movie.imdbID != "N/A") {
  imdbID = `imdbID: ${movie.imdbID}`;
}
// contentContainer.appendChild(imdbID);
var type = document.createElement("p");
if(movie.Type != "N/A") {
  type.innerHTML = `Type: ${movie.Type}`;
}
contentContainer.appendChild(type);
var dvd = document.createElement("p");
if(movie.DVD != "N/A"){
  dvd.innerHTML = `DVD: ${movie.DVD}`;
}
contentContainer.appendChild(dvd);
var boxOffice = document.createElement("p");
if(movie.boxOffice != "N/A") {
  boxOffice.innerHTML = `BoxOffice: ${movie.BoxOffice}`;
}

var production = document.createElement("p");
if(movie.Production != "N/A") {
  production.innerHTML = `Production: ${movie.Production}`;
}
contentContainer.appendChild(production);

}
getMovieItem();
