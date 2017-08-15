const fs = require('fs');

const names = (name) => {
  if(name != 'Phillip'){
    console.log(name);
  }
}

const allNames = (err, files) => {
  files.forEach(names);
}

fs.readdir('/home', allNames);
