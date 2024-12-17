alert("Are you ready?");
alert("Let's go!");

document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.getElementById('preloader');
    const video = document.getElementById('preloader-video');
    const mainContent = document.getElementById('main-content');

    video.addEventListener('ended', () => {
        preloader.style.display = 'none';
        mainContent.style.display = 'block'; 
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const galleryWrapper = document.querySelector('.gallery-wrapper');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    const images = document.querySelectorAll('.gallery-img');

    let currentIndex = 0; 
    const imagesPerPage = 3; 
    const totalImages = images.length; 

    function updateGallery() {
        const galleryWidth = galleryWrapper.parentElement.clientWidth;
        const translateX = currentIndex * (galleryWidth / imagesPerPage);
        galleryWrapper.style.transform = `translateX(-${translateX}px)`;
    }

    rightArrow.addEventListener('click', () => {
        currentIndex++;
        if (currentIndex + imagesPerPage > totalImages) {
            currentIndex = 0; 
        }
        updateGallery();
    });

    
    leftArrow.addEventListener('click', () => {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = totalImages - imagesPerPage; 
        }
        updateGallery();
    });

    
    updateGallery();
});

