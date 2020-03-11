document.getElementById("usenam").addEventListener('input', sendLoginData);
document.getElementById("pass").addEventListener('input', sendLoginData);

function prepareDateToPost() {
	class User {
		constructor() {
			this.username =  document.getElementById("usenam").value;
			this.password = document.getElementById("pass").value;
	
//login
	sendLoginData (User) {
		return $.ajax("https://ancient-caverns-16784.herokuapp.com/auth/login", {
			method:"POST",
			data: User,
			success:(response) => {
				console.log(data);
				alert('Welcome, ' + data.username + " !");
			},
			error:(xhr) => {
				const parsedMessage = JSON.parse(xhr.responseText);
				alert('STATUS ' + xhr.status + '. ' + parsedMessage.message);
			},
	});
	};
		}
	}
}