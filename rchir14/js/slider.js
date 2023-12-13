let slider = document.getElementById("slide");
let line = document.getElementById("line-way");
let main = document.getElementById("main-list");

document.addEventListener('DOMContentLoaded', function ()
{

    let isDragging = false;

    slider.addEventListener('mousedown', (e) => {
        isDragging = true;
        slider.style.cursor = 'grabbing';
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        slider.style.cursor = 'grab';
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;

        const sliderRect = line.getBoundingClientRect();
        let newPosition = e.clientX - sliderRect.left;

        // Ограничиваем положение бегунка в пределах слайдера
        if (newPosition < 0) {
            newPosition = 0;
        } else if (newPosition > sliderRect.width - slider.clientWidth) {
            newPosition = sliderRect.width - slider.clientWidth;
        }

        slider.style.left = newPosition + 'px';
    });
});

