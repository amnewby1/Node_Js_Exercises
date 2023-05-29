// //Part 1: Number Facts

let myFavNum = 13;
let baseURL = "http://numbersapi.com";

//1.
firstFact = axios
  .get(`${baseURL}/${myFavNum}`)
  .then((result) => console.log(result.data));

//2.
let multNums = [2, 4, 7, 8, 10];
firstFact = axios
  .get(`${baseURL}/${multNums}`)
  .then((result) => console.log(result.data));

//3.
let myFacts = [];

async function test() {
  await axios
    .get(`${baseURL}/${myFavNum}`)
    .then((result) => {
      myFacts.push(result.data);
      return axios.get(`${baseURL}/${myFavNum}`);
    })
    .then((result) => {
      myFacts.push(result.data);
      return axios.get(`${baseURL}/${myFavNum}`);
    })
    .then((result) => {
      myFacts.push(result.data);
      return axios.get(`${baseURL}/${myFavNum}`);
    })
    .then((result) => {
      myFacts.push(result.data);
      return axios.get(`${baseURL}/${myFavNum}`);
    })
    .catch((err) => console.log(err));

  console.log(myFacts.length);

  for (let i = 0; i < myFacts.length; i++) {
    eachFact = document.createElement("li");
    console.log(myFacts[i]);
    eachFact.innerText = myFacts[i];
    factlist = document.getElementById("factlist");
    factlist.append(eachFact);
  }
}

test();
