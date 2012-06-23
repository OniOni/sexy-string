var should = require('should'),
color = require('./lib/main');

"hey".times(3).should.equal('heyheyhey');

console.log("hey".times(3).grey());
console.log("this is red".red());
console.log("this is green".green());
console.log("this is red".color('red'));

"this is it".contains('is').should.equal(true);

"".contains('is').should.equal(false);

