// JavaScript code for form validation

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('myForm');
  const inputField = document.getElementById('inputField');

  // Regular expression pattern for alphanumeric input
  const alphaNumericPattern = /^[a-z0-9]+$/i;

  // Error message container
  const errorMessage = document.createElement('p');
  errorMessage.style.color = 'red';
  form.insertBefore(errorMessage, form.firstChild);

  form.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent form from submitting

      // Retrieve the input field value
      const inputValue = inputField.value;

      // Check if the input value matches the pattern
      if (alphaNumericPattern.test(inputValue)) {
          // Valid input: display confirmation and "submit" form submission
          errorMessage.textContent = ''; // Clear any previous error message
          alert('Confirmation: The input is valid. Form submitted sucessfully.');

          //submitForm(); Dummy function that will "submit" the form

      } else {
          // Invalid input: display error message
          errorMessage.textContent = 'Error: Input is not alphanumeric. Please enter a valid alphanumeric value.';
      }
  });
});
