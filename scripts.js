document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.gallery img, .featured-images img');

    images.forEach(img => {
        img.addEventListener('click', () => {
            // Remove zoom class from all images
            images.forEach(image => {
                if (image !== img) {
                    image.classList.remove('zoomed');
                }
            });

            // Toggle zoom class on clicked image
            img.classList.toggle('zoomed');
        });
    });
});
