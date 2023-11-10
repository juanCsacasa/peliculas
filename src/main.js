import { renderMovieList } from "./render.js";
import { moviesData } from "./config.js";

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('container');
  const dramaButton = document.getElementById("Drama");
  const actionButton = document.getElementById("Action");
  const crimeButton = document.getElementById("Crime");
  const biographyButton = document.getElementById("Biography");
  const showAllButton = document.getElementById('showAllButton');

  dramaButton.addEventListener('click', function () {
    filterMovies('Drama');
  });

  actionButton.addEventListener('click', function () {
    filterMovies('Action');
  });

  crimeButton.addEventListener('click', function () {
    filterMovies('Crime');
  });

  biographyButton.addEventListener('click', function () {
    filterMovies('Biography');
  });

  showAllButton.addEventListener('click', function () {
    filterMovies('all');
  });

  function filterMovies(category) {
    const filteredMovies = category === 'all' ? moviesData : moviesData.filter(movie => movie.category === category);
    renderMovieList(filteredMovies);
  }

  filterMovies('all');
});

