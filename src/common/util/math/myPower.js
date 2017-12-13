var mySquare = require('./mySquare');
var myCube = require('./myCube');

module.exports = {
    squareNum: function(inputNum) {
        var product = mySquare.squareNumber(inputNum);
        return product;
    },

    cubeNum: function(inputNum) {
        var product = myCube.cubeNumber(inputNum);
        return product;
    }
}