document.addEventListener('DOMContentLoaded', () => {
    const scroller = document.querySelector('.scroller');
    const inner = document.querySelector('.inner');
    let speed = 0.5;

    function scroll() {
        const currentTransform = getComputedStyle(inner).transform;
        let currentX = 0;
        if (currentTransform !== 'none') {
            currentX = parseFloat(currentTransform.split(',')[4]);
        }

        inner.style.transform = `translateX(${currentX - speed}px)`;

        const firstLogo = inner.firstElementChild;
        const firstLogoRect = firstLogo.getBoundingClientRect();
        const scrollerRect = scroller.getBoundingClientRect();

        if (firstLogoRect.right <= scrollerRect.left) {
            inner.appendChild(firstLogo);
            inner.style.transform = `translateX(0)`;
        }
        
        requestAnimationFrame(scroll);
    }
    scroll();
});
