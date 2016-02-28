// Write shortest function to calculate Average number of Array
// http://www.codewars.com/kata/write-shortest-function-to-calculate-average-number-of-array/javascript

function avg(a){
  return a.reduce((current, next) => current + next, 0) / a.length;
}
