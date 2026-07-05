/* ============================================
   BQ TECHNOLOGIES — Contact form
   Opens the visitor's email app with a pre-filled message.
   ============================================ */

(function () {
  "use strict";

  var form = document.getElementById("contactForm");
  if (!form) return;
  var error = document.getElementById("formError");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var name = document.getElementById("cfName").value.trim();
    var email = document.getElementById("cfEmail").value.trim();
    var service = document.getElementById("cfService").value;
    var message = document.getElementById("cfMessage").value.trim();

    if (!name || !email || !service || !message) {
      error.classList.add("show");
      return;
    }
    error.classList.remove("show");

    var subject = "Project Inquiry: " + service + " — " + name;
    var body = "Name: " + name + "\nEmail: " + email + "\nService: " + service +
      "\n\nMessage:\n" + message;
    window.location.href = "mailto:bqmanagement.co.tz@gmail.com?subject=" +
      encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
  });
})();
