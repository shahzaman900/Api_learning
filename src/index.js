/* eslint-disable no-unused-vars */
import './style.css';
import getdata from './module/getdata.js';
import { postData, displayData } from './module/postdata.js';

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

window.onload = () => {
  displayData();
};