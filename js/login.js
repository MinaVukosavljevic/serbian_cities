const $loginForm = document.querySelector('.login');
const $usernameInput = document.querySelector('#username');
const $emailInput = document.querySelector('#email');
const $displayError = document.querySelector('.display-error');
const $loginButton = document.querySelector('.login button');
const $signOutButton = document.querySelector('.sign-out');


function onLoginFormSubmit(event) {

    // prevent default
    event.preventDefault();

    // collect data
    const loginData = collectLoginData();

    // validate data
    validateLoginForm(loginData);

    // if valid, creat cookie with username
    if (validateLoginForm(loginData)) setCookie(loginData.username);

    // if valid, display the home page
    if (validateLoginForm(loginData)) hideLoginPage();

    // reset form
    $loginForm.reset();
}

function collectLoginData() {
    return {
        username: $usernameInput.value.trim(),
        email: $emailInput.value.trim()
    }
}

function validateLoginForm(dataObj) {
    const username = dataObj.username;
    const email = dataObj.email;
    let errorMsg;

    // all fields are required
    if (!checkAllFields(username, email)) {
        errorMsg = 'All fields are required';
        $displayError.innerHTML = errorMsg;
        return false;
    }

    // username is single word, with minimum 4 characters
    if (!checkUsername(username)) {
        errorMsg = 'Username has to be a single word with minimum 4 characters';
        $displayError.innerHTML = errorMsg;
        return false;
    }

    // email has to be in form 'aa@aa.aa'
    if (!checkEmail(email)) {
        errorMsg = 'Email address is not valid';
        $displayError.innerHTML = errorMsg;
        return false;
    }

    $displayError.innerHTML = '';
    return true;
}

function checkAllFields(username, email) {
    if (username && email) return true;
    return false;
}

function checkUsername(username) {
    // get array with words from input
    const arrayOfWords = username.split(/\s+/g);

    // check if there is more than one word
    if (arrayOfWords.length != 1) {
        return false;
        // check if there is less than 4 characters
    } else if (username.length < 4) {
        return false;
    } else {
        return true;
    }
}

function checkEmail(email) {
    const emailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])+$/i;

    return emailRegex.test(email);
}



/*** Cookies ***/

function setCookie(username) {
    let time = new Date();
    time.setTime(time.getTime() + (7 * 24 * 60 * 60 * 1000));

    document.cookie = 'username=' + username + ';expires=' + time.toUTCString() + ';path=/';
}

function getCookie() {
    let cookies = decodeURIComponent(document.cookie);
    const cookiesArr = cookies.split(';');

    for (let i = 0; i < cookiesArr.length; i++) {
        let currentCookie = cookiesArr[i];

        if (currentCookie.charAt(0) === ' ') {
            currentCookie = currentCookie.substring(1);
        }
        currentCookie = currentCookie.split('=');

        if (currentCookie[0] === 'username') {
            return currentCookie[1];
        }
    }

    return 'guest';
}

function deleteAllCookies() {
    const cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}

/***   ***/

function hideLoginPage() {
    document.querySelector('.overlay-login').classList.add('hidden');
    displayUsername();
    displayDayPart();
}

function displayLoginPage() {
    document.querySelector('.overlay-login').classList.remove('hidden');
}

function displayUsername() {
    const $username = document.querySelector('.user-name');
    $username.innerHTML = getCookie();
}

function onSignOutHandler() {
    deleteAllCookies();
    displayLoginPage();
}


function checkIfLogedIn() {
    const cookie = getCookie();

    if (cookie === 'guest') {
        displayLoginPage();
    } else {
        hideLoginPage();
    }
}