/** Textual markov chain generator */

class MarkovMachine {
  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter((c) => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    const chainTable = {};
    for (let i = 0; i < this.words.length - 1; i++) {
      const currentWord = this.words[i];
      const nextWord = this.words[i + 1];
      if (!(currentWord in chainTable)) {
        chainTable[currentWord] = [];
      }
      chainTable[currentWord].push(nextWord);
    }
    this.chainTable = chainTable;
  }

  /** return random text from chains */

  makeText(numWords = 100) {
    const wordOptions = Object.keys(this.chainTable);
    let currentWord =
      wordOptions[Math.floor(Math.random() * wordOptions.length)];
    let outputText = [];
    while (outputText.length < numWords && currentWord in this.chainTable) {
      outputText.push(currentWord);
      const nextWord = this.chainTable[currentWord];
      currentWord = nextWord[Math.floor(Math.random() * nextWord.length)];
    }
    return outputText.join(" ");
  }
}

module.exports = MarkovMachine;
