const findTheOldest = function(people) {

    const currentYear = new Date().getFullYear();

    return people.reduce((oldest, person) => {
        return ((person.yearOfDeath || currentYear) - person.yearOfBirth) > ((oldest.yearOfDeath || currentYear) - oldest.yearOfBirth) ? person : oldest;
    });

};

// Do not edit below this line
module.exports = findTheOldest;
