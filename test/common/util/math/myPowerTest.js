const assert = require('chai').assert;
const mySquare = require('../../../../src/common/util/math/mySquare.js');
const myCube = require('../../../../src/common/util/math/myCube.js');

const num1 = 3;
const num1String = "3";
const ansCube = 27;
const ansSquare = 9;


describe('myCube', function() {
    describe('cubeNumber', function() {
        //cube test with string value
        it('cubeNumber("' + num1String + '") should return cubed number value of ' + num1, function() {
            let result = myCube.cubeNumber(num1String);
            assert.equal(result, ansCube);
        });
        //cube test with num value
        it('cubeNumber("' + num1 + '") should return cubed value of ' + num1, function() {
            let result = myCube.cubeNumber(num1String);
            assert.equal(result, ansCube);
        });
    });
});

describe('mySquare', function() {
    describe('squareNumber', function() {
        //square test with string value
        it('squareNumber("' + num1String + '") should return cubed number value of ' + num1, function() {
            let result = mySquare.squareNumber(num1String);
            assert.equal(result, ansSquare);
        });
        //square test with num value
        it('squareNumber("' + num1 + '") should return cubed value of ' + num1, function() {
            let result = mySquare.squareNumber(num1String);
            assert.equal(result, ansSquare);
        });
    });
});