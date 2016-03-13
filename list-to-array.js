// List to Array
// http://www.codewars.com/kata/557dd2a061f099504a000088/javascript

const listToArray = (list) => {
  const value = !list ?
                    [] :
                    [list.value]
                    .concat(listToArray(list.next));
  return value;
}
