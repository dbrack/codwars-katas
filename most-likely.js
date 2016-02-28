// Most Likely
// http://www.codewars.com/kata/most-likely/javascript

function mostLikely(prob1, prob2) {

  function getArrayOfStrings(vals) {
    return vals.split(':');
  }

  function getLikelyHood(prob) {
    return prob[0] / prob[1];
  }

  return getLikelyHood(getArrayOfStrings(prob1)) > getLikelyHood(getArrayOfStrings(prob2));
}
