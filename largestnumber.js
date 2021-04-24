function largestNumber(num) {
  let placeholder = '';
  for (let i = 0; i < num; i++) {
    placeholder = placeholder.concat('9');
  }
  return parseInt(placeholder);
}
console.log(largestNumber(3));
