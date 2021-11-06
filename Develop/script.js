
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Assigned variables
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var specialChar = "!@,#$%&*{}[]/\\+=";
var chosenCharacters = "";


// creating/defining generatePassword function
function generatePassword() {
//Start user prompt process/get the necessary dasta for random gen
var result = "";

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
  
     var promptLength = prompt("How many characters in your random password? (between 8 and 128)");
     if(isNaN(promptLength)){
       alert("You must input a number!");
       return generatePassword()
     }
     if(promptLength<8 || promptLength> 128){
       alert("Invalid number! Please choose numbers between 8 - 128.");
       return generatePassword()
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
