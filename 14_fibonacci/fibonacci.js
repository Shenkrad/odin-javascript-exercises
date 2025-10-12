const fibonacci = function(index) {
    let indexNumber;
    if (typeof countArg !== 'number') {
        indexNumber = parseInt(index)
    } else {
        indexNumber = index
    }
    
    if (indexNumber < 0) return "OOPS";
    if (indexNumber == 0) return 0;

    let num = 0;
    let lastValue = 1;
    let lastValue2 = 0;

    for(let i = 1; i < indexNumber; i++) {
        num = lastValue + lastValue2;
        lastValue2 = lastValue;
        lastValue = num;
    }
    return num;
};

// Do not edit below this line
module.exports = fibonacci;
