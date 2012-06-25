var should = require('should'),
color = require('./lib/main');

"hey".should.be.a('string');
"hey".times(3).should.be.a('string');

"hey".times(3).should.equal('heyheyhey');
"hey".times(3).grey().should.equal('\033[37mheyheyhey\033[0m');

"this is it".contains('is').should.equal(true);
"this is it".contains('not').should.equal(false);

"This should contain the string we are looking for".contains('the string we are looking for').should.be.ok;
"And this one should not contain the string we are looking for".contains('the string we are not looking for').should.not.be.ok;

"".contains('is').should.not.be.ok;

