///////////////////////////////////////////////////////////////////////
// PASSWORD GENERATOR
//
// * For this assignment, you will not be changing the HTML and CSS at all.
//
// * You will need a generatePassword function is called when the user
//   clicks the Generate Password button.
//
// * You can create other functions that are called from within
//   generatePassword
//
// * Gather user input with prompt's and confirm's

function generatePassword(){
  var passwordLength = prompt("How long password length do you need? (Range 8 to 128)");

  if(passwordLength < 8){
    alert("Enter at least 8");
    exit;
  }

  if(passwordLength > 128){
    alert("Enter less than 129");
    exit;
  }

  var passWord = "";
  var isNumeric = confirm("Do you want to use Numeric with?");
  var isSpecialChar = confirm("Do you want to use Special Charactors with?");
  var isUpperCase = confirm("Do you want to use Upper Case letters with?");
  var isLowerCase = confirm("Do you want to use Lower Case letters with?");
  
  var totalLetters = "";
  var numeric = "1234567890";
  var specialChar = "!@#$%^&*()";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  
  if(isNumeric){
    totalLetters += numeric;
  }

  if(isSpecialChar){
    totalLetters += specialChar;
  }

  if(isUpperCase){
    totalLetters += upperCase;
  }

  if(isLowerCase){
    totalLetters += lowerCase;
  }

  if(totalLetters === ""){
    alert("You should choose one of types.");
    exit;
  }

  //Debugging - Letter Legnth
  console.log("Letter Length : " + totalLetters.length);

  for (let i = 0; i < passwordLength; i++){
    let index = Math.floor(Math.random() * totalLetters.length);
    passWord += totalLetters.charAt(index);

    //Debugging - Display index
    console.log("Index : " +index);
  }

  return passWord;
}



///////////////////////////////////////////////////////////////////////
// DO NOT TOUCH THIS CODE
//
// This code handles:
// * clicking the Generate Password
// * writing the password to the screen
//

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//////////////////////////////////////////////////////////////////////
