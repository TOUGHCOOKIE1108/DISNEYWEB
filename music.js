alert("Are you ready?");
alert("Let's go!");

document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.getElementById('preloader');
    const video = document.getElementById('preloader-video');
    const mainContent = document.getElementById('main-content');

    // ��v�����񵲧���
    video.addEventListener('ended', () => {
        preloader.style.display = 'none'; // ���ùw���v��
        mainContent.style.display = 'block'; // ��ܥD�n���e
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const galleryWrapper = document.querySelector('.gallery-wrapper');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    const images = document.querySelectorAll('.gallery-img');

    let currentIndex = 0; // ��e�_�l����
    const imagesPerPage = 3; // �C����ܪ��Ϥ��ƶq
    const totalImages = images.length; // �`�Ϥ���

    // ��s�Ϥ������
    function updateGallery() {
        const galleryWidth = galleryWrapper.parentElement.clientWidth;
        const translateX = currentIndex * (galleryWidth / imagesPerPage);
        galleryWrapper.style.transform = `translateX(-${translateX}px)`;
    }

    // �k�b�Y�ƥ�
    rightArrow.addEventListener('click', () => {
        currentIndex++;
        if (currentIndex + imagesPerPage > totalImages) {
            currentIndex = 0; // �^��Ĥ@�i
        }
        updateGallery();
    });

    // ���b�Y�ƥ�
    leftArrow.addEventListener('click', () => {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = totalImages - imagesPerPage; // ����̫�@�չϤ�
        }
        updateGallery();
    });

    // ��l��
    updateGallery();
});

