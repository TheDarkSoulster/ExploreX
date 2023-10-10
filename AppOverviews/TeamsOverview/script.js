document.querySelector('.launch-app').addEventListener('click', function() {
    // check if da device is Android cuz we don't use apple here. sorry, tim pressure cooker...
    if (/Android/i.test(navigator.userAgent)) {
        // take users to Google Play Store
        window.location.href = 'https://play.google.com/store/apps/details?id=com.microsoft.teams';
    } else {
        // we don't use apple here. too expensive
        alert('Microsoft Teams is available on the Google Play Store. Please install it from there.');
    }
});
