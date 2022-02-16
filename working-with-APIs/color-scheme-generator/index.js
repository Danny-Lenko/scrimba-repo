"use strict"

const myDropdown = document.querySelector('#myDropdown');

document.querySelector('#dropBtn').addEventListener('click', () => {
  myDropdown.classList.toggle('show');
})

window.onclick = function(e) {
  
  if (e.target.id != 'dropBtn') {
    myDropdown.classList.remove('show');
  }

  if (e.target.classList.contains('dropdown-a')) {
    const aList = document.querySelectorAll('.dropdown-a');

    aList.forEach(a => a.classList.remove('active'));
    document.querySelector('#schemeBtn').textContent = e.target.textContent;
    e.target.classList.add('active');
  }

} 