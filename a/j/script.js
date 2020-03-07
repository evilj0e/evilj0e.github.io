window.onload = function() {
  var e = document.documentElement;
  var t = e.querySelector('.title > span');
  t.onmouseenter = function () {
      e.classList.add('faded');
  };
  t.onmouseleave = function () {
      e.classList.remove('faded');
  };
  function o() {
    if (document.documentElement.clientWidth > 699) {
      var n = new Image();
      return (
        (n.src =
          e.dataset.large +
          (e.classList.contains("no-webp") ? ".jpg" : ".webp")),
        (n.onload = function() {
          e.classList.add("loaded");
        }),
        (n.onerror = function() {
          new Image();
        }),
        (window.onresize = !1),
        !0
      );
    }
    return !1;
  }
  o() || (window.onresize = o);
};
