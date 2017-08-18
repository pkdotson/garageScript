const fs = require('fs');
const express = require('express');
const app = express();
app.listen(3619);
app.get('/', (req, res) => {
  let allNamesWithoutMe = '';
  const names = (name) => {
    if(name != 'Phillip'){
      allNamesWithoutMe = allNamesWithoutMe + ' ' + name;
    }
  }

  const allNames = (err, files) => {
    files.forEach(names);
    res.send(allNamesWithoutMe);
  }

fs.readdir('/home', allNames);
});

