import './style.css';
import getdata from './module/getdata.js';

const gameName = document.getElementById('gameName');
const gameScore = document.getElementById('gameScore');
const submit = document.getElementById('btn');


const getGameId = async () => {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: 'shah Game',
    }),
  });
  const game = await response.json();
  const gameId = game.result.split(': ')[1].replace(' added.', '');
  localStorage.setItem('gameId', gameId);
};

if (!localStorage.getItem('gameId')) {
  getGameId();
}

async function postData(gameId) {
  const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: gameName.value,
      score: gameScore.value,
    }),
  });
  return response.json();
}

const getGameIdFromLocalStorage = localStorage.getItem('gameId');
getdata(getGameIdFromLocalStorage);
submit.addEventListener('click', () => {
  postData(getGameIdFromLocalStorage);
});