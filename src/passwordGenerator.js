// Math.floor(Math.random() * (max - min + 1) + min);
const pickCharacterFromRange = range => {
  return String.fromCharCode(
    Math.floor(Math.random() * (range.max - range.min + 1) + range.min)
  );
};

const asciiRanges = {
  lowerCase: {
    min: 97,
    max: 122
  },
  upperCase: {
    min: 65,
    max: 90
  },
  numbers: {
    min: 48,
    max: 57
  },
  symbols: [
    {
      min: 33,
      max: 47
    },
    {
      min: 58,
      max: 64
    },
    {
      min: 91,
      max: 96
    },
    {
      min: 123,
      max: 126
    }
  ]
};

export function generatePassword(
  length = 12,
  upperCaseEnabled = false,
  numbersEnabled = false,
  symbolsEnabled = false
) {
  var result = "";
  var options = ["lowerCase"];
  if (upperCaseEnabled) options.push("upperCase");
  if (numbersEnabled) options.push("numbers");
  if (symbolsEnabled) options.push("symbols");
  for (var i = 0; i < length; i++) {
    // Randomly pick between upper, lower, number or symbol
    const selectedOption = options[Math.floor(Math.random() * options.length)];
    switch (selectedOption) {
      case "lowerCase":
        result += pickCharacterFromRange(asciiRanges.lowerCase);
        break;
      case "upperCase":
        result += pickCharacterFromRange(asciiRanges.upperCase);
        break;
      case "numbers":
        result += pickCharacterFromRange(asciiRanges.numbers);
        break;
      case "symbols":
        // have to randomly pick a symbol range
        const rangeSelected = Math.floor(Math.random() * 4);
        result += pickCharacterFromRange(asciiRanges.symbols[rangeSelected]);
        break;
      default:
        // do the same as lower case
        result += pickCharacterFromRange(asciiRanges.lowerCase);
        break;
    }
  }
  return result;
}
