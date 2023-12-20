// Assignment code here

/* generatePassword:
Prompts the user for the length of password as well as the character sets to be used.  
Returns a password that meets the user's conditions. */
function generatePassword() {
  //Defning sets of characters to be used to generate passwords
  const lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  const upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  const numeric = ["0","1","2","3","4","5","6","7","8","9"];
  const special = ["!","#","$","%","&","'","(",")","*","+",",","-",".","/",":"];
  
  //# of character variables
  let isValid = true; //for error checking # of characters
  let numOfChars; //# of characters in length the password should be
  
  //Should we use characters set?
  let isLC; //lowercase
  let isUC; //uppercase
  let isNum; //numbers
  let isSpecial; //special characters
  
  let charCollection = []; //will contain all valid characters
  let newPass= ""; //will contain new password to be returned
  let index; //index to charCollection

  do {
    //Prompt the user for the number of characters to use.
    numOfChars = window.prompt("How many characters in length would you like your password to be (8 to 128)?");
    // Exit if user cancels
    if (!numOfChars) {
      return;
    }
    //Check if the user input is in the correct range
    if (numOfChars >= 8 && numOfChars <= 128) {
      isValid = true;
    } else {
      isValid = false;
    }
    //Show an alert if the input is out of range
    if (!isValid) {
      window.alert("Please enter a number between 8 and 128.");
    }
    //Continue loop until user input is in range
  } while (!isValid);

  //Prompts for user to decide which character sets to use
  isLC = window.confirm("Would you like to use lowercase letters?");
  isUC = window.confirm("Would you like to use uppercase letters?");
  isNum = window.confirm("Would you like to use numbers?");
  isSpecial = window.confirm("Would you like to use special characters (e.g. '$', '%', '/', etc.?");

  //Add character sets to uber collection if use requests
  if (isLC) {
    charCollection = charCollection.concat(lowerCase);
  }; 
  if (isUC) {
    charCollection = charCollection.concat(upperCase);
  };
  if (isNum) {
    charCollection = charCollection.concat(numeric);
  }; 
  if (isSpecial) {
    charCollection = charCollection.concat(special);
  };
  
  //Builds the password using random number generator
  for(let i = 0; i < numOfChars; i++) {
    index = Math.floor(Math.random() * charCollection.length);
    newPass = newPass + charCollection[index]
  };
  //Return password
  return (newPass);
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  //Check if password has been defined before updating web page
  if (password !== undefined) {
    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
