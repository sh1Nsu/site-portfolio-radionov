const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Скрываем кнопку при загрузке страницы
scrollToTopBtn.style.display = "none";

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    scrollToTopBtn.style.display = "block"; // Показываем кнопку, когда скроллим вниз
  } else {
    scrollToTopBtn.style.display = "none"; // Скрываем кнопку, когда возвращаемся наверх
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
