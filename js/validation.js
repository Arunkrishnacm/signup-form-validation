document.addEventListener("DOMContentLoaded", () => {

  const form = document.querySelector(".needs-validation");

  form.addEventListener("submit", function (event) {

    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");

    if (password.value !== confirmPassword.value) {
      confirmPassword.setCustomValidity("Mismatch");
    } else {
      confirmPassword.setCustomValidity("");
    }

    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      alert("Signup Successful!");
      form.reset();
    }

    form.classList.add("was-validated");

  });

});
