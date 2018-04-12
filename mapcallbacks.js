var words = ["ground", "control", "to", "major", "tom"];

var wordLength = words.map(function(word) {
  return word.length;
});

var capitalWord = words.map(function(word) {
  return word.toUpperCase();
});

var back = words.map(function(word) {
  return word.split('').reverse().join('');
});

console.log(wordLength);
console.log(capitalWord);
console.log(back);


