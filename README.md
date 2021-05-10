# Frontend Mentor - Blogr landing page solution

This is a solution to the [Blogr landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/blogr-landing-page-EX2RLAApP). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Links

- Live Site URL: [Add live site URL here](https://arthurgc.github.io/blogr-landing-page/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JS DOM Manipulation


### What I learned

I had many problems trying to build that responsive navbar because I had to customize menu for mobile and then re-customize and edit some css features of menu to get a responsive and interactive navbar.


I had to use a position absolute to position sub menus which were control with JS. Besides, `display:none` was my best partner to do an interactive menu in JS.

```css
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(80px);
```
Another feature which I used was outline to improve the navigation for some people.
```css
  outline-color: hsl(356, 100%, 66%); 
```
For main buttons inside header part I used animations and edit their boxshadow to change their background color in :hover and :focus.
```css
  &:hover,
  &:focus{
    animation-name: start;
    animation-duration: 1s;
    animation-fill-mode: forwards;
  }
  @keyframes start {
  100%{
    box-shadow: inset 10rem 0 0 0 hsl(356, 100%, 66%);
    color: hsl(0, 0%, 100%);
  }
}
```

### Useful resources

- [GitIgnore](https://www.pluralsight.com/guides/how-to-use-gitignore-file) - This helped me for adding and commiting files and avoid files which are not a need in Github.

## Author

- Github - [ArthurGC](https://github.com/ArthurGC)

