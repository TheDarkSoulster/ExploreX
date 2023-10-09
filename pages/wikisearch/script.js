// WIKIPEDIA SEARCH FUNCTION

document.addEventListener('DOMContentLoaded', function () {
    var searchInput = document.getElementById('searchbar');
    var searchButton = document.getElementById('searchbutton');

    function performSearch() {
        var userInput = searchInput.value;
        var searchQuery = encodeURIComponent(userInput);

        // Redirect the user to Wikipedia's search results page for the entered query
        window.location.href = `https://en.wikipedia.org/wiki/Special:Search?search=${searchQuery}`;
    }

    // Add event listener for the "Enter" key
    searchInput.addEventListener('keydown', function (event) {
        if (event.keyCode === 13) {
            performSearch();
        }
    });

    // Add event listener for the search button click
    searchButton.addEventListener('click', function () {
        performSearch();
    });
});


document.addEventListener('DOMContentLoaded', function () {
    var searchbar = document.getElementById('searchbar');
    var clearButton = document.getElementById('clear-button');

    // Show the clear button when the user types some text
    searchbar.addEventListener('input', function () {
        clearButton.style.display = searchbar.value.length > 0 ? 'block' : 'none';
    });

    // Clear the search bar when the clear button is clicked
    clearButton.addEventListener('click', function () {
        searchbar.value = '';
        clearButton.style.display = 'none';
    });
});

//--------------------------------------------------------------------------------------------

// DID YOU KNOW SECTION

