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
  var passwordLength = prompt("How long password length do you need?");
  var isSpecialChar = confirm("Do you want to add Special Charactors?");
  var isUpperCase = confirm("Do you want to add Upper Case letters?");
  var isLowerCase = confirm("Do you want to add Lower Case letters?");
  var numPassWord ="";
  var specialCharPassWord ="";
  var upperCasePassWord ="";
  var lowerCasePassWord ="";
  var totalPassWord = "";
  var shuffledPassWord ="";
  
  for (let i = 0; i < passwordLength; i++){
        numPassWord += Math.round(Math.random() * 9) + 1;
  }

  if(isSpecialChar){
    for (let i = 0; i < passwordLength; i++){
      specialCharPassWord += String.fromCharCode(Math.round(Math.random() * 14) + 33);  // from 33 to 47
    }
  }

  if(isUpperCase){
    for (let i = 0; i < passwordLength; i++){
      upperCasePassWord += String.fromCharCode(Math.round(Math.random() * 25) + 65);  // from 65 to 90
    }
  }

  if(isLowerCase){
    for (let i = 0; i < passwordLength; i++){
      lowerCasePassWord += String.fromCharCode(Math.round(Math.random() * 25) + 97);  // from 97 to 132
    }
  }

  // Add to totalPassword
  totalPassWord = numPassWord + lowerCasePassWord + upperCasePassWord + specialCharPassWord;
  
  //Debug - checking totalPassword.length
  console.log("Length: " + totalPassWord.length);

  // Shuffle 
  var iteratorAmount = 1;
  if(isSpecialChar || isUpperCase || isLowerCase){
    iteratorAmount = 2;
  }
  if((isSpecialChar && isUpperCase) || (isSpecialChar && isLowerCase) || (isUpperCase && isLowerCase) ){
    iteratorAmount = 3;
  }
  if(isSpecialChar && isUpperCase && isLowerCase){
    iteratorAmount = 4;
  }
  
  //Debug - checking iteratorAmount
  console.log("iteratorAmount : " + iteratorAmount);

  for (let i = 0; i < passwordLength; i++){
    shuffledPassWord += totalPassWord[Math.round(Math.random() * (passwordLength * iteratorAmount))];
    
    //Debug - checking index number
    console.log("Random index: "+ Math.round(Math.random() * (passwordLength * iteratorAmount)));
  }
  return shuffledPassWord;
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
