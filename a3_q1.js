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
console.log(hash.keys()) // (returns all hash keys in an array)
console.log(hash.values()) // (returns all hash values in an array)
