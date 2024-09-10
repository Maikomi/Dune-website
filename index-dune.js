document.addEventListener('DOMContentLoaded', () => {
    const photos = [...document.getElementsByTagName('img')];

    const info = [...document.getElementsByTagName('p')];

    function getRandomSize() {
        return Math.random() * (35 - 20) + 20;
    }

    const decideImageSize = e => {
        let size = getRandomSize();
        e.style.width = size + 'rem';
    }

    photos.forEach(decideImageSize);
});
