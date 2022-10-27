import './index.css';

const popup = document.querySelector('.popup');
const botton = document.querySelector('.header__hamburder-lines');
const lineOne = document.querySelector('.line-one');
const lineTwo = document.querySelector('.line-two');
const lineThree = document.querySelector('.line-three');
const item = document.querySelector('.popup__list');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const inputs = document.querySelectorAll('.offert__input');
const form = document.querySelector('.offert__form');

const createIntersectionObserver = (elem, callback, options) => {
  let observer = new IntersectionObserver(callback, options || {});
  observer.observe(elem);
  return observer;
}

const outNum = (entries) => {
  let [entry] = entries;
  entry.target.innerHTML = 0;
  let step = Number(entry.target.getAttribute('data-step'));
  let num = Number(entry.target.getAttribute('data-numerel'));
  let logo = entry.target.getAttribute('data-logik');
  let n = 0;
  let interval = setInterval(() => {
    n = n + step;
    if(n == num) {
      clearInterval(interval);
    }
    if(logo == 'true') {
      entry.target.innerHTML = n + ' +';
    } else {
      entry.target.innerHTML = n;
    }
  }, 50);
  
};

let options = {
  rootMargin: '0px'
};

createIntersectionObserver(one, outNum, options);
createIntersectionObserver(two, outNum, options);
createIntersectionObserver(three, outNum, options);

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  inputs.forEach((input) => {
    console.log(input.value);
    input.value = "";
  });
});

botton.addEventListener('click', () => {
  lineOne.classList.toggle('line-one-rotate');
  lineTwo.classList.toggle('line-two-rotate');
  lineThree.classList.toggle('line-three-rotate');
  popup.classList.toggle('active');
});

item.addEventListener('click', () => {
  lineOne.classList.remove('line-one-rotate');
  lineTwo.classList.remove('line-two-rotate');
  lineThree.classList.remove('line-three-rotate');
  popup.classList.remove('active');
});