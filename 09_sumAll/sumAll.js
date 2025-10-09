const sumAll = function(firstNumber, secondNumber) {

    if (!Number.isInteger(firstNumber) || !Number.isInteger(secondNumber) 
        || firstNumber < 0 || secondNumber < 0)
    {
        return 'ERROR';
    }

    if (firstNumber > secondNumber)
    {
        const middleValue = firstNumber;
        firstNumber = secondNumber;
        secondNumber = middleValue;
    }

    let sum = 0;
    for(let i = firstNumber; i <= secondNumber; i++)
    {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
