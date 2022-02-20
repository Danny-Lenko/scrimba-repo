"use strict"

const moviesWatched = JSON.parse(localStorage.getItem('moviesWatched'));
const mainEl = document.querySelector('#main');

const renderMovies = (movies) => {
   console.log(moviesWatched);
   if (movies.length < 1) {
      mainEl.innerHTML = `
         <div class="main__screensaver show">
            <p class="main__screensaver--empty">Your watchlist is looking a little empty...</p>
            <p class="main__screesaver--add">
               <i class="fa-solid fa-circle-plus"></i>
               <a href="./index.html">Let's add some movies!</a>
            </p>
         </div>
      `;
   } else {
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
                    <div class="main__delBtn"><i class="fa-solid fa-circle-minus"></i>Watchlist</div>
                </div>
                <p class="main__text">${movie['Plot']}</p>
            </div>    
        </div>
        <hr>
      </article>
      `
    ).join('');
    mainEl.innerHTML = content; 
   }
 }

renderMovies(moviesWatched);
 
window.onclick = (e) => {

   moviesWatched.forEach((movie, index) => {
      if (movie['Plot'] === e.target.parentElement.parentElement.children[2].textContent) {
         moviesWatched.splice(index, 1);
         localStorage.setItem('moviesWatched', JSON.stringify(moviesWatched));
         renderMovies(moviesWatched);
      }
   })

}
