document.addEventListener("DOMContentLoaded", () => {
  const posterWrapper = document.querySelector(".poster_wrapper");
  const oneImg = posterWrapper.querySelector("img:first-of-type");
  const twoImg = posterWrapper.querySelector(".two");

  const posterImg = document.querySelector(".img_poster");
  const downloadBtn = document.querySelector(".download");

  // Массив с путями к изображениям в нужном порядке
  const images = [
    "Slide 4_3 - 30 1.png", // 1-й клик (начальное)
    "Slide 4_3 - 29 1.png", // 2-й клик
    "Slide 4_3 - 31 1.png", // 3-й клик
    "Slide 4_3 - 28 1.png", // 4-й клик
  ];

  const imagesOne = [
    "Slide 3 - 30 1.png", // начальное (4-й клик возвращает сюда)
    "Slide 4_3 - 29 2.png", // 1-й клик
    "Slide 4_3 - 31 2.png", // 2-й клик
    "Slide 4_3 - 28 2.png", // 3-й клик
  ];

  const imagesTwo = [
    "Slide 4_3 30 1.png",
    "Slide 4_3 - 29 3.png",
    "Slide 4_3 - 31 3.png",
    "Slide 4_3 - 28 3.png",
  ];

  // Текущий индекс изображения (начинаем с 0 — первой картинки)
  let currentIndex = 0;

  // Обработчик клика
  downloadBtn.addEventListener("click", () => {
    // Увеличиваем индекс по циклу (0 → 1 → 2 → 3 → 0 ...)
    currentIndex = (currentIndex + 1) % images.length;

    // Обновляем src у картинки
    posterImg.src = "./imgs/" + images[currentIndex];
    oneImg.src = "./imgs/" + imagesOne[currentIndex];
    twoImg.src = "./imgs/" + imagesTwo[currentIndex];
  });
});
