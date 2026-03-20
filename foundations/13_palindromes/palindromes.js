const palindromes = function (string) {
  const cleanString = string.replace(/[^\w]/g, "").toLowerCase();
  const reverseString = cleanString.split("").reverse().join("");
  return reverseString === cleanString;
};

// Do not edit below this line
module.exports = palindromes;
