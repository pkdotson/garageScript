const fs = require('fs');

let s = '';

const names = (name) => {
  if(name != 'Phillip'){
  s = s + name; 
  }
}

const allNames = (err, files) => {
  files.forEach(names);
  fs.writeFile('prntname.txt', s, (err) => {
    console.log(err);
  });
}
fs.readdir('/home', allNames);
