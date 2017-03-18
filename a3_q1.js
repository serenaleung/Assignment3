// Javascript Exercises Next Module
//
// Question 1: Ruby Hashes
// Implement a Ruby like Hash in Javascript. You will be able to use Object as a base to get most of the behaviour.
//
// Name the class Hash.
// Its constructor will take an object as argument.
// It should add support for the following ruby Hash methods as prototype methods:
// .empty (name it .isEmpty in Javascript)
// .merge (merges both hashes into a new hash and returns it)
// .hasKey (checks if key is in hash)
// .invert (returns a new Hash with keys & their values and vice versa)
// .inspect(display the hash ruby style as a string)
// .keys (returns all hash keys in an array)
// .values (returns all hash values in an array)
// All methods that return a hash must return a new Hash object.
// Don't overthink this. Javascript Objects and Ruby Hashes are similar.
//
// Example usage:
//
// let emptyHash = new Hash({});
// let hash = new Hash({a: 1, b: 2, c: 3});
//
// hash.isEmpty() // returns false
// emptyHash.isEmpty() // returns true
//
// let merged = hash.merge(new Hash({bob: 'yo', jane: 'ya'}));
// // returns Hash {a: 1, b: 2, c: 3, bob: 'yo', jane: 'ya'}
// // should not mutate original hash
//
// merged !== hash // should be true
//
// hash.hasKey('a') // returns true
// hash.hasKey('bob') // returns false
// merged.hasKey('bob') // returns true
//
// // Values will have to made into strings
// hash.invert() // returns Hash {'1':'a', '2':'b', '3':'c'}
//
// hash.inspect() // returns "{'a' => 1, 'b' => 2, 'c' => 3}"
//
// hash.keys() // returns ['a', 'b', 'c']
// hash.values() // returns [1, 2, 3]
// Question 2: Stacks & Queues
// Implement a Stack and a Queue data structure in Javascript.
//

// stack is like pancakes, the first one goes on teh bottom the last one goes on top
// top gets taken out first
// queue whoever lines up first gets dealt with first

// Explain the difference between a stack and a queue.
// Write a Javascript constructor called Stack and another Javascript class called Queue.
// Each should have a prototype method, add, that adds an element to the stack or queue and returns it.
// Each should have a prototype method, remove, that removes an element from the stack or queue and returns it.
// Make sure that each constructor/class behaves properly as per definitions of stacks and queues.
// Question 3: Digit Product Sequence
// A digit product sequence is a type of sequence where the next number in the sequence is calculated by adding the product of each digit of the number and the number.
//
// For example:
//
// 1, 2, 4, 8, 16, 22, 26, 38, 62
// The above are the first 9 numbers of the sequence.
//
// Write a function, digitProduct, that takes a number, n, as an argument and calculates the nth number in the sequence.
//
// digitProduct(3) // returns 4
// digitProduct(6) // returns 22
// digitProduct(9) // returns 62
// Implement it iteratively
// Implement it recursively
// Benchmark the results



// .empty (name it .isEmpty in Javascript)
class Hash {
  constructor(x) {
    this.obj = x;
  }

  isEmpty() {
    if (Object.values(this.obj).length === 0) {
        return true;
      }
    else {
      return false;
    }
  }

  merge(hash1) {
    // let final = {};
    return new Hash(Object.assign(hash1.obj, this.obj));

    // return final;
  }

  hasKey(str) {
    return this.obj.hasOwnProperty(str);
  }

  invert(hash) {
    let final = {};
      for (let variables in this.obj) {
        final[this.obj[variables]] = variables;
      } return(final) ;
  }

  inspect(hash) {
    let final = "";
      for (let variables in this.obj) {
        final = final += (`${variables} => ${this.obj[variables]}, `);
      }
      final = final.slice(0, final.length-2);
      return "{" + final + "}";
  }

  keys() {
    let final = [];
        for (let variables in this.obj) {
          final.push(variables) ;
        } return(final) ;
  }

  values() {
    let final = [];
        for (let variables in this.obj) {
          final.push(this.obj[variables]) ;
        } return(final) ;
  }
}

let emptyHash = new Hash({});
let hash = new Hash({a: 1, b: 2, c: 3});
emptyHash.isEmpty(); // returns true
hash.isEmpty();
let merged = hash.merge(new Hash({bob: 'yo', jane: 'ya'}));
merged !== hash; // should be true
hash.hasKey('a') // returns true
hash.hasKey('bob') // returns false
merged.hasKey('bob') // returns true
console.log(hash.invert()) // returns Hash {'1':'a', '2':'b', '3':'c'}
console.log(hash.inspect()) // returns "{'a' => 1, 'b' => 2, 'c' => 3}"
console.log(hash.invert()) // returns Hash {'1':'a', '2':'b', '3':'c'}
console.log(hash.inspect()) // returns "{'a' => 1, 'b' => 2, 'c' => 3}"
// console.log(hash.keys()) // (returns all hash keys in an array)
console.log(hash.values()) // (returns all hash values in an array)

// .merge (merges both hashes into a new hash and returns it)
// hasOwnproperty
// .hasKey (checks if key is in hash)
// obj.entrance
// .invert (returns a new Hash with keys & their values and vice versa)
// .inspect(display the hash ruby style as a string)
// .keys (returns all hash keys in an array)
// .values (returns all hash values in an array)
