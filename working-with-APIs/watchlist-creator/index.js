"use strict"

const moviesFound = [];
const moviesWatched = [];

document.querySelector('.header__btn').addEventListener('click', async () => {
  let userRequest = document.querySelector('.header__input').value;
  if (userRequest) {
    document.querySelector('.header__input').value = '';
    userRequest = userRequest.toLowerCase().trim().match(/[a-z0-9]+/g).join("+")
  
    console.log(userRequest)
  
    const res = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=d6310ff9&t=${userRequest}`);
    const data = await res.json();
    console.log(data);

    moviesFound.push(data);
    
  }
})

const renderMovies = (movies) => {
  let content = movies.map(movie => {
    movie = `
    <article class="main__article">
      <div class="main__article-container">
          <div class="main__img-wrap">
              <img src="https://m.media-amazon.com/images/M/MV5BMDNkOTE4NDQtMTNmYi00MWE0LWE4ZTktYTc0NzhhNWIzNzJiXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_SX300.jpg" alt="" class="main__img">
          </div>
          <div class="main__content-wrap">
              <h3 class="main__h3">The Office<span class="main__rating"><i class="fa-solid fa-star"></i>8.9</span></h3>
              <div class="main__description">
                  <span class="main__duration">22 min</span>
                  TV-show
                  <div class="main__addBtn"><i class="fa-solid fa-circle-plus"></i>Watchlist</div>
              </div>
              <p class="main__text">A blade runner must pursue and terminate four replicants who stole a ship in space, and have returned to Earth to find their creator.</p>
          </div>    
      </div>
      <hr>
    </article>
    `
  })
}