document.addEventListener('DOMContentLoaded', function () {
    var searchInput = document.getElementById('searchquery');
    var datalist = document.getElementById('suggestions');

    searchInput.addEventListener('input', function () {
        var query = searchInput.value;
        datalist.innerHTML = ''; // Clear previous suggestions

        if (query.length > 0) {
            // Fetch search suggestions from Google Autocomplete API
            fetch(`https://suggestqueries.google.com/complete/search?client=chrome&q=${query}`)
                .then(response => response.json())
                .then(data => {
                    var suggestions = data[1];
                    suggestions.forEach(function (suggestion) {
                        var option = document.createElement('option');
                        option.value = suggestion;
                        datalist.appendChild(option);
                    });
                })
                .catch(error => {
                    console.error('Error fetching suggestions:', error);
                });
        }
    });

    searchInput.addEventListener('keydown', function (event) {
        if (event.keyCode === 13) {
            var query = searchInput.value;
            window.location.href = 'https://www.google.com/search?q=' + encodeURIComponent(query);
        }
    });
});
