const add = require('./algo1.js');

const test = (a,b,c) => {
  if(add(a,b) === c){
    console.log('correct');
  } else {
    console.log('incorrect');
  }
}

test(1,2,3);
test(5,5,10);
test(5,6,12);
test(3,3,9);
