const apiKey = '25af9fac593d4fff869be23160fb9bb4';
const searchInput = document.getElementById('searchInput');
const modelsContainer = document.getElementById('modelsContainer');

searchInput.addEventListener('change', () => {
    const searchTerm = searchInput.value;
    fetch(`https://api.sketchfab.com/v3/search?type=models&q=${searchTerm}&token=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            displayModels(data.results);
        })
        .catch(error => console.error(error));
});

const SKETCHFAB_API_URL = 'https://api.sketchfab.com/v3/models';

async function fetchModels() {
    try {
        const response = await fetch('https://api.sketchfab.com/v3/models');
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Error fetching models:', error);
        return [];
    }
}

async function displayFeaturedModels() {
    const featuredModels = await fetchFeaturedModels();
    displayModels(featuredModels);
}

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.trim();
    if (searchTerm === '') {
        displayFeaturedModels();
    } else {
        // Perform search logic based on the user's input
        // You can implement search functionality here if needed
    }
});

function displayModels(models) {
    modelsContainer.innerHTML = '';

    models.forEach(model => {
        const modelContainer = document.createElement('div');
        modelContainer.className = 'model-container';

        const modelImage = new Image();
        modelImage.src = model.thumbnails.images[0].url; // Low-resolution thumbnail URL
        modelImage.alt = model.name;

        modelImage.onload = function () {
            // Replace the low-resolution image with high-resolution image
            modelImage.src = model.thumbnails.images[1].url; // High-resolution thumbnail URL
        };

        const modelTitle = document.createElement('h3');
        modelTitle.textContent = model.name;

        modelContainer.appendChild(modelImage);
        modelContainer.appendChild(modelTitle);
        modelsContainer.appendChild(modelContainer);
    });
}

async function loadAndDisplayModels() {
    const models = await fetchModels();
    displayModels(models);
}

loadAndDisplayModels();


// Initial display of featured models when the page loads
displayFeaturedModels();