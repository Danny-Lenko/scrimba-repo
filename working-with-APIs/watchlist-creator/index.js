"use strict"



document.querySelector('.header__btn').addEventListener('click', async () => {
  let userRequest = document.querySelector('.header__input').value;
  if (userRequest) {
    document.querySelector('.header__input').value = '';
    userRequest = userRequest.toLowerCase().trim().match(/[a-z0-9]+/g).join("+")
  
    console.log(userRequest)
  
    const res = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=d6310ff9&t=${userRequest}`);
    const data = await res.json();
    console.log(data);  
  }
})