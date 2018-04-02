var  stuff = require('./stuff');

console.log(stuff.counter(['messi', 'ronaldo', 'iniesta']));


console.log(stuff.adder(2, 4));

console.log(stuff.adder(2, stuff.pi));


var addAll = function(arr){
  var total = 0,
      i = 0;
  while(i < arr.length){
    total +=arr[i]
    i++;
  }
  console.log(total);
}

addAll([1, 2, 3, 4]);