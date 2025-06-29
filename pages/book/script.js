document.addEventListener("DOMContentLoaded", () => {
  const images = [
    "Slide 16_9 - 94 1.png",
    "Slide _9 - 96 1.png",
    "Slide 16_9 - 96 1.png",
    "Slide 19 - 96 1.png",
  ];

  // Получаем элемент img внутри .book
  const bookImg = document.querySelector(".book_wrapper .book img");

  // Индекс текущей картинки
  let currentIndex = 0;

  // Функция для обновления src
  function updateImage(index) {
    // Путь к папке с изображениями (предполагается, что все в ./imgs/)
    const basePath = "./imgs/";
    bookImg.src = basePath + images[index];
  }

  // Получаем кнопки
  const leftBtn = document.querySelector(
    ".book_wrapper .arrow_btn:not(.right)"
  );
  const rightBtn = document.querySelector(".book_wrapper .arrow_btn.right");

  // Навешиваем обработчик на левую стрелку (предполагаем, что она переключает назад)
  leftBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage(currentIndex);
  });

  // Навешиваем обработчик на правую стрелку (вперёд)
  rightBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage(currentIndex);
  });

  // Изначально показываем первый слайд из массива (если нужно)
  // updateImage(currentIndex);
});
