var forname = document.getElementById("forname");
var foremail = document.getElementById("foremail");
var forpassword = document.getElementById("forpassword");
var forsports = document.getElementById("forsports");
var forcountry = document.getElementById("forcountry");
var forgender = document.getElementById("forgender");
var errorbanar = document.getElementById("errorbanar");
var btnSubmit = document.getElementById("btnSubmit");
var btnReset = document.getElementById("btnReset");




btnSubmit.addEventListener("click", function (event) {
    event.preventDefault();
    var userNameInputField = document.getElementById("usr").value;
    var emailInputField = document.getElementById("email").value;
    var passwordInputField = document.getElementById("pass").value;
    var countrycheck = document.getElementById("country").value;
    var genderSelected = document.querySelector('input[name="gender"]:checked');
    var checkboxes = document.querySelectorAll('input[name="sports"]:checked');
    var isvalid = false;
    if (!userNameInputField) {
      forname.style.display = "block";
      isvalid = true;
    } else {
      forname.style.display = "none";
      isvalid = false;
    }
    if (passwordInputField.length < 8) {
      forpassword.style.display = "block";
      isvalid = true;
    } else {
      forpassword.style.display = "none";
      isvalid = false;
    }
    if (
      !/[a-z0-9\._%+!$&*=^|~#%'?{}/\-]+@([a-z0-9\-]+\.){1,}([a-z]{2,16})/.test(
        emailInputField
      )
    ) {
      foremail.style.display = "block";
      isvalid = true;
    } else {
      foremail.style.display = "none";
      isvalid = false;
    }
    if (checkboxes.length < 2) {
      forsports.style.display = "block";
      isvalid = true;
    } else {
      forsports.style.display = "none";
      isvalid = false;
    }
    if (!genderSelected) {
      forgender.style.display = "block";
      isvalid = true;
    } else {
      forgender.style.display = "none";
      isvalid = false;
    }
    if (!countrycheck) {
      forcountry.style.display = "block";
      isvalid = true;
    } else {
      forcountry.style.display = "none";
      isvalid = false;
    }
    if (isvalid) {
        errorbanar.style.backgroundColor = "red";
    } else {
      errorbanar.style.backgroundColor = "red";
    }
  });
  
btnReset.addEventListener("click",function(e){
    e.preventDefault();
    document.getElementById("usr").value = "";
    document.getElementById("email").value= "";
    document.getElementById("pass").value= "";
    document.getElementById("country").value= "";
});