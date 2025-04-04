document.addEventListener('DOMContentLoaded', () => {
    const magnifier = document.createElement('div');
    magnifier.id = 'magnifier';

    const zoomedImg = document.createElement('img');
    magnifier.appendChild(zoomedImg);
    document.body.appendChild(magnifier);

    const zoom = 2; // Коэффициент увеличения
    const magnifierWidth = 150; // Ширина лупы
    const magnifierHeight = 100; // Высота лупы

    document.querySelectorAll('.project_top img, .project_bottom img').forEach(img => {
        img.addEventListener('mousemove', (e) => {
            const rect = img.getBoundingClientRect();
            const offsetX = e.clientX - rect.left; // Координаты курсора относительно изображения
            const offsetY = e.clientY - rect.top;

            // Настройки лупы
            magnifier.style.display = 'block';
            magnifier.style.left = `${e.pageX + 10}px`;
            magnifier.style.top = `${e.pageY + 10}px`;

            // Настройки увеличенного изображения
            zoomedImg.src = img.src;
            zoomedImg.style.width = `${img.width * zoom}px`;
            zoomedImg.style.height = `${img.height * zoom}px`;

            // Коррекция смещения увеличенного изображения
            const moveX = offsetX * zoom - magnifierWidth / 2;
            const moveY = offsetY * zoom - magnifierHeight / 2;
            zoomedImg.style.transform = `translate(-${moveX}px, -${moveY}px)`;
        });

        img.addEventListener('mouseleave', () => {
            magnifier.style.display = 'none';
        });
    });
});
