let movieURL = `https://movies-api-siit.herokuapp.com/movies/`;


let movieID = sessionStorage.getItem("movieID");
function getMovieItem() {
  fetch(movieURL + movieID)
    .then(parseResponse)
    .then(getMovieDetails);
}
function parseResponse(response) {
  return response.json();
}
function getMovieDetails(movie) {
  console.log(movie);
  const posterContainer = document.getElementById("posterDetails");
  const contentContainer = document.getElementById("contentDetails");

  if (movie.Poster != "N/A") {
    posterContainer.innerHTML = `
    <img src='${movie.Poster}' alt="Batman movie poster"/>`;
  } else {
    posterContainer.innerHTML = `
    <img src="./assets/images/marcin-lukasik-uYpOYyJdhRE-unsplash.jpg" alt="Batman"/>`;
  }
  var title = document.createElement("h4");
  title.innerHTML = `Title: ${movie.Title}`;
  var year = document.createElement("p");
  year.innerHTML = `Title: ${movie.Title}`;
  var rated = document.createElement("p");
  rated.innerHTML = `Rated: ${movie.Rated}`;
  var released = document.createElement("p");
  released.innerHTML = `Released: ${movie.Released}`;
  var runtime = document.createElement("p");
  runtime.innerHTML = `Runtime: ${movie.Runtime}`;
  var genre = document.createElement("p");
  genre.innerHTML = `Genre: ${movie.Genre}`;
  var director = document.createElement("p");
  director.innerHTML = `Director: ${movie.Director}`;
  var writer = document.createElement("p");
  writer.innerHTML = `Writer: ${movie.Writer}`;
  var actors = document.createElement("p");
  actors.innerHTML = `Actors: ${movie.Actors}`;
  var plot = document.createElement("p");
  plot.innerHTML = `Plot: ${movie.Plot}`;
  var language = document.createElement("p");
  language.innerHTML = `Language: ${movie.Language}`;
  var country = document.createElement("p");
  country.innerHTML = `Country: ${movie.Country}`;
  var awards = document.createElement("p");
  if(movie.Awards != "N/A"){
  awards.innerHTML = `Awards: ${movie.Awards}`;
  };
  var ratings = document.createElement("p");
    ratings.innerHTML =
      "Source: " +
      movie.Ratings[0].Source +
      " Value: " +
      movie.Ratings[0].Value +
      "<br>";
      if(movie.Ratings[1]) {
        ratings.innerHTML =
      "Source: " +
      movie.Ratings[0].Source +
      " Value: " +
      movie.Ratings[0].Value
      }
  var imdbRating = document.createElement("p");
  if(movie.imdbRating != "N/A"){
  imdbRating.innerHTML = `imbdRating: ${movie.imdbRating}`;
  };
  var imdbVotes = document.createElement("p");
  if(movie.imdbVotes != "N/A") {
  imdbVotes.innerHTML = `imdbVotes: ${movie.imdbVotes}`;
  }
  var imdbID = document.createElement("p");
  if(movie.imdbID != "N/A") {
  imdbID = `imdbID: ${movie.imdbID}`;
  }
  var type = document.createElement("p");
  if(movie.Type != "N/A") {
  type.innerHTML = `Type: ${movie.Type}`;
  }
  var dvd = document.createElement("p");
  if(movie.DVD != "N/A"){
  dvd.innerHTML = `DVD: ${movie.DVD}`;
  }
  var boxOffice = document.createElement("p");
  if(movie.boxOffice != "N/A") {
  boxOffice.innerHTML = `BoxOffice: ${movie.BoxOffice}`;
  }
  var production = document.createElement("p");
  if(movie.Production != "N/A") {
  production.innerHTML = `Production: ${movie.Production}`;
  }

  contentContainer.appendChild(title);
  contentContainer.appendChild(year);
  contentContainer.appendChild(rated);
  contentContainer.appendChild(released);
  contentContainer.appendChild(runtime);
  contentContainer.appendChild(genre);
  contentContainer.appendChild(director);
  contentContainer.appendChild(writer);
  contentContainer.appendChild(actors);
  contentContainer.appendChild(plot);
  contentContainer.appendChild(language);
  contentContainer.appendChild(country);
  contentContainer.appendChild(awards);
  contentContainer.appendChild(ratings);
  contentContainer.appendChild(imdbRating);
  contentContainer.appendChild(imdbVotes);
  // contentContainer.appendChild(imdbID);
  contentContainer.appendChild(type);
  contentContainer.appendChild(dvd);
  contentContainer.appendChild(production);
}
getMovieItem();
