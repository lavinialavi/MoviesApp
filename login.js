// document.getElementById("usenam").addEventListener('input', sendLoginData);
// document.getElementById("pass").addEventListener('input', sendLoginData);

// function prepareDateToPost() {
// 	class User {
// 		constructor() {
// 			this.username =  document.getElementById("usenam").value;
// 			this.password = document.getElementById("pass").value;
	
// //login
// 	sendLoginData (User) {
// 		return $.ajax("/auth/login", {
// 			method:"POST",
// 			data: User,
// 			success:(response) => {
// 				console.log(data);
// 				alert('Welcome, ' + data.username + " !");
// 			},
// 			error:(xhr) => {
// 				const parsedMessage = JSON.parse(xhr.responseText);
// 				alert('STATUS ' + xhr.status + '. ' + parsedMessage.message);
// 			},
// 	});
// 	};
// 		}
// 	}
// }

const myForm= document.getElementById('myForm');

myForm.addEventListener('submit', function (e){
	e.preventDefault();

	const formData = new FormData(this);


	fetch('login.php',{
		method: 'post',
		body: formData

	}).then(function (response){
		return response.text();
	}).then(function (text){
	    console.log(text);

	}).catch(function (error){
		console.error(error);
	})

});
