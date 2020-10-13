const showPicture = (blockImgSelector, hitSelector) => {
    const allBlocksImg = document.querySelectorAll(blockImgSelector);

    function showImg (blockImg){
        const img = blockImg.querySelector('img'),
              paragInBlockImg = blockImg.querySelectorAll(`p:not(${hitSelector})`);

        img.src = img.src.slice(0, -4) + '-1.png';

        paragInBlockImg.forEach(parag => {
            parag.style.display = 'none';
        });
    }

    function hideImg (blockImg){
        const img = blockImg.querySelector('img'),
              paragInBlockImg = blockImg.querySelectorAll('p');

        img.src = img.src.slice(0, -6) + '.png';

        paragInBlockImg.forEach(parag => {
            parag.style.display = 'block';
        });
    }

    allBlocksImg.forEach(blockImg => {
        blockImg.addEventListener('mouseover', () => {
            showImg(blockImg);
        });
    });

    allBlocksImg.forEach(blockImg => {
        blockImg.addEventListener('mouseout', () => {
            hideImg(blockImg);
        });
    });
};
export default showPicture;