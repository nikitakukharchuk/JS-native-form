const formContainer = document.createElement("form");
formContainer.setAttribute("id", "my-form");
formContainer.setAttribute("class", "registration-form");

const h3 = document.createElement("h3");
h3.setAttribute("class", "required-field");
h3.textContent = "* : Обязательное поле";
formContainer.appendChild(h3);

const nameDiv = document.createElement("div");
nameDiv.setAttribute("class", "form-group");
formContainer.appendChild(nameDiv);

const nameLabel = document.createElement("label");
nameLabel.setAttribute("for", "name");
nameLabel.innerHTML = "Имя<span>*</span> :";
nameDiv.appendChild(nameLabel);

const nameInput = document.createElement("input");
nameInput.setAttribute("type", "text");
nameInput.setAttribute("id", "name");
nameInput.setAttribute("placeholder", "2 - 25 символов");
nameInput.setAttribute("required", "");
nameDiv.appendChild(nameInput);

const nameErrorMessage = document.createElement("span");
nameErrorMessage.setAttribute("class", "error-message");
nameErrorMessage.setAttribute("id", "name-error");
nameErrorMessage.style.display = "none";
nameErrorMessage.textContent = "Поле должно содержать 2-25 символов";
nameDiv.appendChild(nameErrorMessage);

const lastNameDiv = document.createElement("div");
lastNameDiv.setAttribute("class", "form-group");
formContainer.appendChild(lastNameDiv);

const lastNameLabel = document.createElement("label");
lastNameLabel.setAttribute("for", "last-name");
lastNameLabel.innerHTML = "Фамилия<span>*</span> :";
lastNameDiv.appendChild(lastNameLabel);

const lastNameInput = document.createElement("input");
lastNameInput.setAttribute("type", "text");
lastNameInput.setAttribute("id", "last-name");
lastNameInput.setAttribute("placeholder", "2 - 25 символов");
lastNameInput.setAttribute("required", "");
lastNameDiv.appendChild(lastNameInput);

const lastNameErrorMessage = document.createElement("span");
lastNameErrorMessage.setAttribute("class", "error-message");
lastNameErrorMessage.setAttribute("id", "last-name-error");
lastNameErrorMessage.style.display = "none";
lastNameErrorMessage.textContent = "Поле должно содержать 2-25 символов";
lastNameDiv.appendChild(lastNameErrorMessage);

const dobDiv = document.createElement("div");
dobDiv.setAttribute("class", "form-group");
formContainer.appendChild(dobDiv);

const dobLabel = document.createElement("label");
dobLabel.setAttribute("for", "dob");
dobLabel.innerHTML = "День рождения<span>*</span> :";
dobDiv.appendChild(dobLabel);

const dobInput = document.createElement("input");
dobInput.setAttribute("type", "date");
dobInput.setAttribute("id", "dob");
dobInput.setAttribute("required", "");
dobDiv.appendChild(dobInput);

const dobErrorMessage = document.createElement("span");
dobErrorMessage.setAttribute("class", "error-message");
dobErrorMessage.setAttribute("id", "dob-error");
dobErrorMessage.style.display = "none";
dobErrorMessage.textContent = "Пожалуйста, выберите правильную дату рождения.";
dobDiv.appendChild(dobErrorMessage);

const emailDiv = document.createElement("div");
emailDiv.setAttribute("class", "form-group");
formContainer.appendChild(emailDiv);

const emailLabel = document.createElement("label");
emailLabel.setAttribute("for", "email");
emailLabel.innerHTML = "Электронная почта<span>*</span> :";
emailDiv.appendChild(emailLabel);

const emailInput = document.createElement("input");
emailInput.setAttribute("type", "email");
emailInput.setAttribute("id", "email");
emailInput.setAttribute("placeholder", "адрес@gmail.com");
emailInput.setAttribute("required", "");
emailDiv.appendChild(emailInput);

const emailErrorMessage = document.createElement("span");
emailErrorMessage.setAttribute("class", "error-message");
emailErrorMessage.setAttribute("id", "email-error");
emailErrorMessage.style.display = "none";
emailErrorMessage.textContent =
  "Введите, пожалуйста, действительный адрес электронной почты.";
emailDiv.appendChild(emailErrorMessage);

