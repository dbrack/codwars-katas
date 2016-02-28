// Vampire Numbers
// http://www.codewars.com/kata/vampire-numbers-1/javascript

var vampire_test = function(a, b){
  var multiplicands = '' + a + b;
  var product = '' + a * b;

  function sortValsAsc(val){
    return val.split('').sort().join('');
  }

  return sortValsAsc(product) === sortValsAsc(multiplicands);
}
