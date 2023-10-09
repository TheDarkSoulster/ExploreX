document.querySelector('.launch-app').addEventListener('click', function() {
    // Check if the device is Android
    if (/Android/i.test(navigator.userAgent)) {
        try {
            // Use Android Intents to launch Microsoft Teams
            var intent = 'intent://com.microsoft.teams/.MainActivity#Intent;scheme=msteams;package=com.microsoft.teams;end;';
            window.location.href = intent;
        } catch (error) {
            // Code to handle errors
            console.error('Error launching Microsoft Teams:', error);
            alert('Error launching Microsoft Teams.');
        }
    } else {
        // Alert if Microsoft Teams ain't installed on the device, or it is used on another platform
        alert('Microsoft Teams is not supported on this device.');
    }
});
