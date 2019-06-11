const API_URL =
  'https://api.tvmaze.com/singlesearch/shows?q=mad-men&embed=episodes';

window.addEventListener('load', () => {
  fetchMovies();
});

async function fetchMovies() {
  const res = await fetch(API_URL);
  const data = await res.json();
  console.log(data);
}
