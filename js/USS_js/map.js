// JavaScript source code
// make map coordinates adjust to map size
window.onload = function () {
  var ImageMap = function (map) {
      var n,
        areas = map.getElementsByTagName("area"),
        len = areas.length,
        coords = [],
        previousWidth = 1344;
      for (n = 0; n < len; n++) {
        coords[n] = areas[n].coords.split(",");
      }
      this.resize = function () {
        var n,
          m,
          clen,
          x = document.body.clientWidth / previousWidth;
        for (n = 0; n < len; n++) {
          clen = coords[n].length;
          for (m = 0; m < clen; m++) {
            coords[n][m] *= x;
          }
          areas[n].coords = coords[n].join(",");
        }
        previousWidth = document.body.clientWidth;
        return true;
      };
      window.onresize = this.resize;
    },
    imageMap = new ImageMap(document.getElementById("map-uss"));
  imageMap.resize();
};

// tune down volume
document.querySelector("video").volume = 0.05;

// loading pages linking header and footer to USS html
$(document).ready(function () {
  $("#header-link").load("USS_html/header.html");
  $("#footer-link").load("USS_html/footer.html");
});
