# Standard README.md File

![Design preview for the Space tourism website coding challenge](./assets/preview.jpg)

## Welcome! 👋
## Table of contents

- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- CSS utility classes


### What I learned

## Next Level JavaScript

1) Template literals and multilines text:

```js
let word1 = 'Dylan';
let word2 = 'Israel';

let example = `${word1}
${word2}
`;
document.getElementById('example').innerText = example;
```

2) Destructure objects:

```js
   const player = {
      name: 'Lebron James',
      club: 'LA Lakers',
      address: {
         city: 'Los Angeles'
      }
   };
   const { name, club, address: { city } } = player;
   console.log(`${name} lives in ${city}`);
```

3) Destucture an array:

```js
let [firstName, middleName, lastName] = ['Dylan', 'Coding God', 'Israel'];

lastName = 'Clements';

console.log(firstName + " " + lastName);
```

4) Object literals:

```js
function addressMaker(city, state) {
    const newAdress = {city, state};
    
    console.log(newAdress);
}

addressMaker('Austin', 'Texas');
```

5) Spread Operator

```js
let contacts = ["Mary", "Joel", "Danny"];
let personalFriends = [ "David", ...contacts, "Lily" ];
contacts.push("John");

let person = {
    name: "Adam",
    age: 25,
    city: "Manchester"
}
let employee = {
    ...person,
    salary: 50000,
    position: "Software Developer"
}
console.log(employee);
```

6) Default Params

```js
const leadSinger = (artist = "someone") => {
    console.log(`${artist} is the lead singer of Cold Play`);
}

leadSinger();
```

7) Classes

```js
export class Animal {
    constructor(type, legs) {
        this.type = type;
        this.legs = legs;
    }
    
    makeNoise(sound = 'Loud Noise') {
        console.log(sound);
    }
    
    get metaData() {
        return `Type: ${this.type}, Legs: ${this.legs}`;
    }
    
    static return10() {
        return 10;
    }
}

export class Cat extends Animal {
    makeNoise(sound = "meow") {
        console.log(sound);
    }
}

// another file
import { Animal, Cat } from './animal.js';
let cat = new Cat('Cat', 4);
cat.makeNoise();
console.log(cat.metaData)
```

## Working With APIs

1) GET first 5 blog posts from an API

```js
    fetch('https://apis.scrimba.com/jsonplaceholder/posts')
        .then(response => response.json())
        .then(data => console.log(data.slice(0, 5)))

```

2) POST new data through an API

```js
fetch("https://apis.scrimba.com/jsonplaceholder/todos", {
    method: "POST",
    body: JSON.stringify({
        title: "Buy Milk",
        completed: false
    }),
    headers: {
        "Content-Type": "application/json"
    }
})
    .then(res => res.json())
    .then(data => console.log(data))
```

3) Not triggering a click event when targeting a child element

```scss
   &__dropbtn--arrow,
   &__dropbtn--content {
      pointer-events: none;
   }
```

4) !! ".disabled" class for buttons

```css
.disabled {
    pointer-events: none;
    background-color: #cccccc;
    color: #666666;
    cursor: default;
    /* cursor: not-allowed; */
}
```

5) remove <a> default styling

```css
   a, a:hover, a:focus, a:active {
      text-decoration: none;
      color: inherit;
  }
```





### Continued development

* CSS grid;

*Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

### Useful resources

- [String.prototype.padStart()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart) - Was inroduced in the ES6 chapter.
- [ES6 classes](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Classes) - The MDN article about classes.
- [Find Object In Array](https://stackoverflow.com/a/35397839/16906724) - Heplped me deal with finding the eaten ghosts in array of ghosts by the value of its key in Pacman.
- [Form.reset()](https://developer.mozilla.org/ru/docs/Web/API/HTMLFormElement/reset) - method to set,e.g., inputEl.value to "".
- [Copy To Clipboard](https://stackoverflow.com/a/64422721/16906724) - helped me figure out how to copy content onclick for "Colors Generator".

- [Git + GitHub](https://www.youtube.com/watch?v=RGOj5yH7evk) - the basic git commands (Youtube).
- [The Markdown Guide](https://www.markdownguide.org/) - for more help with writing markdown (Article).

## Author

- Github - [DannyLenk](https://github.com/DannyLenk)
- Frontend Mentor - [@DannyLenk](https://www.frontendmentor.io/profile/DannyLenk)
- Facebook - [Valerii Danylenko](https://www.facebook.com/valerii.danylenko)
- LinkedIn - [Valerii Danylenko](https://www.linkedin.com/in/valerii-danylenko-74379212b)
- insta - [valeriidanylenko](https://www.instagram.com/valeriidanylenko/?hl=ru)

## Acknowledgments

Thank you, Kevin Powell. Hats off to you and your clear English.