// // The second argument/parameter is expected to be a function
// function findWaldo(arr, found) {
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === "Waldo") {
//       found(i);   // execute callback
//     }
//   }
// }

// function positionFound(i) {
//   console.log("Found Waldo at index " + i +"!");
// }

// findWaldo(["Alice", "Bob", "Waldo", "Winston"], positionFound);


var findWaldo = ["Alice", "Bob", "Waldo", "Winston"]
findWaldo.forEach(function(element, food) {
  if(element === "Waldo") {
  console.log("Found Waldo at index " + food +"!");
  }
});

