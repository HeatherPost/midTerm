module.exports = {

    squareNumber: function(inputNum) {

        if (typeof inputNum == "number") {
            return inputNum * inputNum;
        }
        if (typeof inputNum == "string") {
            //converts from string to int
            var squareNum = parseInt(inputNum);
            return squareNum * squareNum;
        }
    }
}