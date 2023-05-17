function reverseString(string) {
    return string.split('').reverse().join('');
  };


function capitalizeString(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  
  module.exports = { reverseString, capitalizeString };
  