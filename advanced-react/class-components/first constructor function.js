"use strict"

// 1. create a new constructor function, Book, which logs books in the school library (id, title, author, themes[]),
// 2. Add ids, titles and authors for your two favourite books.
// 3. Use the prototype keyword to add a theme property to the  books.
// 4. Add at least one theme to each of your books.

// Beginning:

function Book(id, title, author, themes = []) {
    this.id = id
    this.title = title
    this.author = author
    this.themes = themes
}

Book.prototype.addThemes = function(themes) {
    this.themes = [...this.themes, themes]
}

const book1 = new Book(1, 'Arch of Triumph', 'E.M. Remarque')
const book2 = new Book(2, 'The Little Prince', 'A.D. Saint-Exupery')

book1.addThemes('history')
book2.addThemes('for children')
console.log(book1.themes)
console.log(book2.themes)