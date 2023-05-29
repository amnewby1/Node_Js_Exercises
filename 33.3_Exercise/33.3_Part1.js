// //Part 1: Number Facts
let baseURL = "http://numbersapi.com";
let myFavNum = 13;
//1.
async function firstFact(num) {
  fact = await axios.get(`${baseURL}/${num}`);
  console.log(fact.data);
}
firstFact(myFavNum);

//2.
let multNums = [2, 4, 7, 8, 10];
async function multipleFacts(nums) {
  let facts = await axios.get(`${baseURL}/${nums}`);
  console.log(facts.data);
}

multipleFacts(multNums);

//3.
async function myFactsListParallel(num) {
  const factPromises = Array.from({ length: 4 }, () =>
    axios.get(`${baseURL}/${num}`)
  );
  const factList = await Promise.all(factPromises);

  for (const fact of factList) {
    console.log(fact.data);
  }
}

myFactsListParallel(myFavNum);