document.addEventListener('DOMContentLoaded', function () {
    const facts = [
        "The Eiffel Tower can be 15 cm taller during the summer due to thermal expansion of the iron.",
        "The shortest war in history was between Britain and Zanzibar on August 27, 1896. Zanzibar surrendered after 38 minutes.",
        "Bananas are berries, but strawberries are not.",
        "The Great Wall of China is not visible from space without aid.",
        "Cows have best friends and can become stressed when they are separated.",
        "The smell of freshly-cut grass is actually a plant distress call.",
        "Polar bears have black skin.",
        "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible.",
        "A group of flamingos is called a 'flamboyance'.",
        "There is a species of jellyfish known as Turritopsis dohrnii, which is biologically immortal.",
        "Octopuses have three hearts.",
        "The shortest war in history was between Britain and Zanzibar on August 27, 1896. Zanzibar surrendered after 38 minutes.",
        "A panda's diet consists almost entirely of bamboo, but they are members of the order Carnivora and have the digestive system of a carnivore.",
        "A flock of crows is known as a 'murder'.",
        "Peanuts are not nuts; they are legumes.",
        "A 'jiffy' is the scientific name for the time it takes for light to travel one centimeter in a vacuum, approximately 33.3564 picoseconds.",
        "Elephants are the only animals that can't jump.",
        "The first oranges weren't orange.",
        "The shortest war in history was between Britain and Zanzibar on August 27, 1896. Zanzibar surrendered after 38 minutes.",
        "Bees can recognize human faces.",
        "A day on Venus is longer than its year. Venus rotates on its axis once every 243 Earth days, but its orbit around the Sun takes about 225 Earth days.",
        "The Great Wall of China is not visible from space without aid.",
        "Pineapple is a berry.",
        "Bananas are berries, but strawberries are not.",
        "The unicorn is Scotland's national animal.",
        "The shortest war in history was between Britain and Zanzibar on August 27, 1896. Zanzibar surrendered after 38 minutes.",
        "Kangaroos can't hop backwards.",
        "Cats have five toes on their front paws, but only four on their back paws.",
        "Oxford University is older than the Aztec Empire.",
        "The Great Wall of China is not visible from space without aid.",
        "A 'jiffy' is the scientific name for the time it takes for light to travel one centimeter in a vacuum, approximately 33.3564 picoseconds.",
        "The smell of freshly-cut grass is actually a plant distress call.",
        "Bananas are berries, but strawberries are not.",
        "The shortest war in history was between Britain and Zanzibar on August 27, 1896. Zanzibar surrendered after 38 minutes.",
        "The shortest war in history was between Britain and Zanzibar on August 27, 1896. Zanzibar surrendered after 38 minutes.",
        "A day on Venus is longer than its year. Venus rotates on its axis once every 243 Earth days, but its orbit around the Sun takes about 225 Earth days.",
        "The unicorn is Scotland's national animal.",
        "Cows have best friends and can become stressed when they are separated.",
        "Polar bears have black skin.",
        "The first oranges weren't orange.",
        "Bananas are berries, but strawberries are not.",
        "Kangaroos can't hop backwards.",
        "A 'jiffy' is the scientific name for the time it takes for light to travel one centimeter in a vacuum, approximately 33.3564 picoseconds.",
        "The shortest war in history was between Britain and Zanzibar on August 27, 1896. Zanzibar surrendered after 38 minutes.",
        "A group of flamingos is called a 'flamboyance'.",
        "Peanuts are not nuts; they are legumes.",
        "Elephants are the only animals that can't jump.",
        "A day on Venus is longer than its year. Venus rotates on its axis once every 243 Earth days, but its orbit around the Sun takes about 225 Earth days.",
        "The Great Wall of China is not visible from space without aid.",
        "The smell of freshly-cut grass is actually a plant distress call.",
        "Cats have five toes on their front paws, but only four on their back paws.",
        "A 'jiffy' is the scientific name for the time it takes for light to travel one centimeter in a vacuum, approximately 33.3564 picoseconds.",
        "Bees can recognize human faces.",
        "A panda's diet consists almost entirely of bamboo, but they are members of the order Carnivora and have the digestive system of a carnivore.",
        "A flock of crows is known as a 'murder'.",
        "The first oranges weren't orange.",
        "The shortest war in history was between Britain and Zanzibar on August 27, 1896. Zanzibar surrendered after 38 minutes.",
        "Pineapple is a berry.",
        "A 'jiffy' is the scientific name for the time it takes for light to travel one centimeter in a vacuum, approximately 33.3564 picoseconds.",
        "Elephants are the only animals that can't jump.",
        "The first oranges weren't orange.",
        "The unicorn is Scotland's national animal.",
        "Kangaroos can't hop backwards.",
        "A 'jiffy' is the scientific name for the time it takes for light to travel one centimeter in a vacuum, approximately 33.3564 picoseconds.",
        "The shortest war in history was between Britain and Zanzibar on August 27, 1896. Zanzibar surrendered after 38 minutes.",
        "Cats have five toes on their front paws, but only four on their back paws.",
        "Bananas are berries, but strawberries are not.",
        "The first oranges weren't orange.",
        "The unicorn is Scotland's national animal.",
        "The smell of freshly-cut grass is actually a plant distress call.",
        "A 'jiffy' is the scientific name for the time it takes for light to travel one centimeter in a vacuum, approximately 33.3564 picoseconds.",
        "Polar bears have black skin.",
        "A flock of crows is known as a 'murder'.",
        "Elephants are the only animals that can't jump.",
        "A 'jiffy' is the scientific name for the time it takes for light to travel one centimeter in a vacuum, approximately 33.3564 picoseconds."
    ];

    const randomFact1 = facts[Math.floor(Math.random() * facts.length)];
    let randomFact2 = facts[Math.floor(Math.random() * facts.length)];

    // Ensure the second fact is different from the first one
    while (randomFact2 === randomFact1) {
        randomFact2 = facts[Math.floor(Math.random() * facts.length)];
    }

    document.getElementById('fact1').textContent = randomFact1;
    document.getElementById('fact2').textContent = randomFact2;
});


// ----------------------------------------------------------------------------------
// ON THIS DAY - NEWS

document.addEventListener('DOMContentLoaded', function () {
    const apiKey = 'c31ba50f71ad49b6b503b64b1316f4c0';
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const articlesContainer = document.querySelector('.on-this-day-articles');

            data.articles.slice(0, 3).forEach(article => {
                const articleElement = document.createElement('a');
                articleElement.classList.add('on-this-day-article', 'article');
                articleElement.href = article.url;

                const imageElement = document.createElement('img');
                imageElement.src = article.urlToImage || 'https://via.placeholder.com/500';
                imageElement.alt = 'Article Image';

                const articleInfoElement = document.createElement('div');
                articleInfoElement.classList.add('article-info');

                const dateElement = document.createElement('h3');
                const publishedDate = new Date(article.publishedAt);
                dateElement.textContent = publishedDate.toLocaleDateString();

                const descriptionElement = document.createElement('p');
                descriptionElement.textContent = article.description || 'No description available.';

                articleInfoElement.appendChild(dateElement);
                articleInfoElement.appendChild(descriptionElement);

                articleElement.appendChild(imageElement);
                articleElement.appendChild(articleInfoElement);

                articlesContainer.appendChild(articleElement);
            });
        })
        .catch(error => {
            console.error('Error fetching news:', error);
        });
});
