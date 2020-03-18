function deleteMovie() {
  const movieID = sessionStorage.getItem("movieID");
  const accessToken = sessionStorage.getItem("accessToken");
  fetch(apiURL + "/" + movieID, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": accessToken
    }
  })
    .then(response)
    .catch(error);
}

function response(response) {
  if (response.status == 403) {
    alert("You need to be authenticated to delete this movie");
  } else if (response.status !== 200 && response.status !== 403) {
    throw new Error("Network response was not ok");
  } else {
    alert("The movie was deleted");
    getDataFromServer(apiURL);
  }
}
