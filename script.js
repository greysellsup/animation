// Анимация шаров при нажатии на левую кнопку мыши (3)
document.querySelectorAll("div[data-ball]").forEach((div) => {
  div.addEventListener("click", function () {
    div.animate(
      [
        { transform: "translate(0)" },
        { transform: "translate(0px, -200px)" },
        { transform: "translate(0)" },
      ],
      500
    );
  });
});

onload = function startAnimation() {
  var frameWidth = 181.875;
  var frames = 8;
  var frame = 0;
  var div = document.getElementById("animation");
  setInterval(function () {
    var frameOffset = (++frame % frames) * -frameWidth;
    div.style.backgroundPosition = frameOffset + "px " + "0px";
  }, 100);
};
