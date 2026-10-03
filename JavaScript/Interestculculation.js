// functions_practice.js
function calculateInterest(principal, rate, years) {
  // Calculate the interest
  let interest = principal * rate * years;

  // Return the calculated interest
  return interest;
}
// Call the function with the required values
let totalInterest = calculateInterest(1000, 0.05, 3);

// Print the total interest earned to the console
console.log("Total interest earned:", totalInterest);