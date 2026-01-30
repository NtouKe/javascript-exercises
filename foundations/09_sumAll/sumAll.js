const sumAll = function (a, b) {
  if (!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR";
  if (a < 0 || b < 0) return "ERROR";

  let smallNumber = 0;
  let bigNumber = 0;
  if (b < a) {
    smallNumber = b;
    bigNumber = a;
  } else {
    smallNumber = a;
    bigNumber = b;
  }

  let total = 0;
  for (i = smallNumber; i <= bigNumber; i++) total += i;

  return total;
};

// Do not edit below this line
module.exports = sumAll;
