alert("Are you ready?");
alert("Let's go!");

document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.getElementById('preloader');
    const video = document.getElementById('preloader-video');
    const mainContent = document.getElementById('main-content');

    // 當影片播放結束時
    video.addEventListener('ended', () => {
        preloader.style.display = 'none'; // 隱藏預載影片
        mainContent.style.display = 'block'; // 顯示主要內容
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const galleryWrapper = document.querySelector('.gallery-wrapper');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    const images = document.querySelectorAll('.gallery-img');

    let currentIndex = 0; // 當前起始索引
    const imagesPerPage = 3; // 每次顯示的圖片數量
    const totalImages = images.length; // 總圖片數

    // 更新圖片的顯示
    function updateGallery() {
        const galleryWidth = galleryWrapper.parentElement.clientWidth;
        const translateX = currentIndex * (galleryWidth / imagesPerPage);
        galleryWrapper.style.transform = `translateX(-${translateX}px)`;
    }

    // 右箭頭事件
    rightArrow.addEventListener('click', () => {
        currentIndex++;
        if (currentIndex + imagesPerPage > totalImages) {
            currentIndex = 0; // 回到第一張
        }
        updateGallery();
    });

    // 左箭頭事件
    leftArrow.addEventListener('click', () => {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = totalImages - imagesPerPage; // 跳到最後一組圖片
        }
        updateGallery();
    });

    // 初始化
    updateGallery();
});

