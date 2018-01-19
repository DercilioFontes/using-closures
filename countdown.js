var countdownGenerator = function (x) {
  /* your code here */

  // originalTime stores (x + 1) to "iniciate" the countdown.
  var originalTime = x + 1;

  return function () {

    originalTime--;

    // this executes the countdown
    if (originalTime > 0) {
      console.log("T-minus " + originalTime + "...");
      // in case of finishing the countdown, prints the last phrases.
    } else if (originalTime === 0) {
      console.log("Blast Off!");
    } else { // and repeat the last one
      console.log("Rockets already gone, bub!");
    }
  };

};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!