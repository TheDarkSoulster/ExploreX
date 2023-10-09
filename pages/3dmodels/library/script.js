// Function to create a model card element
function createModelCard(model) {
  if (!model.description) {
    // Skip models with no description
    return null;
  }

  const modelCard = document.createElement("div");
  modelCard.className = "model-card";

  // Add title of the model
  const modelTitle = document.createElement("div");
  modelTitle.className = "model-title";
  modelTitle.textContent = model.name;
  modelCard.appendChild(modelTitle);

  // Limit description to 100 characters
  const limitedDescription =
    model.description.length > 100
      ? model.description.substring(0, 100) + "..."
      : model.description;
  const modelDescription = document.createElement("div");
  modelDescription.className = "model-description";
  modelDescription.textContent = limitedDescription;
  modelCard.appendChild(modelDescription);

  // Add "View Model" button
  const viewModelButton = document.createElement("div");
  viewModelButton.className = "view-model-button";
  viewModelButton.textContent = "View Model";
  modelCard.appendChild(viewModelButton);

  // Embed Sketchfab 3D viewer link on button click
  viewModelButton.addEventListener("click", () => {
    // Open the model in a new tab or window
    window.open(`https://sketchfab.com/models/${model.uid}/embed`, "_blank");

    // Add a screen transition effect (you can customize this further)
    const transitionOverlay = document.createElement("div");
    transitionOverlay.className = "transition-overlay";
    document.body.appendChild(transitionOverlay);

    setTimeout(() => {
      // Remove the overlay after the transition effect
      document.body.removeChild(transitionOverlay);
    }, 1000); // Transition duration (in milliseconds)

    // Prevent click events from reaching elements below the overlay
    transitionOverlay.addEventListener("click", (event) => {
      event.stopPropagation();
    });
  });

  return modelCard;
}

// Function to arrange cards in two rows
function arrangeCardsInTwoRows() {
  const modelCards = document.querySelectorAll(".model-card");
  modelCards.forEach((card, index) => {
    if (index % 2 === 0) {
      // Add 'even' class to cards in even positions (0-based index)
      card.classList.add("even");
    } else {
      // Add 'odd' class to cards in odd positions
      card.classList.add("odd");
    }
  });
}

// Function to fetch and display most viewed models on the home page
function displayMostViewedModels() {
  const modelList = document.getElementById("modelList");
  modelList.innerHTML = ""; // Clear previous search results

  // Fetch most viewed 3D models from Sketchfab API
  fetch("https://api.sketchfab.com/v3/models?sort_by=-viewCount")
    .then((response) => response.json())
    .then((data) => {
      data.results.forEach((model) => {
        // Create a card container for each most viewed 3D model
        const modelCard = createModelCard(model);
        // Add the model card to the model list if it's not null
        if (modelCard) {
          modelList.appendChild(modelCard);
        }
      });
      // Arrange cards in two rows after adding them to the DOM
      arrangeCardsInTwoRows();
    })
    .catch((error) => console.error(error));
}

// Function to fetch and display search results in real time
function searchModels() {
  const searchInput = document
    .getElementById("searchInput")
    .value.toLowerCase();
  const modelList = document.getElementById("modelList");
  modelList.innerHTML = ""; // Clear previous search results

  // Fetch 3D models from Sketchfab API based on search input
  fetch(`https://api.sketchfab.com/v3/search?type=models&q=${searchInput}`)
    .then((response) => response.json())
    .then((data) => {
      data.results.forEach((model) => {
        // Create a card container for each 3D model
        const modelCard = createModelCard(model);
        // Add the model card to the model list if it's not null
        if (modelCard) {
          modelList.appendChild(modelCard);
        }
      });
      // Arrange cards in two rows after adding them to the DOM
      arrangeCardsInTwoRows();
    })
    .catch((error) => console.error(error));
}

// Call the function to display most viewed models on page load
window.onload = displayMostViewedModels;