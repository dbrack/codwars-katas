// Broken Greetings
// http://www.codewars.com/kata/broken-greetings/javascript

function Person(name){
  this.name = name;
}

Person.prototype.greet = function(otherName){
  return "Hi " + otherName + ", my name is " + this.name;
}
