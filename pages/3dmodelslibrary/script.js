function searchModels() {
    const searchInput = document.getElementById('searchInput').value;
    const modelList = document.getElementById('modelList');
    modelList.innerHTML = ''; // Clear previous search results

    // Fetch 3D models from Sketchfab API based on search input
    fetch(`https://api.sketchfab.com/v3/search?type=models&q=${searchInput}`)
        .then(response => response.json())
        .then(data => {
            data.results.forEach(model => {
                // Create a card for each 3D model
                const modelCard = document.createElement('div');
                modelCard.className = 'model-card';

                // Create title element
                const title = document.createElement('div');
                title.className = 'model-title';
                title.textContent = model.name;
                modelCard.appendChild(title);

                // Create description element (limited to 150 characters with "..." if exceeded)
                const description = document.createElement('div');
                description.className = 'model-description';
                description.textContent = model.description ? (model.description.length > 150 ? model.description.slice(0, 150) + '...' : model.description) : 'No description available';
                
                // Check if the description needs to fade out
                if (model.description && model.description.length > 150) {
                    description.classList.add('fade-out');
                }

                modelCard.appendChild(description);

                // Add "View Model" button
                const viewModelButton = document.createElement('button');
                viewModelButton.textContent = 'View Model';
                viewModelButton.className = 'view-model-button';
                viewModelButton.addEventListener('click', () => {
                    window.open(`https://sketchfab.com/models/${model.uid}/embed`, '_blank');
                });
                modelCard.appendChild(viewModelButton);

                // Add the model card to the model list
                modelList.appendChild(modelCard);
            });
        })
        .catch(error => console.error(error));
}
