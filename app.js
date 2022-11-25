'use strict';

// local reviews data
const reviews = [
  {
    id: 1,
    name: 'albert einstein',
    job: 'physicist',
    img: 'https://image.geo.de/30086896/t/Pt/v3/w1440/r0/-/einstein-gross-jpg--41890-.jpg',
    text: 'God does not play dice.',
  },
  {
    id: 2,
    name: 'mahatma gandhi',
    job: 'activist',
    img: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Mahatma-Gandhi%2C_studio%2C_1931.jpg',
    text: 'Be the change you want to see in the world.',
  },
  {
    id: 3,
    name: 'ra - law of one',
    job: '6th density being',
    img: 'https://i.pinimg.com/550x/73/81/5d/73815d89394762d30260cc120a266343.jpg',
    text: 'This game (incarnation) can only be won by those who lose their cards in the melting influence of love; can only be won by those who lay their pleasures, their limitations, their all upon the table face up and say inwardly: “All, all of you players, each other-self, whatever your hand, I love you.” This is the game: to know, to accept, to forgive, to balance, and to open the self in love. This cannot be done without the forgetting, for it would carry no weight in the life of the mind/body/spirit beingness totality.',
  },
  {
    id: 4,
    name: 'plato',
    job: 'the boss',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Plato_Silanion_Musei_Capitolini_MC1377.jpg/400px-Plato_Silanion_Musei_Capitolini_MC1377.jpg',
    text: 'I know that I know nothing. ',
  },
];

// select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function () {
  showPerson(currentItem);
});

// show person based on item function
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

// show next person
nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

// show prev person
prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});

// show random person
randomBtn.addEventListener('click', function () {
  currentItem = Math.floor(Math.random() * reviews.length);
  console.log(currentItem);
  showPerson(currentItem);
});
