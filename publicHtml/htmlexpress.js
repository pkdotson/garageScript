const fs = require('fs');
const express = require('express');
const app = express();

app.listen(3619);
app.use(express.static('public'));

app.get('/send', (req, res) => {
  const name = req.query.Name;
  const comment = req.query.Comment;
  fs.writeFile('/home/pdiddy/garageScript/publicHtml/public/note.txt', "hey" + " " +name+" "+comment);
  res.send('done');
});
