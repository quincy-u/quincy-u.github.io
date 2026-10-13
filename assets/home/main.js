(function () {
  "use strict";

  var root = document.documentElement;

  /* ---------- Theme ---------- */

  var darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
  document.querySelector(".theme").addEventListener("click", function () {
    var current = root.getAttribute("data-theme") || (darkQuery.matches ? "dark" : "light");
    var next = current === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("qy-theme", next);
    } catch (e) {}
  });

  /* ---------- Top bar: show name and divider once scrolled ---------- */

  var bar = document.querySelector(".bar");
  function onScroll() {
    bar.classList.toggle("is-scrolled", window.scrollY > 120);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Videos: load and play only while visible ---------- */

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if ("IntersectionObserver" in window && !reduceMotion) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          var v = e.target;
          if (e.isIntersecting) {
            if (!v.src) v.src = v.dataset.src;
            var p = v.play();
            if (p && p.catch) p.catch(function () {});
          } else if (!v.paused) {
            v.pause();
          }
        });
      },
      { rootMargin: "120px 0px" }
    );
    document.querySelectorAll("video[data-src]").forEach(function (v) {
      observer.observe(v);
    });
  }

  /* ---------- Long author lists ---------- */

  document.querySelectorAll(".authors__toggle").forEach(function (btn) {
    btn.addEventListener("click", function () {
      btn.previousElementSibling.hidden = false;
      btn.remove();
    });
  });
})();
