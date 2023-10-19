const modelsContainer = document.getElementById('modelsContainer');
const searchInput = document.getElementById('searchInput');

const SKETCHFAB_API_URL = 'https://api.sketchfab.com/v3/models';

async function fetchFeaturedModels() {
    try {
        const response = await fetch(`${SKETCHFAB_API_URL}?featured=true`);
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Error fetching featured models:', error);
        return [];
    }
}

async function fetchModels(searchTerm) {
    try {
        const response = await fetch(`${SKETCHFAB_API_URL}?search=${searchTerm}`);
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Error fetching models:', error);
        return [];
    }
}

async function loadModels() {
    const models = await fetchFeaturedModels();
    displayModels(models);
}

function displayModels(models) {
    modelsContainer.innerHTML = '';
    models.forEach(model => {
        const modelContainer = document.createElement('div');
        modelContainer.className = 'model-container';

        const modelThumbnail = document.createElement('img');
        modelThumbnail.src = model.thumbnails.images[0].url;
        modelThumbnail.alt = model.name;

        const modelTitle = document.createElement('h3');
        modelTitle.textContent = model.name;

        const viewModelButton = document.createElement('button');
        viewModelButton.className = 'view-model-button';

        const eyeIcon = document.createElement('i');
        eyeIcon.className = 'fas fa-eye';

        viewModelButton.appendChild(eyeIcon);
        viewModelButton.appendChild(document.createTextNode(' View Model'));

        viewModelButton.addEventListener('click', () => {
            window.open(`https://sketchfab.com/models/${model.uid}/embed`, '_blank');
        });

        modelContainer.appendChild(modelThumbnail);
        modelContainer.appendChild(modelTitle);
        modelContainer.appendChild(viewModelButton);
        modelsContainer.appendChild(modelContainer);
    });
}

loadModels(); // Load featured models by default

searchInput.addEventListener('input', async () => {
    const searchTerm = searchInput.value.trim();
    const models = await fetchModels(searchTerm);
    displayModels(models);
});

function performSearch() {
    const searchTerm = searchInput.value.trim();
    if (searchTerm === '') {
        // Handle empty search term if needed
        return;
    }

    fetchModels(searchTerm)
        .then(models => {
            displayModels(models);
        })
        .catch(error => {
            console.error('Error performing search:', error);
        });
}

searchButton.addEventListener('click', performSearch);

searchInput.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
        performSearch();
    }
});