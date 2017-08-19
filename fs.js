const fs = require('fs');

let allNamesWithoutMe = '';

const names = (name) => {
  if(name != 'Phillip'){
    allNamesWithoutMe = allNamesWithoutMe + ' ' + name; 
  }
}

const allNames = (err, files) => {
  files.forEach(names);
  fs.writeFile('prntname.txt', allNamesWithoutMe, (err) => {
    console.log(err);
  });
}

fs.readdir('/home', allNames);
