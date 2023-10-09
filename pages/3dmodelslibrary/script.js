const modelsList = document.getElementById('modelsList');
const searchInput = document.getElementById('searchInput');
const itemsPerPage = 5;
let currentPage = 1;

const SKETCHFAB_API_URL = 'https://api.sketchfab.com/v3/models';
const SKETCHFAB_API_TOKEN = '25af9fac593d4fff869be23160fb9bb4'; // Sketchfab API token

async function fetchSketchfabModels() {
    try {
        const response = await fetch(`${SKETCHFAB_API_URL}?token=${SKETCHFAB_API_TOKEN}&type=models`);
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Error fetching Sketchfab models:', error);
        return [];
    }
}

function displayModels(models, page) {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedModels = models.slice(startIndex, endIndex);

    modelsList.innerHTML = '';
    paginatedModels.forEach(model => {
        const modelCard = document.createElement('div');
        modelCard.className = 'model-card';
        modelCard.innerHTML = `
            <h2>${model.name}</h2>
            <iframe width="300" height="200" src="${model.embedUrl}" frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
        `;
        modelsList.appendChild(modelCard);
    });
}

function filterAndPaginateModels() {
    const searchTerm = searchInput.value.toLowerCase();
    fetchSketchfabModels().then(sketchfabModels => {
        const filteredModels = sketchfabModels.filter(model => model.name.toLowerCase().includes(searchTerm));
        const totalPages = Math.ceil(filteredModels.length / itemsPerPage);

        if (currentPage < 1) {
            currentPage = 1;
        } else if (currentPage > totalPages) {
            currentPage = totalPages;
        }

        displayModels(filteredModels, currentPage);
        renderPaginationControls(totalPages);
    });
}

function renderPaginationControls(totalPages) {
    const paginationControls = document.createElement('div');
    paginationControls.className = 'pagination-controls';
    if (currentPage > 1) {
        const prevButton = createPaginationButton('Previous', currentPage - 1);
        paginationControls.appendChild(prevButton);
    }
    if (currentPage < totalPages) {
        const nextButton = createPaginationButton('Next', currentPage + 1);
        paginationControls.appendChild(nextButton);
    }
    modelsList.appendChild(paginationControls);
}

function createPaginationButton(label, targetPage) {
    const button = document.createElement('button');
    button.textContent = label;
    button.addEventListener('click', () => {
        currentPage = targetPage;
        filterAndPaginateModels();
    });
    return button;
}

// Initial display of filtered and paginated models
filterAndPaginateModels();
