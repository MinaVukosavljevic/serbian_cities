window.onload = function () {

    checkIfLogedIn();
    floatLabel();

    $loginButton.addEventListener('click', onLoginFormSubmit);
    $signOutButton.addEventListener('click', onSignOutHandler);

    
    createStickyNav();
    getWeather();
}






// const cities = ['belgrade', 'novi_sad', 'nis', 'pirot', 'cacak', 'pristina'];

// const citiesWeatherIDs = {
//     belgrade: '792680',
//     novi_sad: '3194360',
//     nis: '787657',
//     pirot: '787050',
//     cacak: '792078',
//     pristina: '787595' // ID for novi pazar, pristina doesn't have one
// }