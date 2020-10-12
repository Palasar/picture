const tabs = () => {
    const portfolioMenu = document.querySelector('.portfolio-menu'),
          tabs = portfolioMenu.querySelectorAll('li'),
          pictures = document.querySelectorAll('.portfolio-wrapper .all'),
          noPicture = document.querySelector('.portfolio-no');

    portfolioMenu.addEventListener('click', (e) => {
        const target = e.target;

        tabs.forEach(tab => {
            tab.classList.remove('active');
        });

        noPicture.style.display = 'none';
        noPicture.classList.remove('animated', 'fadeIn');

        if(target && target.tagName == 'LI'){
            const tabClass = e.target.classList[0];

            target.classList.add('active');

            pictures.forEach(picture => {
                picture.style.display = 'none';
                picture.classList.remove('fadeIn', 'animated');

                if(picture.classList.contains(tabClass)){
                    picture.style.display = 'block';   
                    picture.classList.add('animated', 'fadeIn');
                }else{
                    noPicture.style.display = 'block';
                    noPicture.classList.add('animated', 'fadeIn');
                }
            });
        }
    });     
};

export default tabs;