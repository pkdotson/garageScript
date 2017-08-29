const express = require('express');
const fs = require('fs');
const app = express();

app.listen(3619);
app.use(express.static('public'));

app.get('/submit', (req, res) => {
  fs.appendFile('/home/pdiddy/garageScript/publicHtml/public/inbox.txt', `\n Name: ${req.query.name} Comment: ${req.query.comment} \n`);
});
