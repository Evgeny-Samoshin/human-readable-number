module.exports = function toReadable (number) {
  if (number === 0) return 'zero';

  let str = '';
  const dict1 = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
  };
  const dict2 = {
    1: 'ten',
    2: 'twenty',
    3: 'thirty',
    4: 'forty',
    5: 'fifty',
    6: 'sixty',
    7: 'seventy',
    8: 'eighty',
    9: 'ninety',
  }

  if ( Math.trunc(number / 100)) {
    str = `${dict1[Math.trunc(number / 100)]} hundred`;
  }
  if ((number%100 !== 0) && (number%100 >= 20)) {
    str += " " + dict2[Math.trunc( (number%100) / 10 )];

    if (number%10) {
      str += " " + dict1[number%10];
    }
  }
  else if ((number%100 !== 0) && (number%100 < 20)) {
    str += " " + dict1[Math.trunc( (number%100) )];
  }

  return str.trim();
}