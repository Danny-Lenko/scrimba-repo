"use strict"

const moviesFound = [];
const moviesWatched = [];
const mainEl = document.querySelector('#main');

document.querySelector('.header__btn').addEventListener('click', async () => {
  let userRequest = document.querySelector('.header__input').value;
  if (userRequest) {
    document.querySelector('.header__input').value = '';
    userRequest = userRequest.toLowerCase().trim().match(/[a-z0-9]+/g).join("+")
    
    const res = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=d6310ff9&t=${userRequest}`);

    const data = await res.json();
    console.log(data['Response']);
    console.log(data)

    if (data['Response'] === 'False') {
      showRejection();
    } else {
      moviesFound.unshift(data);
      renderMovies(moviesFound);
    }    
    
  }
})

const renderMovies = (movies) => {
  let content = movies.map(movie => `
    <article class="main__article show">
      <div class="main__article-container">
          <div class="main__img-wrap">
              <img src=${movie['Poster']}>
          </div>
          <div class="main__content-wrap">
              <h3 class="main__h3">${movie['Title']}<span class="main__rating"><i class="fa-solid fa-star"></i>${movie['imdbRating']}</span></h3>
              <div class="main__description">
                  <span class="main__duration">${movie['Runtime']}</span>
                  ${movie['Genre']}
                  <div class="main__addBtn"><i class="fa-solid fa-circle-plus"></i>Watchlist</div>
              </div>
              <p class="main__text">${movie['Plot']}</p>
          </div>    
      </div>
      <hr class="dim">
    </article>
    `
  ).join('');
  mainEl.innerHTML = content;
}

const showRejection = () => {
  mainEl.innerHTML = `
  <div class="main__screensaver show">
    <p class="main__screensaver--unable">Unable to find what you’re looking for. Please try another search.</p>
</div>

  `;
}