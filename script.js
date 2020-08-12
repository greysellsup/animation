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
