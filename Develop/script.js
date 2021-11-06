
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Assigned variables
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var specialChar = "!@,#$%&*=|-{}_();:?~`[]/\\+";
var characterSelection = "";


// creating/defining generatePassword function
function generatePassword() {
//Start user prompt process/get the necessary dasta for random gen
var endResult = "";

//1. prompt the user for password criteria
var promptStart = window.confirm('Would You Like Generate a password?');

  // if user picks "cancel", confirm and refresh page to start
  if (promptStart === false) {
    var confirmSkip = window.confirm("Are you sure?");
  if (confirmSkip) {
  return "Bye Bye!";
  }
 } 

// a. password length between8 and 128
var promptLength = prompt("How many characters in your random password? (Must be 8 - 128)");
  if(isNaN(promptLength)){
    alert("You must input a number!");
  return generatePassword()
  }
  if(promptLength<8 || promptLength> 128){
    alert("Invalid number! Please choose numbers between 8 - 128.");
  return generatePassword()
  }
    
// b. include lowercase, uppercase, numeric, or special characters?
var promptUpper = confirm("Would you like to include uppercase letters?");
var promptLower = confirm("Would you like to include lowercase letters?");
var promptNumbers = confirm("Would you like to include numerical values?");
var promptSpecial = confirm("Would you like to include any special characters?");

//2. validate input
  if(!promptUpper&&!promptLower&&!promptNumbers&&!promptSpecial){
    alert("You must choose at least 1 character type!");
  return generatePassword()
  }

//3. generate password based on criteria
  if(promptUpper){
    characterSelection += uppercase
  }
  if(promptLower){
    characterSelection += lowercase
  }

  if(promptNumbers) {
    characterSelection += numbers
  }

  if(promptSpecial) {
    characterSelection += specialChar
  }

for (var i = 0; i < length; i++) {
  endResult += characterSelection.charAt(Math.floor(Math.random() * characterSelection.length));
}

//4.) display password on page (return)
return endResult;

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
