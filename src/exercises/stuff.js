function counter(arr){
	return 'The array has '+  arr.length +' elements';

}

function adder (a, b){
	return `the result of the sum is ${a+b}`;
}

var pi = 3.1416;


module.exports.counter = counter;
module.exports.adder = adder;
module.exports.pi = pi;