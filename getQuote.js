const quotes = require("./gpt.json");

const randomIndex = Math.floor(Math.random() * quotes.length);
const data = quotes[randomIndex]
const quote = `${data.quote} \n -${data.author}`;

console.log(quote);
