// Digit Product Sequence
// A digit product sequence is a type of sequence where the next number in the sequence is calculated by adding the product of each digit of the number and the number.
//
// For example:
//
// 1, 2, 4, 8, 16, 22, 26, 38, 62
//          (1x6)+16 (2x2)+22    2x6+26
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
// 1, 2, 4, 8, 16, 22, 26, 38, 62

// Iterative Version
console.time('dp')
let digitalNum = function(n) {
  result = 1;
  for(i=0; i<n-1; i++) {
  result = calc(result);
  }return result;
}


let calc = function(num) {
  if (num < 10) {
    return num+num;
  }
  else {
  let str = num.toString().split("");
  let times = parseInt(str[0]) * parseInt(str[1]);
  let final = times + num;
  return final;
  }
}

console.log(digitalNum(6));
digitalNum(120000);

console.timeEnd('dp')



// Recursive Version
let digitalNum = function(n) {
  result = 1;
  for(i=0; i<n-1; i++) {
  result = calc(result);
  }return result;
}


let calc = function(num) {
  if (num < 10) {
    return num+num;
  }
  else {
  let str = num.toString().split("");
  let times = parseInt(str[0]) * parseInt(str[1]);
  let final = times + num;
  return final;
  }
}

console.log(digitalNum(6));
digitalNum(120000);

console.timeEnd('dp');
