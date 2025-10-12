const palindromes = function (givenString) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

    const clean = givenString
        .toLowerCase()
        .split("")
        .filter((char) => alphanumerical.includes(char))
        .join("");

    const reverse = clean.split("").reverse().join("");

    return clean === reverse;
};

// Do not edit below this line
module.exports = palindromes;
