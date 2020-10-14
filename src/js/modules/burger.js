const burger = (menuSelector, burgerSelector) => {
    const menuElem = document.querySelector(menuSelector),
          burgerelem = document.querySelector(burgerSelector);

    menuElem.style.display = 'none';

    burgerelem.addEventListener('click', () => {

        if(menuElem.style.display == 'none' && window.screen.availWidth < 993){ 
            menuElem.style.display = 'block';
        }else{
            menuElem.style.display = 'none';
        }
    });

    window.addEventListener('resize', () => {
        if(window.screen.availWidth > 992){
            menuElem.style.display = 'none';
        }
    });

};
export default burger;