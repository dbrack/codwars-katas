// Valid Parentheses
// http://www.codewars.com/kata/52774a314c2333f0a7000688/train/javascript

const validParentheses = (parens) => {
  const openingBrackets = ['('];
  const closingBrackets = [')'];
  const matches = [];

  for (let paren of parens) {
    if (openingBrackets.indexOf(paren) > -1) {
      matches.push(paren);
    }
    else if (closingBrackets.indexOf(paren) > -1) {
      const expectedBracket = openingBrackets[closingBrackets.indexOf(paren)];

      if (matches.length === 0 || matches.shift() !== expectedBracket) {
        return false;
      }
    }
  }

  return matches.length === 0;
}
