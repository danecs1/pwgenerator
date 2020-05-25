// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
function generatePassword() {
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numerics = "0123456789";
  var specialCharacters = "!#$%&'()*+,-./:;<=>?@[]^_{|}~";
  var password = "";

  var length = prompt("please choose a length between 8 and 128");
  while (length < 8 || length > 128) {
    var length = prompt("please choose a length between 8 and 128");
  }

  var lCase = confirm("Do you want lower case");
  var uCase = confirm("Do you want upper case");
  var numeric = confirm("Do you want numbers");
  var specialCharacter = confirm("Do you want special characters");

  while (password.length != length) {
    if (lCase) {
      password += lowerCase.substr(
        Math.floor(lowerCase.length * Math.random()),
        1
      );

      if (password.length == length) {
        break;
      }
    }

    if (uCase) {
      password += upperCase.substr(
        Math.floor(upperCase.length * Math.random()),
        1
      );
      if (password.length == length) {
        break;
      }
    }

    if (numeric) {
      password += numerics.substr(
        Math.floor(numerics.length * Math.random()),
        1
      );

      if (password.length == length) {
        break;
      }
    }

    if (specialCharacter) {
      password += specialCharacters.substr(
        Math.floor(specialCharacters.length * Math.random()),
        1
      );

      if (password.length == length) {
        break;
      }
    }
  }

  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
