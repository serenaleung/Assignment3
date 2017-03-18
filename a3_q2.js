// Question 2: Stacks & Queues
// Implement a Stack and a Queue data structure in Javascript.
//
// Explain the difference between a stack and a queue.
// Write a Javascript constructor called Stack and another Javascript class called Queue.
// Each should have a prototype method, add, that adds an element to the stack or queue and returns it.
// Each should have a prototype method, remove, that removes an element from the stack or queue and returns it.
// Make sure that each constructor/class behaves properly as per definitions of stacks and queues.



// Stack is like pancakes - the first one goes on the bottom and the last one goes on top. The top gets taken out first.
// A queue is like whoever lines up first gets dealt with first.

const Stack = function() {
  this.s = [];
}

Stack.prototype.add = function(element) {
  this.s.push(element);
  return this.s
}

Stack.prototype.remove = function(element) {
  this.s.pop(element);
  return this.s
}

class Queue {
  constructor(s) {
    this.q = [];
  }
}

Queue.prototype.add = function(element) {
  this.q.push(element);
  return this.q
}

Queue.prototype.remove = function(element) {
  this.q.shift(element);
  return this.q
}

s = new Stack;
s.add("apple");
console.log(s.add("banana"));
console.log(s.remove());

q = new Queue;
q.add("apple");
console.log(q.add("banana"));
console.log(q.remove());
