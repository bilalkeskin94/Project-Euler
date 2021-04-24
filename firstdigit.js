function firstDigit(str) {
  const chars = str.split('');
  for (let char of chars) {
    if (!isNaN(char)) {
      return char;
    }
  }
}
console.log(firstDigit('b31lal'));
