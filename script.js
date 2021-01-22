//0,1,1,2,3,5,8,13,21, 34, 55, 89,144

const fib = (n) => {
  let arr = [];
  arr[0] = 0;
  arr[1] = 1;
  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr;
};
console.log(fib(10));
