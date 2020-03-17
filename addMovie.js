// $('#addMovieModal').on('shown.bs.modal', function () {
//     $('#myInput').trigger('focus')
//   })


// function addMovie(newMovie) {
//     console.log(newMovie);
//     // const tokenAccess = sessionStorage.getItem("accessToken");
//     // console.log(tokenAccess);
//     fetch(apiURL, {
//       headers: {
//         // "x-auth-token": tokenAccess,
//         "Content-Type": "application/json"
//       },
//       method: "POST",
//       body: JSON.stringify(newMovie)
//     })
//       .then(res => {
//         if (res.ok) {
//           successAddedMovie();
//         }
//         if (res.status === 403) {
//           alert("You need to be authenticated to be able to create a movie");
//         }
//         return response.json();
//     })
//       .then(data => {
//         console.log(data);
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }