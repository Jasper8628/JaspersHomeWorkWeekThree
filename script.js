var generatePassword = document.querySelector("#generate-password");
var copyToClipboard = document.querySelector("#copy-click-board");
var displayPassword = document.querySelector("#password");

generatePassword.addEventListener("click", function (event) {
  event.preventDefault();

  var input = prompt("How many characters would you likey your password to contain?");
  var userInput = parseInt(input);

  while (input == null || isNaN(input) || userInput < 8 || userInput > 128) {
    alert("Please provide a number between 8 and 128");
    input = prompt("How many characters would you likey your password to contain?");
    userInput = parseInt(input);
  }
  var includeCapitalLetters = confirm("Would your like your password to contain capital letters?");
  var includeNumbers = confirm("Would you like your password to contain numbers?");
  var includeSymbols = confirm("Would you like your password to contain special symbols?");
  var defaultCharacterPool = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var capitalLetterPool = [];
  var numbersPool = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var symbolPool = ["/", "<", ">", "?", ";", ":", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "="];
  var newPassword = [];
  var charPool = defaultCharacterPool;
  for (i = 0; i < 26; i++) {
    var getLetter = defaultCharacterPool[i].toUpperCase();
    capitalLetterPool.push(getLetter);
  }

  var booleanpool = [includeCapitalLetters, includeNumbers, includeSymbols];
  var arrayOfPools = [capitalLetterPool, numbersPool, symbolPool];
  for (i = 0; i < arrayOfPools.length; i++) {
    if (booleanpool[i]) {
      charPool = charPool.concat(arrayOfPools[i]);
    }
  }

  for (i = 0; i < userInput; i++) {
    var charIndex = Math.floor((Math.random() * charPool.length));
    var newChar = charPool[charIndex];
    newPassword.push(newChar);
    //console.log(newChar);
  }
  var finalPassword = newPassword.join("");
  //console.log(finalPassword);
  //alert("Here's your new password: "+finalPassword);
  displayPassword.value = finalPassword;


});

copyToClipboard.addEventListener("click", function (event) {
  event.preventDefault();
  displayPassword.select();
  document.execCommand("copy");
  alert("Password copied to clipboard as: " + displayPassword.value);
});


