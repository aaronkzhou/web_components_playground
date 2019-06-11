const API_URL =
  'https://api.tvmaze.com/singlesearch/shows?q=mad-men&embed=episodes';

window.addEventListener('load', () => {
  fetchMovies();
});

async function fetchMovies() {
  const res = await fetch(API_URL);
  const data = await res.json();
  const main = document.querySelector('main');
  data._embedded.episodes.forEach(episode => {
    const el = document.createElement('movie-grid');
    el.episode = episode;
    main.appendChild(el);
  });
  console.log(data);
}

class MovieGrid extends HTMLElement {
  set episode(episode) {
    this.innerHTML = `${episode}`;
  }
}

customElements.define('movie-grid', MovieGrid);
