function maxMultiple(divisor, bound) {
  for (let i = bound; i >= 0; i--) {
    if (i % divisor === 0) {
      return i;
    }
  }
}
console.log(maxMultiple(5, 26));
