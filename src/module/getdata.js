const getdata = async (gameId) => {
  const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`);
  // const data = await response.json();
  // console.log(data);
  return response.json();
};
export default getdata;