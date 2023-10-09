// Function to create a model card element
function createModelCard(model) {
    if (!model.description || model.description.length > 100) {
        // Skip models with no description or descriptions longer than 100 characters
        return null;
    }

    const modelCard = document.createElement('div');
    modelCard.className = 'model-card';

    // Add title of the model
    const modelTitle = document.createElement('div');
    modelTitle.className = 'model-title';
    modelTitle.textContent = model.name;
    modelCard.appendChild(modelTitle);

    // Add description of the model (limited to 100 characters)
    const modelDescription = document.createElement('div');
    modelDescription.className = 'model-description';
    modelDescription.textContent = model.description;
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
            // Remove the transition overlay after redirection
            document.body.removeChild(transitionOverlay);
        }, 1000);
    });

    return modelCard;
}

// Function to handle search and display search results
async function searchModels(event) {
    if (event.key === 'Enter') {
        const searchInput = document.getElementById('searchInput').value.toLowerCase();
        const modelList = document.getElementById('modelList');
        modelList.innerHTML = ''; // Clear previous search results

        try {
            const response = await fetch(`https://api.sketchfab.com/v3/search?type=models&q=${searchInput}`);
            const data = await response.json();

            if (data.results.length > 0) {
                data.results.forEach(model => {
                    // Create a card container for each 3D model
                    const modelCard = createModelCard(model);
                    // Add the model card to the model list if it's not null
                    if (modelCard) {
                        modelList.appendChild(modelCard);
                    }
                });
            } else {
                console.log("No search results found.");
            }
        } catch (error) {
            console.error(error);
        }
    }
}

// Add event listener for 'keydown' event on the search input field
document.getElementById('searchInput').addEventListener('keydown', searchModels);
