const apiKey = '25af9fac593d4fff869be23160fb9bb4';
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const modelsContainer = document.getElementById('modelsContainer');
const modelPopup = document.getElementById('modelPopup');
const modelIframe = document.getElementById('modelIframe');
const closeButton = document.querySelector('.close-button');
const backToTopButton = document.getElementById("backToTopBtn");
const blacklist = ['Blacklisted Model 1', 'Blacklisted Model 2'];

function searchModels(query) {
    fetch(`https://api.sketchfab.com/v3/search?type=models&q=${query}&token=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            displayModels(data.results);
        })
        .catch(error => console.error(error));
}

function displayModels(models) {
    modelsContainer.innerHTML = '';
    const searchTerm = searchInput.value.trim().toLowerCase();
    models.forEach(model => {
        if (model.name.toLowerCase().includes(searchTerm) && !blacklist.includes(model.name)) {
            const modelContainer = document.createElement('div');
            modelContainer.className = 'model-container';

            const modelThumbnail = document.createElement('img');
            modelThumbnail.src = model.thumbnails.images[0].url;
            modelThumbnail.alt = model.name;

            const modelTitle = document.createElement('h3');
            modelTitle.textContent = model.name.length > 20 ? model.name.substring(0, 20) + '...' : model.name;

            const viewModelButton = document.createElement('button');
            viewModelButton.className = 'view-model-button';

            const eyeIcon = document.createElement('i');
            eyeIcon.className = 'fas fa-eye';

            viewModelButton.appendChild(eyeIcon);
            viewModelButton.appendChild(document.createTextNode(' View Model'));

            viewModelButton.addEventListener('click', () => {
                if (!blacklist.includes(model.name)) {
                    const embedUrl = `https://sketchfab.com/models/${model.uid}/embed`;
                    openPopup(embedUrl);
                } else {
                    alert('This model is blacklisted and cannot be viewed.');
                }
            });

            modelContainer.appendChild(modelThumbnail);
            modelContainer.appendChild(modelTitle);
            modelContainer.appendChild(viewModelButton);
            modelsContainer.appendChild(modelContainer);
        }
    });
}

function openPopup(embedUrl) {
    modelIframe.src = embedUrl;
    modelPopup.style.display = 'flex';
}

function closePopup() {
    modelIframe.src = '';
    modelPopup.style.display = 'none';
}

searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        const searchTerm = searchInput.value.trim();
        if (searchTerm !== '') {
            searchModels(searchTerm);
        } else {
            fetchFeaturedModels(); // Display featured models when the search input is empty
        }
    }
});

searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.trim();
    if (searchTerm === '') {
        fetchFeaturedModels(); // Display featured models when the search input is empty
    } else {
        searchModels(searchTerm);
    }
});

function fetchFeaturedModels() {
    fetch(`https://api.sketchfab.com/v3/models?featured=true&token=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            displayModels(data.results);
        })
        .catch(error => console.error(error));
}

fetchFeaturedModels();

closeButton.addEventListener('click', closePopup);