export default async function getdata(gameId) {
  const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`);
  const responseFromApi = await response.json();
  console.log('getdata', responseFromApi);
}
