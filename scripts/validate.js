const showInputError = (formElement, inputElement, errorMessage, inputElementError, errorElementMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(inputElementError);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(errorElementMessage);
};

const hideInputError = (formElement, inputElement, inputElementError, errorElementMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(inputElementError);
  errorElement.classList.remove(errorElementMessage);
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement, inputElementError, errorElementMessage) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, inputElementError, errorElementMessage);
  } else {
    hideInputError(formElement, inputElement, inputElementError, errorElementMessage);
  }
};

const setEventListeners = (formElement, inputList, buttonElement, buttonElementInactive, inputElementError, errorElementMessage) => {
  toggleButtonState(inputList, buttonElement, buttonElementInactive);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, inputElementError, errorElementMessage);
      toggleButtonState(inputList, buttonElement, buttonElementInactive);
    });
  });
};

const enableValidation = (params) => {
  const formList = Array.from(document.querySelectorAll(params.formSelector));
  formList.forEach((formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(params.inputSelector));
    const buttonElement = formElement.querySelector(params.submitButtonSelector);
    const buttonElementInactive = params.inactiveButtonClass;
    const inputElementError = params.inputErrorClass;
    const errorElementMessage = params.errorClass;
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
      toggleButtonState(inputList, buttonElement, buttonElementInactive);
    });
    setEventListeners(formElement, inputList, buttonElement, buttonElementInactive, inputElementError, errorElementMessage);
  });
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
};

const toggleButtonState = (inputList, buttonElement, buttonElementInactive) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.disabled = true;
    buttonElement.classList.add(buttonElementInactive);
  }
  else {
    buttonElement.classList.remove(buttonElementInactive);
    buttonElement.disabled = false;
  }
}

enableValidation({
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit-btn',
  inactiveButtonClass: 'form__submit-btn_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__error_visible'
});
