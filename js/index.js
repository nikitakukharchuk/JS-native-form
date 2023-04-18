const validateForm = () => {
  const firstName = document.getElementById("name");
  const lastName = document.getElementById("last-name");
  const dob = document.getElementById("dob");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirm-password");

  let isValid = true;

  const errorMessages = document.getElementsByClassName("error-message");
  for (let i = 0; i < errorMessages.length; i++) {
    errorMessages[i].style.display = "none";
  }

  const nameFirst = firstName.value.trim();
  if (nameFirst.length < 2 || nameFirst.length > 25) {
    document.getElementById("name-error").style.display = "block";
    isValid = false;
  }

  const nameLast = lastName.value.trim();
  if (nameLast.length < 2 || nameLast.length > 25) {
    document.getElementById("last-name-error").style.display = "block";
    isValid = false;
  }

  const today = new Date();
  const selectedDate = new Date(dob.value.trim());
  if (selectedDate > today) {
    document.getElementById("dob-error").style.display = "block";
    isValid = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value.trim())) {
    document.getElementById("email-error").style.display = "block";
    isValid = false;
  }

  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#\$%\^&\*])(?=.{8,})/;
  if (!passwordRegex.test(password.value.trim())) {
    document.getElementById("password-error").style.display = "block";
    isValid = false;
  }

  if (confirmPassword.value.trim() !== password.value.trim()) {
    document.getElementById("confirm-password-error").style.display = "block";
    isValid = false;
  } else {
    document.getElementById("confirm-password-match").style.display = "block";
  }

  return isValid;
};

const submitForm = async () => {
  const firstNameForm = document.getElementById("name").value.trim();
  const lastNameForm = document.getElementById("last-name").value.trim();
  const birthdayForm = document.getElementById("dob").value.trim();
  const emailForm = document.getElementById("email").value.trim();
  const passwordForm = document.getElementById("password").value.trim();

  const formData = {
    firstName: firstNameForm,
    lastName: lastNameForm,
    birthday: birthdayForm,
    email: emailForm,
    password: passwordForm,
  };

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(formData),
    });
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
};

const form = document.getElementById("my-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (validateForm()) {
    submitForm();
  }
});
