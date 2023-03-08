
// ---------------------------(for signup)-------------------------------------------------//

const email = $("#email");
const form = $("#form");
const username = $("#username");
const password = $("#password");
const password2 = $("#password2");
let arrdata = [];
var flag = false;

if (JSON.parse(localStorage.getItem("Bootstrap")) == null) {
  arrdata = [];
} else {
  arrdata = JSON.parse(localStorage.getItem("Bootstrap"));
  console.log(arrdata);
}
form.submit((e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const namevalue = username.val().trim();
  const EmailValue = email.val().trim();
  const passwordValue = password.val().trim();
  const Password2Value = password2.val().trim();

  if (
    (namevalue.length,
    EmailValue.length,
    passwordValue.length,
    Password2Value.length) != 0
  ) {
    $(".localcheck").html('<span class="error text-danger"></span>');
    let obj = { username: namevalue, email: EmailValue, pass: passwordValue };
    arrdata.push(obj);
    localStorage.setItem("Bootstrap", JSON.stringify(arrdata));
    window.location.replace("login.html");
  }

  /////----------------------
  else {
    $(".localcheck").html(
      '<span class="error text-danger">Please Enter The data</span>'
    );
  }

  if (namevalue === "") {
    $(".small1").html(
      '<span class="error text-danger">This field is required</span>'
    );
    flag = true;
  } else {
    $(".small1").html('<span class="error text-danger"></span>');
  }
  if (EmailValue === "") {
    $(".small2").html(
      '<span class="error text-danger">Name field is required</span>'
    );
    flag = true;
  } else if (!isEmail(EmailValue)) {
    $(".small2").html(
      '<span class="error text-danger">Email field is required</span>'
    );
    flag = true;
  } else {
    $(".small2").html('<span class="error text-danger"></span>');
  }
  if (passwordValue === "") {
    $(".small3").html(
      '<span class="error text-danger">Please Enter Password</span>'
    );
    flag = true;
  } else if (passwordValue.length < 6) {
    $(".small3").html(
      '<span class="error text-danger">Please Enter Password more than 6 char</span>'
    );
    flag = true;
  } else {
    $(".small3").html('<span class="error text-danger"></span>');
  }
  if (Password2Value === "") {
    $(".small4").html(
      '<span class="error text-danger">This field is required</span>'
    );
    flag = true;
  } else if (passwordValue !== Password2Value) {
    $(".small4").html(
      '<span class="error text-danger">The Password do not match </span>'
    );
  } else {
    $(".small4").html('<span class="error text-danger"></span>');
  }
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
// ---------------------------(for login)-------------------------------------------------//
const useremaillogin = $("#useremail");
const passlogin = $("#passwordforlog");
const formlogin = $("#formlogin");
formlogin.submit((e) => {
  e.preventDefault();
  logincheck();
  //   location.replace('login.html')
});
function logincheck() {

  let test = JSON.parse(localStorage.getItem("Bootstrap"));

  for (let i = 0; i < test.length; i++) {
    if (
      
      test[i].email == useremaillogin.val() &&
      test[i].pass == passlogin.val()
    ) {
      $(".checklogin").html('<span class="error text-danger"></span>');
console.log("test1111")
      location.assign("home.html");
    }
    else{
            $(".checklogin").html('<span class="error text-danger"> Enter valid User Email or Pass</span>');}
    
  }
}
