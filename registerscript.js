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
                setsharedUser(user, password);

                loginNotif.innerHTML = "<h4>Login Successful. Welcome " + user + ", you will now" +
                    " be redirected to the Home Page.</h4>";
                loginNotif.style.backgroundColor = "#0f9e27";
                setTimeout(() => { document.location.href = "index.html"; }, 3500);
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
    }
}