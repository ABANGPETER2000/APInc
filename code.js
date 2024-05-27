//
// document.querySelector('#dropdownMenuButton').addEventListener('click', () => {
//   if (document.querySelector('#btn-img').classList.contains('fa-message')) {
//     document.querySelector('#btn-img').classList.remove('fa-message');
//     document.querySelector('#btn-img').classList.add('fa-xmark');
//     document.querySelector('#dropdownMenuButton').classList.remove('shade');
//   } else {
//     document.querySelector('#btn-img').classList.remove('fa-xmark');
//     document.querySelector('#btn-img').classList.add('fa-message');
//     document.querySelector('#dropdownMenuButton').classList.add('shade');
//   }
//
// });
//


// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
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

// Custom email validation
  document.getElementById('floatingEmail').addEventListener('input', function() {
    const emailInput = this.value;
    const allowedDomain = ".com";

    if (emailInput.includes(allowedDomain)) {
      this.setCustomValidity('');
    } else {
      this.setCustomValidity('Email must be from example.com domain');
    }
  });
