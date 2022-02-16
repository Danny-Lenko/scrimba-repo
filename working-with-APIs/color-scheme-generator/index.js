"use strict"

const myDropdown = document.querySelector('#myDropdown');

document.querySelector('#dropBtn').addEventListener('click', () => {
  myDropdown.classList.toggle('show');
})

// window.onclick = function(e) {
//   if (e.target.id != 'dropBtn') {
//     myDropdown.classList.remove('show');
//   }

//   if (e.target.classList.contains('dropdown-a')) {
//     console.log(e.target.textContent);
//   }
// } 