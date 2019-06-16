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
    el.classList.add('mystyle');
    el.episode = episode;
    main.appendChild(el);
  });
}

class MovieGrid extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: 'open' });
  }

  set episode(episode) {
    this.root.innerHTML = `
    <style>
    .episode {
      padding: 20px;
      display: flex;
      flex-direction: column;
    }

    .name {
      margin-top: 10px;
      font-weight: 700;
    }
    
    .desc {
        font-size: 12px;
    }
    </style>
    <div class='episode'>
      <img src='${episode.image &&
        episode.image
          .medium}' onerror="this.src='http://static.tvmaze.com/uploads/images/medium_landscape/26/66713.jpg'"/>
      <span class='name'>${episode.name}</span>
      <span>season ${episode.season} episode ${episode.number}</span>
      <span class='desc'>${episode.summary}</span>
    </div>`;
  }
}

customElements.define('movie-grid', MovieGrid);
