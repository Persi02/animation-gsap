import { gsap } from 'gsap'
import './style.css'
const p = document.querySelectorAll("p");



//function split text
const splitText = (elements) => {
  for (const element of elements) {
    const arr = element.textContent.split('');
    element.textContent = '';
    for (const letter of arr) {
      const span = document.createElement("span");
      span.textContent = letter;
      element.appendChild(span)
    }
  }


};

splitText(p);

gsap.from("p span", {
  opacity: 0, stagger: 0.04
})


