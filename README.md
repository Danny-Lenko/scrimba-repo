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






### Continued development

* CSS grid;

*Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

### Useful resources

- [Grid Attack](https://codingfantasy.com) - This helped me practice CSS GRID. Challenging and interactive game aimed at learning the css grid properties' application.

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