// Находим все ссылки в навигации
const navLinks = document.querySelectorAll('.header_link');

// Добавляем обработчик события клика на каждую ссылку
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Удаляем класс 'active' у всех пунктов меню
        navLinks.forEach(item => item.parentElement.classList.remove('active'));
        
        // Добавляем класс 'active' к текущему пункту меню
        this.parentElement.classList.add('active');
    });
});
