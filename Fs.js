const fs = require('fs');

let string = '';

const names = (name) => {
  if(name != 'Phillip'){
  string = string + name; 
  }
}

const allNames = (err, files) => {
  files.forEach(names);
  fs.writeFile('prntname.txt', s, (err) => {
    console.log(err);
  });
}

fs.readdir('/home', allNames);
