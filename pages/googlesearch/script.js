document.addEventListener('DOMContentLoaded', function () {
    var searchInput = document.getElementById('searchquery');

    searchInput.addEventListener('keydown', function (event) {
        if (event.keyCode === 13) {
            var userInput = searchInput.value;

            // Check if the user input resembles a URL (ends with a valid domain)
            var urlRegex = /^(www\.)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\/[^\s]*)?$/;
            if (urlRegex.test(userInput)) {
                // If it's a URL, redirect the user to the website
                var fullURL = userInput.startsWith('http') ? userInput : 'http://' + userInput;
                window.location.href = fullURL;
            } else {
                // If it's not a URL, perform a Google search
                var searchQuery = encodeURIComponent(userInput);
                window.location.href = 'https://www.google.com/search?q=' + searchQuery;
            }
        }
    });
});
