// Assignment code here

function generatePassword() {
  var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var numeric = ["0","1","2","3","4","5","6","7","8","9"];
  var special = ["!","#","$","%","&","'","(",")","*","+",",","-",".","/",":"];
  var numOfChars;
  var isLC;
  var isUC;
  var isNum;
  var isSpecial;

  do {
    var isValid = true;
    numOfChars = window.prompt(
      "How many characters in length would you like your password to be (8 to 128)?"
    );

    // if (!numOfChars) {
    //   return;
    // }

    if (numOfChars >= 8 && numOfChars <= 128) {
      isValid = true;
    } else {
      isValid = false;
    }

    if (!isValid) {
      window.alert("Please enter a number between 8 and 128.");
    }
  } while (!isValid);

  isLC = window.confirm("Would you like to use lowercase letters?");
  isUC = window.confirm("Would you like to use uppercase letters?");
  isNum = window.confirm("Would you like to use numbers?");
  isSpecial = window.confirm("Would you like to use special characters (e.g. '$', '%', '/', etc.?");
  return (numOfChars + isLC + isUC + isNum + isSpecial);
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
