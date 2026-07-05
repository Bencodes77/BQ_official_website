/* ============================================
   BQ TECHNOLOGIES — Main script
   Theme toggle · Mobile menu · Scroll effects
   ============================================ */

(function () {
  "use strict";

  var html = document.documentElement;

  /* ---------- Theme toggle (persisted) ---------- */
  var themeToggle = document.getElementById("themeToggle");
  var savedTheme = localStorage.getItem("bq-theme");
  if (savedTheme === "light" || savedTheme === "dark") {
    html.setAttribute("data-theme", savedTheme);
  }
  themeToggle.addEventListener("click", function () {
    var next = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
    html.setAttribute("data-theme", next);
    localStorage.setItem("bq-theme", next);
  });

  /* ---------- Mobile menu ---------- */
  var menuToggle = document.getElementById("menuToggle");
  var nav = document.getElementById("nav");
  menuToggle.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    menuToggle.classList.toggle("open", open);
    menuToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });
  nav.addEventListener("click", function (e) {
    if (e.target.classList.contains("nav-link")) {
      nav.classList.remove("open");
      menuToggle.classList.remove("open");
    }
  });

  /* ---------- Scroll progress + back-to-top + header state ---------- */
  var progress = document.getElementById("scrollProgress");
  var backToTop = document.getElementById("backToTop");
  var header = document.getElementById("header");

  function onScroll() {
    var top = window.scrollY;
    var max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = (max > 0 ? (top / max) * 100 : 0) + "%";
    backToTop.classList.toggle("visible", top > 500);
    if (header) header.classList.toggle("scrolled", top > 40);
    highlightNav();
  }
  window.addEventListener("scroll", onScroll, { passive: true });

  backToTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* ---------- Active nav link on scroll ---------- */
  var hashLinks = Array.prototype.slice
    .call(document.querySelectorAll(".nav-link"))
    .filter(function (link) {
      return link.getAttribute("href").charAt(0) === "#";
    });
  var sections = hashLinks
    .map(function (link) {
      return document.querySelector(link.getAttribute("href"));
    })
    .filter(Boolean);

  function highlightNav() {
    if (!sections.length) return;
    var pos = window.scrollY + 120;
    var current = sections[0];
    sections.forEach(function (sec) {
      if (sec.offsetTop <= pos) current = sec;
    });
    hashLinks.forEach(function (link) {
      link.classList.toggle("active", link.getAttribute("href") === "#" + current.id);
    });
  }

  /* ---------- Reveal on scroll ---------- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in-view"); });
  }

  /* ---------- Animated stat counters ---------- */
  var reduceMotion = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function animateStat(el) {
    var raw = el.textContent.trim();
    var match = raw.match(/^(\d+)(\+?)$/); // only pure numbers (e.g. "6", "2+")
    if (!match || reduceMotion) return;
    var target = parseInt(match[1], 10);
    var suffix = match[2];
    if (target === 0) return;
    var start = null;
    var duration = 1200;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - p, 3); // ease-out cubic
      el.textContent = Math.round(eased * target) + suffix;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  var statEls = document.querySelectorAll(".stat strong");
  if (statEls.length && "IntersectionObserver" in window) {
    var statObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateStat(entry.target);
            statObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 }
    );
    statEls.forEach(function (el) { statObserver.observe(el); });
  }

  /* ---------- Image fallbacks (CSP-friendly, replaces inline onerror) ---------- */
  Array.prototype.forEach.call(document.querySelectorAll("img[data-fallback]"), function (img) {
    img.addEventListener("error", function () {
      var mode = img.getAttribute("data-fallback");
      if (mode === "initials") {
        var box = document.createElement("div");
        box.className = "team-fallback";
        box.textContent = img.getAttribute("data-initials") || "";
        img.replaceWith(box);
      } else {
        img.style.display = "none";
      }
    });
  });

  /* ---------- Newsletter (static — friendly confirmation) ---------- */
  var form = document.getElementById("newsletterForm");
  var emailInput = document.getElementById("newsletterEmail");
  var success = document.getElementById("newsletterSuccess");
  if (form) form.addEventListener("submit", function (e) {
    e.preventDefault();
    var email = emailInput.value.trim();
    if (!email || email.indexOf("@") < 1 || email.indexOf(".") < 0) {
      emailInput.focus();
      emailInput.style.borderColor = "#f87171";
      return;
    }
    emailInput.style.borderColor = "";
    emailInput.value = "";
    success.classList.add("show");
  });

  onScroll();
})();
