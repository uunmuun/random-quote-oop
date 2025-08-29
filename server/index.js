const express = require("express");
const quotes = require("./data/quotes");
const app = express();
const PORT = 3000;

function getRandomQuote() {
  const randomIdex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIdex];
  return quote;
}

app.get("/quotes/random-single", (req, res) => {
  const randomQuote = getRandomQuote();
  res.json(randomQuote);
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
