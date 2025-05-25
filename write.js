let fs = require('fs');
const { json } = require('stream/consumers');

fetch('https://stoic.tekloon.net/stoic-quote').then(
  response => response.json()
).then(data => {
  console.log(data.data)
  fs.appendFile("quotes.json", JSON.stringify(data.data) + ",", function(err) {
    if (err) throw err;

  });
}).catch(error => {
  console.log(error)
})

