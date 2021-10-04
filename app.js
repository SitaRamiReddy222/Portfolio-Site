function validate() {
  var name = $("#name").val();
  var email = $("#email").val();
  var phoneNumber = $("#phone").val();
  var message = $("#message").val();

  var regx_mobile = /^[7-9]\d{9}$/;
  var regx_username = /^[a-zA-Z\. ]+$/;
  var regx_email = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+)\.([a-z]{2,8}).([a-z]{2,8})?$/;
  var regex_message = /^([\w]+)([\d\s\.\'\,\-\!\@\#\$\&\*\`\~\[\]\?\<\>\"\:\;\\\/\{\}\|\%\^\(\)\+\=]+)$/;

  if (name.trim().length < 4) {
    document.getElementById("#err-name").innerHTML.value =
      "Name Should be More Than 6 characters!";
    name.focus();
    return false;
  }
  if (!regx_username.test(name.value)) {
    document.getElementById("#err_msg").innerHTML.value =
      "Invalid characters in Name, Only Alphabets and spaces,(.) are allowed!";
    name.focus();
    return false;
  }
  email.focus();

  if (!regx_email.test(email.value)) {
    document.getElementById("#err_mail").innerHTML = "Invalid Email!";
    email.focus();
    return false;
  }
  phoneNumber.focus();

  if (phoneNumber.trim().length < 10) {
    document.getElementById("#err_mob").innerHTML =
      "Mobile Number should contain 10 digits!";
    phoneNumber.focus();
    return false;
  }
  if (!regx_mobile.test(phoneNumber.value)) {
    document.getElementById("#err_mob").innerHTML =
      "Only digits are allowed And 1st digit should be from 7-9!";
    phoneNumber.focus();
    return false;
  }

  message.focus();
  if (!regex_message.test(message.value)) {
    document.getElementById("#err_msg").innerHTML =
      "Please Enter a Valid Message, Should always start with an alphabet!";
    message.focus();
    return false;
  }

  true;
}

$(document).ready(function() {
  $(".submit").click(validate(), () => {
    console.log("Button Clicked");
  });
});
