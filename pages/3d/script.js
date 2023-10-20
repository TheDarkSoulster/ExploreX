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

      const modelPopup = document.getElementById('modelPopup');
const modelIframe = document.getElementById('modelIframe');
const closeButton = document.querySelector('.close-button');

function openPopup(embedUrl) {
    modelIframe.src = embedUrl;
    modelPopup.style.display = 'flex';
}

function closePopup() {
    modelIframe.src = '';
    modelPopup.style.display = 'none';
}

// Modify viewModelButton event listener
viewModelButton.addEventListener('click', () => {
    const embedUrl = `https://sketchfab.com/models/${model.uid}/embed`;
    openPopup(embedUrl);
});

// Add event listener for close button
closeButton.addEventListener('click', closePopup);



function openPopup(embedUrl) {
    modelIframe.src = embedUrl;
    modelPopup.style.display = 'flex';
}

function closePopup() {
    modelIframe.src = '';
    modelPopup.style.display = 'none';
}

// Modify viewModelButton event listener
viewModelButton.addEventListener('click', () => {
    const embedUrl = `https://sketchfab.com/models/${model.uid}/embed`;
    openPopup(embedUrl);
});


        modelContainer.appendChild(modelThumbnail);
        modelContainer.appendChild(modelTitle);
        modelContainer.appendChild(viewModelButton);
        modelsContainer.appendChild(modelContainer);
    });
}




// Initial display of featured models when the page loads
displayFeaturedModels();

const backToTopButton = document.getElementById("backToTopBtn");

window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});

backToTopButton.addEventListener("click", () => {
    // Get the current scroll position
    const scrollY = window.scrollY || document.documentElement.scrollTop;

    // Calculate how far to scroll to reach the top of the page
    const scrollStep = Math.PI / (500 / 15); // This is similar to "easeInOutQuint" easing function
    const cosParameter = scrollY / 2;
    let scrollCount = 0;
    let scrollMargin;
    const scrollInterval = setInterval(() => {
        if (window.scrollY !== 0) {
            scrollCount = scrollCount + 1;
            scrollMargin = cosParameter - cosParameter * Math.cos(scrollCount * scrollStep);
            window.scrollTo(0, (scrollY - scrollMargin));
        } else {
            clearInterval(scrollInterval);
        }
    }, 15);
});

const modelIframe = document.getElementById("modelIframe");
const watermark = document.querySelector(".watermark");
const summary = document.querySelector(".summary");
const actions = document.querySelector(".actions");

modelIframe.addEventListener("load", () => {
    // Hide watermark, summary, and actions elements when the iframe is loaded
    watermark.style.display = "none";
    summary.style.display = "none";
    actions.style.display = "none";
});