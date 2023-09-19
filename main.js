import { gsap } from 'gsap'
import './style.css'
const p = document.querySelector(".test");

const arr = p.textContent.split('');
p.textContent = ''

for (const letter of arr) {
  const span = document.createElement("span");
  span.textContent = letter;
  p.appendChild(span)
}




gsap.from("span", {
  opacity: 0, stagger: 0.2, duration: 3, repeat: -1
})


