function palindrome() {
  // Getting the string and the p elements 
  var myString = document.getElementById('text-field-id').value;
  var paragraphTrue = document.getElementById('true');
  var paragraphFalse = document.getElementById('false');
  // clearing past palindrome request
  paragraphTrue.innerHTML =  " ";
  paragraphFalse.innerHTML =  " ";
  // Removing all non-alphanumeric characters
  var nonAlphaNumeric = myString.replace(/[^0-9a-z]/gi, '');
  // turning the string into lower case 
  var lowerCase = nonAlphaNumeric.toLowerCase();
  // Reversing the string
  var reversed = lowerCase.split('').reverse().join('');
  // Check if the reversed string is the same as the non-reversed
  if ( lowerCase === reversed) {
    paragraphTrue.innerHTML =  myString + " " + "it's a palindrome";

  } else {
    paragraphFalse.innerHTML = myString + " " + "it's not a palindrome";
  }
}
