// Assignment code here
var characterLength = 128;
var choiceArray = [];

var specialCharArray = ["?", "+" ,"=" ,"-" ,"_" ,"^" ,"&" ,"*" ,"(" , ")", "<", ">", "/", "|", "[", "]", "{", "}"];
var numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; 


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var correctResponse = askPrompts();
  
  var passwordText = document.querySelector("#password");
  
  //If all required information was eneterd correctly by the user then a unique paassword will be generated
  if (correctResponse) {
    var uniquePassword = generatePassword();
    passwordText.value = uniquePassword;
  }
  
};

// Function to generate password
function generatePassword() {
  
  // Sets the password to the selected length chosen by the user
  var password = "";
  
  // ForLoop which will run through the choiceArray selecting random characters for the creation of a new password and then storing that information into the password variable created.
  for (var i = 0; i < characterLength; i++) {
    var randomCharacter = Math.floor(Math.random() * choiceArray.length);
    password = password + choiceArray[randomCharacter];
  }
  
 // Password information will be returned and stored in the password variable which will be used in the generatePassword function later.
  return password;
}

function askPrompts() {
  
  // Resets choiceArray to empty
  choiceArray = [];
  
  //Alert welcoming the user
  var Welcome = alert("Welcome To The Password Generator Where We Can Help You Create A Unique And Difficult Password To Keep Your Information Safe!");
  
  //first prompt asking for the users input and declaring a length requirment the user needs to be aware of to proceed
  characterLength = parseInt(prompt("How many characters long would you like your password to have? It must be between 8 - 128 characters in length!"));
  
  //IF statement for incorrect user inputs which will relay an alert message informing the user that they need to make a correct selection to proceed and to then try again.
  if (characterLength < 8 || characterLength > 128) {
    alert("Sorry You Must Choose A Password Length That Meets The Criteria. Please Try Again!");
    
  } 
  if (characterLength === "" || characterLength === null) {
    alert("Uh Oh! We can't move forward without a vailid answer. Please Try Again!");
    end;
    return false;
  };

  
//IF statement for correct user input which will allow a series of prompts to customize and ultimately generate a unique password.
  if (characterLength >= 8 || characterLength <= 128) {
    
    //Alert thanking the user to selecting a valid password length.
    var alert1 = alert("Thank You For Selecting A Password Length That Falls Within The Required Character Limit");
    var alert2 = alert("Now We Can Begin Customizing Your Unique Password! To Help Us Achieve This Please Answer The Following Questions:");
  }
  //Asks the user if they would like to include lower case letters in their password.
  if (confirm("Would You Like To Include Lower Case letters?")) {
    choiceArray = choiceArray.concat(lowerCaseArray);
  }
    //Asks the user if they would like to include upper case letters in their password.
  if (confirm("How About Some Upper Case Letters?")) {
    choiceArray = choiceArray.concat(upperCaseArray);
  }
    //Asks the user if they would like to include numbers in their password.
  if (confirm("Would You Like To Include Numbers As Well?")) {
    choiceArray = choiceArray.concat(numbersArray);
  }
    //Asks the user if they would like to include special characters in their password which will make it harder to become compromised.
  if (confirm("Would You Like To Make Your Password More Secure By Adding Special Characters To It?")) {
    choiceArray = choiceArray.concat(specialCharArray); 

  }
  return true;
    
};