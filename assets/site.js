// noomiclone.dev: remembers the language a visitor picks, and closes the language list.
(function () {
  var KEY = "noomiclone-lang";
  document.addEventListener("click", function (e) {
    var link = e.target.closest ? e.target.closest("a[data-set-lang]") : null;
    if (link) {
      try { localStorage.setItem(KEY, link.getAttribute("data-set-lang")); } catch (err) { /* private mode */ }
    }
    var open = document.querySelectorAll("details.lang[open]");
    for (var i = 0; i < open.length; i++) if (!open[i].contains(e.target)) open[i].removeAttribute("open");
  });
  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    var open = document.querySelector("details.lang[open]");
    if (open) { open.removeAttribute("open"); open.querySelector("summary").focus(); }
  });
})();
