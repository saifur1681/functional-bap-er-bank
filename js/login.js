document.getElementById("login-button").addEventListener("click", function () {
    // user email.....
    const getUserEmail = document.getElementById("user-email");
    const userEmailValue = getUserEmail.value;

    // user password.....
    const getUserPassword = document.getElementById("user-password");
    const userPasswordValue = getUserPassword.value;

    if (userEmailValue == 'sontan@bap.com' && userPasswordValue == 'secret') {
        window.location.href = 'banking.html';
    }
    else {
        const p = document.createElement('p');
        p.innerText = 'Please enter Valid Email & Password';
        const div = document.getElementById('div');
        div.appendChild(p);

    }

})