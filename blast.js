var countdownGenerator = function (x) {

var counter = x;



  return function () {
      if( counter > 0) {
        console.log("t-minus " + counter + "...");
        counter -= 1
      } else if ( counter === 0) {
        console.log("Blast Off!");
        counter -= 1
      }else {
        console.log("Rockets already gone, bub!");
        counter -= 1
      }


  }


};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!