import getdata from './getdata.js';

const gameName = document.getElementById('gameName');
const gameScore = document.getElementById('gameScore');
const submit = document.getElementById('btn');

const postData = async (gameId) => {
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

const getGameIdFromLocalStorage = localStorage.getItem('gameId');
submit.addEventListener('click', () => {
  postData(getGameIdFromLocalStorage);
});
const data = await getdata(getGameIdFromLocalStorage);
console.log(data);

export default postData;