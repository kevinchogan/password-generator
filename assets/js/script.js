// Assignment code here

/* === getNumOfChars ===
Prompts the user for the length of password they want and returns a number if valid.
=== getCharTypes ===*/
function getNumOfChars() {
  let numOfChars; //# of characters in length the password should be
  let isValid; //Is the user response valid or not?

  do {
    //Prompt the user for the number of characters to use.
    numOfChars = window.prompt(
      "How many characters in length would you like your password to be (8 to 128)?"
    );

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

  //Returns the password length
  return numOfChars;
}

/* === getCharTypes ===
Prompts the user for whether to include a character collection or not and returns the revised character collection
typeText:          The type of characters (lowercase, uppercase, etc.) in string format for use in the user prompt.
charCollection:    The character collection to potentially be added to.
includeCollection: The character collection that may be added to charCollection.
=== getCharTypes ===*/
function getCharTypes(typeText, charCollection, includeCollection) {
  let response; //the user response
  let isValid; //Is the user response valid or not?

  do {
    response = window.prompt(
      "Would you like to include " + typeText + "? (Y/N)"
    );
    //If user cancels exit
    if (!response) {
      return;
    }
    //Change response to ALLCAPS to simplify validation logic
    response = response.toUpperCase();

    //Checks if response is yes or no, includes new collection if yes, and throws alert if not valid
    if (response === "Y" || response === "YES") {
      isValid = true;
      charCollection = charCollection.concat(includeCollection);
    } else if (response === "N" || response === "NO") {
      isValid = true;
    } else {
      isValid = false;
      window.alert("Please respond with a 'Y' or 'N'.");
    }
  } while (!isValid);

  //Returns the original collection if no and revised one if yes
  return charCollection;
}

/* === generatePassword ===
Prompts the user for the length of password as well as the character sets to be used.  
Returns a password that meets the user's conditions. 
=== generatePassword ===*/
function generatePassword() {
  //Defining sets of characters to be used to generate passwords
  const lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const numeric = "123456789".split("");
  const special = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split("");

  let numOfChars; //# of characters in length the password should be

  let charCollection = []; //will contain all valid characters
  let newPass = ""; //will contain new password to be returned
  let index; //index to charCollection

  numOfChars = getNumOfChars();
    //If user cancels exit
    if (!numOfChars) {
    return;
  }

  //Prompts for user to decide which character sets to use
  charCollection = getCharTypes("lowercase letters", charCollection, lowerCase);
  //If user cancels exit
  if (!charCollection) {
    return;
  }
  charCollection = getCharTypes("upperCase letters", charCollection, upperCase);
  //If user cancels exit
  if (!charCollection) {
    return;
  }
  charCollection = getCharTypes("numbers", charCollection, numeric);
  //If user cancels exit
  if (!charCollection) {
    return;
  }charCollection = getCharTypes("special characters", charCollection, special);
  //If user cancels exit
  if (!charCollection) {
    return;
  }

  //Builds the password using random number generator
  for (let i = 0; i < numOfChars; i++) {
    index = Math.floor(Math.random() * charCollection.length);
    newPass = newPass + charCollection[index];
  }
  //Return password
  return newPass;
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
