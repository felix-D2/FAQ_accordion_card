# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot

![](/images/screenshot.png)


### Links

- Solution URL: [Solution FAQ_accordion_card](https://github.com/felix-D2/FAQ_accordion_card)
- Live Site URL: [live site](https://felix-d2.github.io/FAQ_accordion_card/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS transition / key Frames
- Desktop-first workflow

### What I learned

Animations, with transition and key frames.


```css
#pictures{
  /* __Start Pictures Transition__ */
  opacity: 0;
  transform: translateY(-10%);
  transition: all 3s .5s;
}

body.loaded #pictures {
    opacity: 1;
    transform: translateY(0);
}
/* __Start Pictures Transition__ */
```
```css
.question .content{
    transition: all 0.4s ease;
}


.question.selected .content{   /*Lorsqu'une question est selectionée */
    max-height: 80px;
    animation: fade 1s ease-in-out;
}


@keyframes fade {
    from{
        opacity: 0;
        transform: translateY(-10px);
    }
    to{
        opacity: 1;
        transform: translateY(0px);
    }
}
```


### Useful resources

- [FAQ accordion](https://www.youtube.com/watch?v=4qnWreynXLU) - This helped me for animations FAQ. I really liked this pattern and will use it going forward.
- [Animation cours](https://openclassrooms.com/fr/courses/5919246-creez-des-animations-css-modernes) - This is an amazing cours which helped me on animations.

## Author

- Frontend Mentor - [@felix-D2](https://www.frontendmentor.io/profile/felix-D2)

