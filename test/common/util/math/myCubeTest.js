const assert = require('chai').assert;
const myCube = require('../../../../src/common/util/math/myCube.js');

const num1 = 3;
const num1String = "3";
const ans1 = 27;


describe('myCube', function() {
    describe('cubeNumber', function() {
        //cube test with string value
        it('cubeNumber("' + num1String + '") should return cubed number value of ' + num1, function() {
            let result = myCube.cubeNumber(num1String);
            assert.equal(result, ans1);
        });
        //cube test with num value
        it('cubeNumber("' + num1 + '") should return cubed value of ' + num1, function() {
            let result = myCube.cubeNumber(num1String);
            assert.equal(result, ans1);
        });
    });
});