module.exports = {

    cubeNumber: function(inputNum) {
        if (typeof inputNum == "number") {
            return inputNum * inputNum * inputNum;
        }
        if (typeof inputNum == "string") {
            //converts from string to int
            var cubeNum = parseInt(inputNum);
            return cubeNum * cubeNum * cubeNum;
        }
    }
}