import data from "./data.js";

const body = document.querySelector('body');
const divList = document.createElement('div');

body.append(divList);

const buildcard = servercard => {
  // Create elements needed to build a card
  const divCard = document.createElement('div');
  const divImg = document.createElement('div');
  const divName = document.createElement('div');
  const img = document.createElement('img');
  const p = document.createElement('p');
  // Append newly created elements into the DOM
  divList.append(divCard);
  divCard.append(divImg);
  divImg.append(img);
  divCard.append(divName);
  divName.append(p);
  // Set content and attributes
  divList.setAttribute('class', 'cards-list');
  divCard.setAttribute('class', 'card 1');
  divImg.setAttribute('class', 'card_image');
  divName.setAttribute('class', 'card_title title-white');
  p.innerHTML = servercard.name;
  img.setAttribute('src', 'https://i.redd.it/b3esnz5ra34y.jpg');
};

data.forEach(servercard => buildcard(servercard));
