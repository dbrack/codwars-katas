// Default + Rest + Spread
// http://www.codewars.com/kata/default-plus-rest-plus-spread/javascript

const Default = (x, y = 7) => {
  return x + y
}

const Rest = (x, ...y) => {
  return x * y.length;
}

const Spread = (...nums) =>  {
  return nums.reduce(
    (current, next) => {
      return current + next;
    },
  0);
}
