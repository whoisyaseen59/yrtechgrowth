// Form input validation helper
function validateFormInputs(formId) {
  const form = document.getElementById(formId);
  if (!form) return true;
  return form.checkValidity();
}
