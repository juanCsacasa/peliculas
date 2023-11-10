export const renderMovieList = (movies) => {
  const renderMovies = document.getElementById('container');
  renderMovies.innerHTML = '';

  movies.forEach(movie => {
    const movieContainer = `
      <div class="moviecontainer">
        <img class="movieimage" src="${movie.poster}" alt="${movie.title}">
        <h3 class="movietitle">${movie.title}</h3>
        <p class="movietext">${movie.category}</p>
        <p class="movietext">${movie.description}</p>
      </div>
    `;

    renderMovies.innerHTML += movieContainer;
  });
};
