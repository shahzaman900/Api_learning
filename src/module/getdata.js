// import { li } from './postdata.js';
const getdata = async (gameId) => {
  const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`);
  return response.json();
};

export default getdata;