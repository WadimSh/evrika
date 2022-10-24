import './index.css';

const popup = document.querySelector('.popup');
const botton = document.querySelector('.header__hamburder-lines');
const lineOne = document.querySelector('.line-one');
const lineTwo = document.querySelector('.line-two');
const lineThree = document.querySelector('.line-three');
const item = document.querySelector('.popup__list');

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