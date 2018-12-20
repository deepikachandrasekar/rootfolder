/*
Author: Deepika Chandra Sekar
Description: Js for the contact us page
*/


/*
Function Description: To list terms and conditions on move over
*/

function terms() {
  alert("Terms and conditions apply.")
}

/*
Function Description: Used to validate the contact page form
*/

function contactFormValidator() {
  if (selectByClass(".name") == null || selectByClass(".name") == "") {
    errorMessage("Please Enter Full name");
    return false;
  } else {
    var messageArr = []
    messageArr.push(document.querySelector(".name").value)
    messageArr.push(document.querySelector(".select-name-box").value)
    successMessage(messageArr[0] + " can collect their free Latte at " + messageArr[1]);
    return false;
  }
}