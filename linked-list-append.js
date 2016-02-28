// Linked Lists - Append
// http://www.codewars.com/kata/linked-lists-append/javascript

function Node(data) {
  this.data = data;
  this.next = null;
}

function append(listA, listB) {
  if(!listA) {
    return listB;
  }

  listA.next = append(listA.next, listB);
  return listA;
}
