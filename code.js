

(function () {
  'use strict'

  var forms = document.querySelectorAll('.needs-validation')

  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()

  document.getElementById('floatingEmail').addEventListener('input', function() {
    const emailInput = this.value;
    const allowedDomain = ".com";

    if (emailInput.includes(allowedDomain)) {
      this.setCustomValidity('');
    } else {
      this.setCustomValidity('Email must be from example.com domain');
    }
  });
