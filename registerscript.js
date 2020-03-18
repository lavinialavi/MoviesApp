window.onload = function () {


    let sharedData = new Map();

    const submitBtn = document.querySelector('.registerbtn');
    const alreadySignIn = document.querySelector('.already-account');
    const usernameInput = document.getElementsByTagName('input')[0];
    const passwordInput = document.getElementsByTagName('input')[1];
    const passwordRepeat = document.getElementsByTagName('input')[2];
    const loginNotif = document.querySelector('.login-notification');

    submitBtn.addEventListener('click', (event) => {
        event.preventDefault();
        var passPattern = /^[A-Za-z0-9]\w{5,14}$/;
        var user = usernameInput.value;
        var password = passwordInput.value;
        var repeatPassword = passwordRepeat.value;

        if (password.match(passPattern)) {

            if (password == repeatPassword) {
<<<<<<< HEAD
                let apiResponse = setRegisteredUser(user, password);
                if (apiResponse === true) {
                    loginNotif.innerHTML = "<h4>Login Successful. Welcome " + user + ", you will now" +
                        " be redirected to the Home Page.</h4>";
                    loginNotif.style.backgroundColor = "#0f9e27";
                    setTimeout(() => { document.location.href = "index.html"; }, 3500);
                } else if (apiResponse === false) {
                    loginNotif.innerHTML = "<h4>Register fail</h4>";
                    loginNotif.style.backgroundColor = "#0f9e27";
                } else {
                    loginNotif.innerHTML = apiResponse;
                }

                
=======
                setsharedUser(user, password);

                loginNotif.innerHTML = "<h4>Login Successful. Welcome " + user + ", you will now" +
                    " be redirected to the Home Page.</h4>";
                loginNotif.style.backgroundColor = "#0f9e27";
                setTimeout(() => { document.location.href = "index.html"; }, 3500);
>>>>>>> 231af09eded85b78e20529b7c9d70cee7d3f8acb
            } else {
                loginNotif.innerHTML = "<h4>Password doesn't match!</h4>";
                loginNotif.style.backgroundColor = "#ba1a14";
                setTimeout(() => { loginNotif.innerHTML = ""; loginNotif.style.backgroundColor = "#000"; }, 3500);
            }
        }
        else {
            loginNotif.innerHTML = "<h4>Password must be at least 6 characters and maximum 14!</h4>"
            loginNotif.style.backgroundColor = "#ba1a14";
            setTimeout(() => {

                loginNotif.innerHTML = "";
                loginNotif.style.backgroundColor = "#000";
            }, 3500);
        }
    });

<<<<<<< HEAD
    function setRegisteredUser(username, password) {
        //add api call
        let apiResponse = false;
        $.ajax("https://movies-api-siit.herokuapp.com/auth/register", {
            method:"POST",
            data: {
                'username': username,
                'password': password
            },
            success:(response) => {
                console.log(response);
                //save auth token to storage
                //save user name to storage
                apiResponse = true;
            },
            error:(xhr) => {
                console.log(xhr);
                if (xhr.status == 409) {
                    apiResponse = xhr.responseJson.message;
                    return;
                }

                apiResponse = false;
            }
				});

        return apiResponse;
        // registeredUser.set(username, password);
=======
    alreadySignIn.addEventListener('click', (event) => {
        setPreviousPage();
    });

    function setsharedUser(username, password) {
        sharedData.set(username, password);
    }

    function getsharedData(username) {
        return sharedData.get(username);
    }

     function setPreviousPage(){
        sessionStorage.setItem("register", "register");
>>>>>>> 231af09eded85b78e20529b7c9d70cee7d3f8acb
    }

    // function getRegisteredUser(username) {
    //     return registeredUser.get(username);
    // }
}