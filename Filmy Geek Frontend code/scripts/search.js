// search.js

document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('search-form');

    // Function to handle the search form submission
    function handleSearch(event) {
        event.preventDefault(); // Prevent form submission

        // Get the search query from the input field
        const searchQuery = document.getElementById('search-input').value.trim();

        // Check if search query is not empty
        if (searchQuery !== '') {
            // Perform search (replace this with actual search functionality)
            console.log('Search query:', searchQuery);

            // Display search results (replace this with actual search results)
            displaySearchResults(searchQuery);

            // Display recommended movies (replace this with actual recommended movies)
            displayRecommendedMovies();
        }
    }

    // Function to display search results
    function displaySearchResults(query) {
        const searchResults = document.querySelector('.search-results');
        searchResults.innerHTML = `<p>Search results for: ${query}</p>`;
    }

    // Function to display recommended movies
    function displayRecommendedMovies() {
        const recommendedMoviesGrid = document.querySelector('.recommended-movies-grid');
        const recommendedMovies = [
            { title: 'Movie 1', image: 'movie1.jpg' },
            { title: 'Movie 2', image: 'movie2.jpg' },
            { title: 'Movie 3', image: 'movie3.jpg' },
            { title: 'Movie 4', image: 'movie4.jpg' },
            { title: 'Movie 5', image: 'movie5.jpg' }
        ];

        // Generate HTML for recommended movies
        const recommendedMoviesHTML = recommendedMovies.map(movie => `
            <div class="movie-card">
                <img src="images/${movie.image}" alt="${movie.title}">
                <p>${movie.title}</p>
            </div>
        `).join('');

        recommendedMoviesGrid.innerHTML = recommendedMoviesHTML;
    }

    // Event listener for the search form submission
    searchForm.addEventListener('submit', handleSearch);
});
// scripts/search.js

// Function to handle the search form submission
function handleSearch(event) {
    event.preventDefault(); // Prevent form submission

    // Get the search query from the input field
    const searchQuery = document.getElementById('search').value;

    // Simulate a search by logging the query to the console
    console.log('Search query:', searchQuery);

    // You can perform an actual search here using AJAX or fetch()

    // For demonstration purposes, let's display a message in the search results
    const searchResults = document.querySelector('.search-results');
    searchResults.innerHTML = `<p>Search results for: ${searchQuery}</p>`;
}

// Event listener for the search form submission
document.querySelector('form').addEventListener('submit', handleSearch);
