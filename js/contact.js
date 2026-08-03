(function () {
  "use strict";

  var form = document.getElementById("contactForm");
  if (!form) return;

  var error = document.getElementById("formError");
  var nameInput = document.getElementById("cfName");
  var emailInput = document.getElementById("cfEmail");
  var serviceInput = document.getElementById("cfService");
  var messageInput = document.getElementById("cfMessage");

  function showError(show) {
    if (error) error.classList.toggle("is-visible", show);
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    var name = nameInput.value.trim();
    var email = emailInput.value.trim();
    var service = serviceInput.value;
    var message = messageInput.value.trim();
    var valid = name && emailInput.validity.valid && service && message;

    showError(!valid);
    if (!valid) {
      var firstInvalid = form.querySelector(":invalid");
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    var subject = "Project enquiry — " + service;
    var body = [
      "Hello BQ Technologies,",
      "",
      message,
      "",
      "Name: " + name,
      "Email: " + email,
      "Area of interest: " + service
    ].join("\n");

    window.location.href = "mailto:bqmanagement.co.tz@gmail.com?subject=" +
      encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
  });

  form.addEventListener("input", function () {
    showError(false);
  });
})();
