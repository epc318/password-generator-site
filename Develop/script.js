
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// creating/defining generatePassword function
function generatePassword() {
  console.log("we click it cuh");

  //1. prompt the user for password criteria
  var promptStart = window.confirm('Would You Like Generate a password?')
      
     // if user picks "cancel", confirm and refresh page to start
      if (promptStart === false) {
        var confirmSkip = window.confirm("Are you sure?")
        if (confirmSkip) {
          return "Bye Bye!";
        }
      }

     // a. password length between8 and 128
  var promptLength = window.prompt('How many charaters would you like your password to be? (Must be 7 < 129)')
      
       while (promptLength >= 129 || promptLength <= 7) {
        if (promptLength >= 129 || promptLength <= 7) {
      window.alert("Invalid number! Please enter another.");
      
      }
      if (promptLength < 129 || promptLength > 7)
      break;
    }
    

  // b. include lowercase, uppercase, numeric, or special characters?
 // var promptLower = windowconfirm('Would you like to include lowercase letters?')

     // if (promptLower === false)
   
//  var promptUpper = windowconfirm('Would you like to include uppercase letters?')

     // if (promptUpper === false)

 // var promptNumeric = windowconfirm('Would you like to include numeric values?')

  //var promptSpecial = windowconfirm('Would you like to include special characters?')
  
  
  
  
  
  //2.) validate input
  //3. generate password based on criteria
  
  
  //4.) display password on page (return)
  return "genreated password will go here";
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