const passwordDiv = document.createElement("div");
passwordDiv.setAttribute("class", "form-group");
formContainer.appendChild(passwordDiv);

const passwordLabel = document.createElement("label");
passwordLabel.setAttribute("for", "password");
passwordLabel.innerHTML = "Пароль<span>*</span> :";
passwordDiv.appendChild(passwordLabel);

const passwordInput = document.createElement("input");
passwordInput.setAttribute("type", "password");
passwordInput.setAttribute("id", "password");
passwordInput.setAttribute("placeholder", "8-25 символов");
passwordInput.setAttribute("required", "");
passwordDiv.appendChild(passwordInput);

const passwordErrorMessage = document.createElement("span");
passwordErrorMessage.setAttribute("class", "error-message");
passwordErrorMessage.setAttribute("id", "password-error");
passwordErrorMessage.style.display = "none";
passwordErrorMessage.textContent =
  "Пароль должен содержать от 8 до 25 символов";
passwordDiv.appendChild(passwordErrorMessage);

const confirmPasswordDiv = document.createElement("div");
confirmPasswordDiv.setAttribute("class", "form-group");
formContainer.appendChild(confirmPasswordDiv);

const confirmPasswordLabel = document.createElement("label");
confirmPasswordLabel.setAttribute("for", "confirm-password");
confirmPasswordLabel.innerHTML = "Подтверждение пароля<span>*</span> :";
confirmPasswordDiv.appendChild(confirmPasswordLabel);

const confirmPasswordInput = document.createElement("input");
confirmPasswordInput.setAttribute("type", "password");
confirmPasswordInput.setAttribute("id", "confirm-password");
confirmPasswordInput.setAttribute("placeholder", "8-25 символов");
confirmPasswordInput.setAttribute("required", "");
confirmPasswordDiv.appendChild(confirmPasswordInput);

const confirmPasswordErrorMessage = document.createElement("span");
confirmPasswordErrorMessage.setAttribute("class", "error-message");
confirmPasswordErrorMessage.setAttribute("id", "confirm-password-error");
confirmPasswordErrorMessage.style.display = "none";
confirmPasswordErrorMessage.textContent = "Пароли не совпадают";
confirmPasswordDiv.appendChild(confirmPasswordErrorMessage);

const submitButton = document.createElement("button");
submitButton.setAttribute("type", "submit");
submitButton.setAttribute("class", "btn");
submitButton.textContent = "Зарегистрироваться";
formContainer.appendChild(submitButton);

const container = document.getElementById("container");
container.appendChild(formContainer);

const validateForm = () => {

  let isValid = true;

  const errorMessages = document.getElementsByClassName("error-message");
  for (let i = 0; i < errorMessages.length; i++) {
    errorMessages[i].style.display = "none";
  }

  const nameFirst = nameInput.value.trim();
  if (nameFirst.length < 2 || nameFirst.length > 25) {
    nameErrorMessage.style.display = "block";
    isValid = false;
  }

  const nameLast = lastNameInput.value.trim();
  if (nameLast.length < 2 || nameLast.length > 25) {
    lastNameErrorMessage.style.display = "block";
    isValid = false;
  }

  const today = new Date();
  const selectedDate = new Date(dobInput.value.trim());
  if (selectedDate > today) {
    dobErrorMessage.style.display = "block";
    isValid = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value.trim())) {
    emailErrorMessage.style.display = "block";
    isValid = false;
  }

  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#\$%\^&\*])(?=.{8,})/;
  if (!passwordRegex.test(passwordInput.value.trim())) {
    passwordErrorMessage.style.display = "block";
    isValid = false;
  }

  if (confirmPasswordInput.value.trim() !== passwordInput.value.trim()) {
    confirmPasswordErrorMessage.style.display = "block";
    isValid = false;
  }

  return isValid;
};

const submitForm = async () => {
  const firstNameForm = nameInput.value.trim();
  const lastNameForm = lastNameInput.value.trim();
  const birthdayForm = dobInput.value.trim();
  const emailForm = emailInput.value.trim();
  const passwordForm = passwordInput.value.trim();

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
    console.log(formData);
  } catch (error) {
    console.log(error);
  }
};

const form = formContainer;
form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (validateForm()) {
    submitForm();
  }
});
