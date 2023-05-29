let baseURL2 = "https://deckofcardsapi.com/api/deck";

//1.
oneCard = axios.get(`${baseURL2}/new/draw/?count=1`).then((result) => {
  console.log(`${result.data.cards[0].value} of ${result.data.cards[0].suit}`);
});

//2.

twoCards = axios.get(`${baseURL2}/new/draw/?count=1`).then((result) => {
  console.log(`${result.data.cards[0].value} of ${result.data.cards[0].suit}`);
  axios
    .get(`${baseURL2}/${result.data.deck_id}/draw/?count=1`)
    .then((result) => {
      console.log(
        `${result.data.cards[0].value} of ${result.data.cards[0].suit}`
      );
    });
});

//3.
