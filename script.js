$(".top").mouseover(function () {
  $("this").fadeIn(100).fadeOut(100).fadeIn(100);
});
var blink_speed = 1500;
var t = setInterval(function () {
  var ele = document.getElementById("k");
  ele.style.visibility = ele.style.visibility == "hidden" ? "" : "hidden";
}, blink_speed);




document.getElementById("noti").onclick = function() {
  var secondDiv = document.getElementById("noti2");
  if (secondDiv.style.display === "none") {
      secondDiv.style.display = "block";
  } else {
      secondDiv.style.display = "none";
  }
};

