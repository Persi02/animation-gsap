import { gsap } from 'gsap'
import './style.css'
import { Timeline } from 'gsap/gsap-core';
const p = document.querySelector(".test");


const txtWelcome = document.querySelector(".welcome");

//function split text
const splitText = (element) => {
  const arr = element.textContent.split('');
  element.textContent = '';
  for (const letter of arr) {
    const span = document.createElement("span");
    span.textContent = letter;
    element.appendChild(span)
  }
};

splitText(p);
splitText(txtWelcome);

const tl = gsap.timeline();

tl.from(".test span", {
  opacity: 0, stagger: 0.1
})
  .from(".welcome span", {
    opacity: 0, stagger: 0.1
  })


