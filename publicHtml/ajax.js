const fs = require('fs');
const express = require('express');
const app = express();

app.listen(3619);
app.use(express.static('public'));

app.get('/newrequest', (req, res) => {
  fs.appendFile('/home/pdiddy/garageScript/publicHtml/public/xmlpublicreq.txt',`\n Name: ${req.query.name} Comment: ${req.query.comment} \n`);
  res.send('Your comment has be recieved');
});
