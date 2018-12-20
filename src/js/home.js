/*
Author: Deepika Chandra Sekar
Description: Js for the home page
*/


/*
Function Description: Select an attributes value based on its class name
*/
function selectByClass(className) {
  return document.querySelector(className).value;
}

/*
Function Description: Appending the error class and displays the error message
*/
function errorMessage(message) {
  document.querySelector(".error_message").classList.add("error_msg");
  return document.querySelector(".error_message").innerHTML = message;

}


/*
Function Description: Removes a element using its class name
*/
function removeByClass(className) {
  var elements = document.getElementsByClassName(className);
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }
}

/*
Function Description: Appending the success class and displays the success message
*/
function successMessage(message) {
  removeByClass('home-submit');
  document.querySelector(".error_message").classList.add("success_msg");
  return document.querySelector(".error_message").innerHTML = message;
}

/*
Function Description: Used to validate the password size
*/
function passwordSize(size) {
  return document.querySelector(size).value.length;
}

/*
Function Description: Used to validate the home page form
*/
function homeFormValidator() {
  if (selectByClass(".email") == null || selectByClass(".email") == "") {
    errorMessage("Please Enter a valid Email Address"); //send error message is the email is invalid
    return false;
  } else if (selectByClass(".password") == null || selectByClass(".password") == "") {
    errorMessage("Please Enter Password"); //send error message is the password is invalid
    return false;
  } else if (passwordSize(".password") <= 10) {
    errorMessage("Password cannot be less than 10 characters"); //send error message is the password is less than 10 characters
    return false;
  } else if (selectByClass(".password") != selectByClass(".confirm-password")) {
    errorMessage("Password Do not match"); //send error message is the password do not match
    return false;
  } else {
    var messageArr = []
    messageArr.push(document.querySelector(".email").value)
    successMessage("Thank you for  subscribing to Roased Ground " + messageArr[0] + "!"); //send a success message
    return false;
  }
}