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


// Initial display of featured models when the page loads
displayFeaturedModels();