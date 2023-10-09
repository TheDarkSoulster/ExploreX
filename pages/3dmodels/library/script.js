// Function to fetch and display search results in real time (cuz its fancy)
function searchModels(event) {
    // Check if the Enter key is pressed (also cuz its fancy)
    if (event.key === 'Enter') {
        const searchInput = document.getElementById('searchInput').value.toLowerCase();
        const modelList = document.getElementById('modelList');
        modelList.innerHTML = '';

        // Use Da API
        fetch(`https://api.sketchfab.com/v3/search?type=models&q=${searchInput}`)
            .then(response => response.json())
            .then(data => {
                data.results.forEach(model => {
                    // Create a card container for each 3D model cuz its fancy
                    const modelCard = createModelCard(model);
                    // Add the model card to the model list if it's not null
                    if (modelCard) {
                        modelList.appendChild(modelCard);
                    }
                });
                // Arrange cards in two rows after adding them to the DOM
                arrangeCardsInTwoRows();
            })
            .catch(error => console.error(error));
    }
}

// Add event listener for 'keydown' event on the search input field
document.getElementById('searchInput').addEventListener('keydown', searchModels);
