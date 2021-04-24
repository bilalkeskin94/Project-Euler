function caseInsensitivePalindrome(str) {
  //  write code here.
  const caselessStr = str.toLowerCase();
  let reverseStr = '';
  for (let i = caselessStr.length - 1; i >= 0; i--) {
    reverseStr += caselessStr[i];
  }
  return reverseStr === caselessStr;
}
console.log(caseInsensitivePalindrome('bilal'));
