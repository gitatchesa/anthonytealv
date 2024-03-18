// Helper function to calculate the area of a rectangle
function calculateRectangleArea(width, height) {
    return width * height;
  }
  
  // Helper function to calculate the circumference of a circle
  function calculateCircleCircumference(radius) {
    return 2 * Math.PI * radius;
  }
  
  // Helper function to check if a string is palindrome
  function isPalindrome(str) {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
  }
  
  // Testing the helper functions
  console.log(calculateRectangleArea(5, 3)); // Output: 15
  console.log(calculateCircleCircumference(4)); // Output: ~25.1327 (approximately)
  console.log(isPalindrome("radar")); // Output: true
  