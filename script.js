


// 4. прочитать про css анимация animate
// 4.1. шарик сам подпрыгивал через каждые 3 сек с css. //3. сверстать и анимировать подпрыгивающий на месте шарик 1 раз в 3 сек.
// 4.2.  шарик подпрыгивал при наведении на него мышью с css hover
// 5.1. добавить второй шар и обоим шарам присвоить одинаковые дата-атрибуты
//6. js. при клике на шар. шар должен подпрыгивать.
//4. подключить js с помощь которого при клике мышью шарик будет подпрыгивать.
//5. сделать что бы этот Вася пошел.

// ball.onclick = function () {
//   let start = Date.now();

//   let timer = setInterval(function () {
//     let timePassed = Date.now() - start;

//     ball.style.left = timePassed / 5 + "px";

//     if (timePassed > 2000) clearInterval(timer);
//   }, 20);
// };

// ball.onclick = function () {
//   animate({
//     duration: 5000,
//     timing: function bounce(timeFraction) {
//       for (let a = 0, b = 1, result; 1; a += b, b /= 2) {
//         if (timeFraction >= (7 - 4 * a) / 11) {
//           return (
//             -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
//           );
//         }
//       }
//     },
//     draw: function (progress) {
//       ball.style.bottom = progress * 500 + "px";
//     },
//   });
// };

// function animate(options) {
//   var start = performance.now();

//   requestAnimationFrame(function animate(time) {
//     // timeFraction от 0 до 1
//     var timeFraction = (time - start) / options.duration;
//     if (timeFraction > 1) timeFraction = 1;

//     // текущее состояние анимации
//     var progress = options.timing(timeFraction);

//     options.draw(progress);

//     if (timeFraction < 1) {
//       requestAnimationFrame(animate);
//     }
//   });
// }
