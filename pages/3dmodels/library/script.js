// Function to create a model card element
function createModelCard(model) {
    if (!model.description) {
        // Skip models with no description
        return null;
    }

    const modelCard = document.createElement('div');
    modelCard.className = 'model-card';

    // Add title of the model
    const modelTitle = document.createElement('div');
    modelTitle.className = 'model-title';
    modelTitle.textContent = model.name;
    modelCard.appendChild(modelTitle);

    // Limit description to 100 characters
    const limitedDescription = model.description.length > 100 ? model.description.substring(0, 100) + '...' : model.description;
    const modelDescription = document.createElement('div');
    modelDescription.className = 'model-description';
    modelDescription.textContent = limitedDescription;
    modelCard.appendChild(modelDescription);

    // Add "View Model" button
    const viewModelButton = document.createElement('div');
    viewModelButton.className = 'view-model-button';
    viewModelButton.textContent = 'View Model';
    modelCard.appendChild(viewModelButton);

    // Embed Sketchfab 3D viewer link on button click
    viewModelButton.addEventListener('click', () => {
        // Create a transition overlay
        const transitionOverlay = document.createElement('div');
        transitionOverlay.className = 'transition-overlay';
        document.body.appendChild(transitionOverlay);

        // Wait for 1 second (1000 milliseconds) before redirecting to the embed screen
        setTimeout(() => {
            // Redirect to the embed screen using the model's UID
            window.open(`https://sketchfab.com/models/${model.uid}/embed`, '_blank');
        }, 1000);
    });

    return modelCard;
}

// Function to arrange model cards in two rows
function arrangeCardsInTwoRows() {
    const modelList = document.getElementById('modelList');
    const modelCards = Array.from(modelList.querySelectorAll('.model-card'));

    modelCards.forEach((card, index) => {
        if (index % 2 === 0) {
            card.classList.add('even');
        } else {
            card.classList.add('odd');
        }
    });
}

// Function to handle search and transition
function searchModels(event) {
    if (event.key === 'Enter') {
        const searchInput = document.getElementById('searchInput').value.toLowerCase();
        const modelList = document.getElementById('modelList');
        modelList.innerHTML = ''; // Clear previous search results

        // Fetch 3D models from Sketchfab API based on search input
        fetch(`https://api.sketchfab.com/v3/search?type=models&q=${searchInput}`)
            .then(response => response.json())
            .then(data => {
                if (data.results.length > 0) {
                    data.results.forEach(model => {
                        // Create a card container for each 3D model
                        const modelCard = createModelCard(model);
                        // Add the model card to the model list if it's not null
                        if (modelCard) {
                            modelList.appendChild(modelCard);
                        }
                    });
                    // Arrange cards in two rows after adding them to the DOM
                    arrangeCardsInTwoRows();
                } else {
                    console.log("No search results found.");
                }
            })
            .catch(error => console.error(error));
    }
}

// Add event listener for 'keydown' event on the search input field
document.getElementById('searchInput').addEventListener('keydown', searchModels);
