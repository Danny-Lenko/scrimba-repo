"use strict"

// "https://apis.scrimba.com/jsonplaceholder/posts"

let postsArr = [];
const postsForm = document.querySelector('#new-post');

const renderPosts = () => {
    let html = '';
    postsArr.forEach(post => {
        html += `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            <hr />
        `
    })
    document.querySelector('#blog-list').innerHTML = html;
}

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(res => res.json())
    .then(post => {
        postsArr = post.slice(0, 5);
        renderPosts();
    })
;

postsForm.addEventListener('submit', (e) => {

    e.preventDefault();
    const inputTitle = document.querySelector('#post-title').value;
    const inputBody = document.querySelector('#post-body').value;
    const data = {
        title: inputTitle,
        body: inputBody
    }
    const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }

    fetch("https://apis.scrimba.com/jsonplaceholder/posts", options)
        .then(res => res.json())
        .then(post => {
            postsArr.unshift(post);
            renderPosts();
        })
    ;
    
    postsForm.reset();

})

