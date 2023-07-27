import getdata from './getdata.js';

const gameName = document.getElementById('gameName');
const gameScore = document.getElementById('gameScore');
const submit = document.getElementById('btn');
const ul = document.getElementById('ul');
const refresh = document.getElementById('refresh');

export const postData = async (gameId) => {
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
};

export const getGameIdFromLocalStorage = localStorage.getItem('gameId');

const data = await getdata(getGameIdFromLocalStorage);
const games = data.result;
export const displayData = async () => {
  ul.innerHTML = '';
  games.forEach((game) => {
    ul.innerHTML += `
      <li class='li'>
        <p>${game.user}</p>
        <p>${game.score}</p>
      </li>`;
  });
};

submit.addEventListener('click', () => {
  postData(getGameIdFromLocalStorage);
  displayData();
});

refresh.addEventListener('click', () => {
  displayData();
});

export default postData;