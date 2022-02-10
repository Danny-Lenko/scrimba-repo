"use strict";

let myLeads = [];
const leadBtn = document.querySelector('#leadBtn-el');
const ulEl = document.querySelector('#ul-el');
const inputEl = document.querySelector('#input-el');
const delBtnEl = document.querySelector('#delBtn-el');
let tabBtnEl = document.querySelector('#tabBtn-el');

leadBtn.addEventListener('click', function() {
   
   let inputElValue = document.querySelector('#input-el').value;
   if(inputElValue) {
      myLeads.push(inputElValue);
      inputEl.value = "";
      localStorage.setItem( 'myLeads', JSON.stringify(myLeads) );
      render(myLeads);
      console.log(localStorage);
   }
})

let leadsFromStorage = JSON.parse(localStorage.getItem('myLeads'));
if (leadsFromStorage) {
   myLeads = leadsFromStorage;
   render(myLeads);
}

delBtnEl.addEventListener('dblclick', function() {
   localStorage.clear();
   myLeads = [];
   render(myLeads);
})


tabBtnEl.addEventListener('click', function() {
   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      myLeads.push(tabs[0].url);
      localStorage.setItem( 'myLeads', JSON.stringify(myLeads) );
      render(myLeads);
   });
})

function render(leads) {
   let listItems = "";
   for (let i = 0; i < leads.length; i++){
      listItems += `
         <li>
            <a href="${leads[i]}" target="_blank">
               ${leads[i]}
            </a>
         </li>
      ` 
   }
   ulEl.innerHTML = listItems;
}