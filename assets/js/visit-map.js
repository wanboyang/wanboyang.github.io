(function () {
  var API = window.VISIT_STATS_API || "";
  var SVG_URL = "https://cdn.jsdelivr.net/npm/@svg-maps/world@1.0.1/world.svg";
  var box = document.getElementById("visit-map-svg-box");
  var tooltip = document.getElementById("visit-map-tooltip");
  var totalEl = document.getElementById("visit-total-count");
  var updatedEl = document.getElementById("visit-updated");
  var topEl = document.getElementById("visit-top-list");
  var lastData = null;

  function flag(code) {
    return String.fromCodePoint.apply(null, code.toUpperCase().split("").map(
      function (c) { return 127397 + c.charCodeAt(0); }
    ));
  }

  function color(count, max) {
    if (!count) return "#eef2f7";
    var t = Math.max(0, Math.min(1, Math.log1p(count) / Math.log1p(max)));
    var light = 92 - Math.round(t * 55);
    return "hsl(210, 75%, " + light + "%)";
  }

  function renderMap() {
    var countries = lastData ? lastData.countries : {};
    var max = 1;
    Object.keys(countries).forEach(function (c) {
      if (countries[c] > max) max = countries[c];
    });
    var paths = box.querySelectorAll("path");
    Array.prototype.forEach.call(paths, function (p) {
      var code = (p.getAttribute("id") || "").toLowerCase();
      var count = countries[code] || 0;
      p.style.fill = color(count, max);
      p.style.stroke = "#ffffff";
      p.style.strokeWidth = "0.5";
      p.style.cursor = "pointer";
      p.style.transition = "fill .4s";
      p.setAttribute("data-count", String(count));
      p.setAttribute("data-name", p.getAttribute("name") || code.toUpperCase());
    });
  }

  function renderStats() {
    if (!lastData) return;
    totalEl.textContent = Number(lastData.total || 0).toLocaleString();
    updatedEl.textContent = "更新于 " + new Date(lastData.updated || Date.now()).toLocaleString("zh-CN");
    var top = Object.keys(lastData.countries || {}).sort(
      function (a, b) { return lastData.countries[b] - lastData.countries[a]; }
    ).slice(0, 8);
    topEl.innerHTML = top.map(function (c) {
      var nameEl = box.querySelector("path[id='" + c + "']");
      var name = nameEl ? nameEl.getAttribute("name") : c.toUpperCase();
      return "<li>" + flag(c) + " <strong>" + name + "</strong> · " +
        lastData.countries[c].toLocaleString() + " 次</li>";
    }).join("") || "<li>暂无数据</li>";
    renderMap();
  }

  function refresh() {
    if (!API) return;
    try {
      if (!sessionStorage.getItem("visit_stat_sent")) {
        fetch(API + "/api/hit", { method: "POST", keepalive: true }).catch(function () {});
        sessionStorage.setItem("visit_stat_sent", "1");
      }
    } catch (e) {}
    fetch(API + "/api/stats", { cache: "no-store" })
      .then(function (r) { return r.json(); })
      .then(function (d) { lastData = d; renderStats(); })
      .catch(function () {});
  }

  function loadSvg() {
    fetch(SVG_URL)
      .then(function (r) { return r.text(); })
      .then(function (text) {
        var doc = new DOMParser().parseFromString(text, "image/svg+xml");
        box.innerHTML = doc.documentElement.outerHTML;
        renderMap();
      })
      .catch(function () { box.innerHTML = "<p>地图加载失败，请刷新重试。</p>"; });
  }

  box.addEventListener("mouseover", function (e) {
    var p = e.target.closest("path");
    if (!p) return;
    tooltip.hidden = false;
    tooltip.textContent = (p.getAttribute("data-name") || "") + "：" +
      Number(p.getAttribute("data-count") || 0).toLocaleString() + " 次";
    var r = box.getBoundingClientRect();
    tooltip.style.left = (e.clientX - r.left + 12) + "px";
    tooltip.style.top = (e.clientY - r.top + 12) + "px";
  });
  box.addEventListener("mouseout", function () { tooltip.hidden = true; });

  if (!API) return;
  loadSvg();
  refresh();
  setInterval(refresh, 60000);
})();
