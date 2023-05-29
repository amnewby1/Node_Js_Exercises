let baseURL = "https://deckofcardsapi.com/api/deck";

//1.
async function oneCard() {
  let res = await axios.get(`${baseURL}/new/draw/?count=1`);
  console.log(`${res.data.cards[0].value} of ${res.data.cards[0].suit}`);
}
oneCard();

//2.
async function twoCards() {
  let cardOne = await axios.get(`${baseURL}/new/draw/?count=1`);
  console.log(
    `${cardOne.data.cards[0].value} of ${cardOne.data.cards[0].suit}`
  );
  let cardTwo = await axios.get(
    `${baseURL}/${cardOne.data.deck_id}/draw/?count=1`
  );
  console.log(
    `${cardTwo.data.cards[0].value} of ${cardTwo.data.cards[0].suit}`
  );
}

twoCards();
