document.getElementById("usenam").addEventListener('input', prepareDateToPost);
document.getElementById("pass").addEventListener('input', prepareDateToPost);

function prepareDateToPost() {
	class User {
		constructor() {
			this.username =  document.getElementById("usenam").value;
			this.password = document.getElementById("pass").value;
		
// //login
// 	sendLoginData (User); {
// 		return $.ajax("https://movies-api-siit.herokuapp.com/auth/login", {
// 			method:"POST",
// 			data: User,
// 			success:(response) => {
// 				console.log(data);
// 				alert('Welcome, ' + data.username + " !");
// 			},
// 			error:(xhr) => {
// 				const parsedMessage = JSON.parse(xhr.responseText);
// 				alert('STATUS ' + xhr.status + '. ' + parsedMessage.message);
// 			}
// 	})
// 	}
// 		}
// 	}
// }

// const myForm= document.getElementById('myForm');

// myForm.addEventListener('submit', function (e){
// 	e.preventDefault();

// 	const formData = new FormData(this);


// 	fetch('login.php',{
// 		method: 'post',
// 		body: formData

// 	}).then(function (response){
// 		return response.text();
// 	}).then(function (text){
// 	    console.log(text);

// 	}).catch(function (error){
// 		console.error(error);
// 	})

// })
// 		}
// 	}


const data = { username: 'example' };

fetch('https://movies-api-siit.herokuapp.com/auth/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(User),
})
.then((response) => response.json())
.then((data) => {
  console.log('Success:', User);
})
.catch((error) => {
  console.error('Error:', User);
});
		}
	}
}