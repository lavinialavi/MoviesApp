

$("#logInSubmit").on('click', function(){doLogin();});
updateUserBtn();


function doLogin()
{
	console.log("dddd");
	var data = {
		"username": document.getElementById("usenam").value,
		"password": document.getElementById("pass").value
	};
	console.log(data);


	jQuery.ajax("https://movies-api-siit.herokuapp.com/auth/login", {
		method:"POST",
		data: data,
		success:(response) => {
			console.log(data);
			alert('Welcome, ' + data.username + " !");
			saveUserData(data.username, response.accessToken);
			//close modal
		},
		error:(xhr) => {
			const parsedMessage = JSON.parse(xhr.responseText);
			alert('STATUS ' + xhr.status + '. ' + parsedMessage.message);
		}
	});
}


function saveUserData(username, authToken)
{

}

function getUserData()
{
	data = {
		username: 'gigi',
		token: 'asd'
	}

	return data;
}

function updateUserBtn()
{
	let userData = getUserData();
if (userData) {
	//add welcome msg
	//show logout btn
	//hide login btn
	
} else {
	//remove welcome
	//show login btn
	//hide logout btn
}
}