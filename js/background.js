document.addEventListener("DOMContentLoaded", function () {
    let images = [
        "images/bacg_main2.png",
        "images/bacg_main3.png",
        "images/bacg_main4.png",
        "images/bacg_main5.png",
        "images/bacg_main6.png"
    ];
    
    let currentIndex = 0;
    let body = document.body;

    function changeBackground() {
        console.log("Смена фона:", images[currentIndex]); // Проверяем, вызывается ли функция
        body.style.backgroundImage = `url('${images[currentIndex]}')`;
        currentIndex = (currentIndex + 1) % images.length;
    }

    setInterval(changeBackground, 2000); // Меняем фон каждые 5 секунд
});