const assert = require('chai').assert;
const mySquare = require('../../../../src/common/util/math/mySquare.js');

const num1 = 3;
const num1String = "3";
const ans1 = 9;


describe('mySquare', function() {
    describe('squareNumber', function() {
        //square test with string value
        it('squareNumber("' + num1String + '") should return cubed number value of ' + num1, function() {
            let result = mySquare.squareNumber(num1String);
            assert.equal(result, ans1);
        });
        //square test with num value
        it('squareNumber("' + num1 + '") should return cubed value of ' + num1, function() {
            let result = mySquare.squareNumber(num1String);
            assert.equal(result, ans1);
        });
    });
});