const reverseString = function (string) {
  let reverseString = "";
  for (i = 0; i < string.length; ++i) {
    reverseString += string.at(-i - 1);
  }
  return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
