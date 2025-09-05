
// 1. Declare a variable in global scope called customerName using var
var customerName = 'bob';

// 2. Function to uppercase the global customerName variable
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// 3. Function that sets bestCustomer in global scope
function setBestCustomer() {
  bestCustomer = 'not bob'; // No var/let/const = global variable (yikes)
}

// 4. Function to overwrite the bestCustomer variable
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// 5. Declare a constant in global scope
const leastFavoriteCustomer = 'Karen';

// 6. Function to try to change the constant (will throw an error)
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'Not Karen'; // This line will cause an error
}
