function displayDayPart() {
    const $dayPartBox = document.querySelector('.day-part');
    const today = new Date();
    const hourNow = today.getHours();

    let dayPart;

    if (hourNow > 21 || hourNow <= 4) {
        dayPart = 'evening';
    } else if (hourNow > 18) {
        dayPart = 'evening';
    } else if (hourNow > 12) {
        dayPart = 'afternoon';
    } else if (hourNow > 4) {
        dayPart = 'morning';
    } else {
        dayPart = 'day';
    }

    $dayPartBox.innerHTML = dayPart;
}