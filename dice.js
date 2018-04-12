function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];


  return function() {
    var counter=0;
    var output=list[counter];
    counter +=1
    return output
  }


}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6