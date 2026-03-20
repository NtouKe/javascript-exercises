const findTheOldest = function (person) {
  const currentYear = new Date().getFullYear();
  return person.reduce((oldest, currentPerson) => {
    const age = (currentPerson.yearOfDeath || currentYear) - currentPerson.yearOfBirth;
    const oldestAge = oldest ? (oldest.yearOfDeath || currentYear) - oldest.yearOfBirth : -1;
    return age > oldestAge ? currentPerson : oldest;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
