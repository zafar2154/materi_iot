const API_KEY = '21013b78';

function searchMovies() {
    const query = document.getElementById("searchInput").value;
    const url = `http://localhost:3000/movie`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            const moviesValue = document.getElementById('movies');
            const filteredMovies = data.filter(movie =>
                movie.title.toLowerCase().includes(query)
            );
           if (filteredMovies.length > 0) {
                moviesValue.innerHTML = filteredMovies.map(movie => `
                    <div class="movie-card">
                        <h1>${movie.title}</h1>
                        <h4>${movie.year}</h4>
                        <p>${movie.type}</p>
                    </div>
                `).join('');
            } else {
                moviesValue.innerHTML = `<p>No results found.</p>`;
            }
        }
        )
}