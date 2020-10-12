const calcCost = (sizeSelector, materialSelector, 
                 optionsSelector, promotionselector, 
                 calcResultSelector, state) => {

    const sizePicture = document.querySelector(sizeSelector),
          materialPicture = document.querySelector(materialSelector),
          optionsPicture = document.querySelector(optionsSelector),
          promotion = document.querySelector(promotionselector),
          pricePicture = document.querySelector(calcResultSelector);

    let sum = 0;

    function setState (e){
        const options = e.target.querySelectorAll('option');
        options.forEach(option => {
            if(option.value == e.target.value){
                state[e.target.getAttribute('id')] = option.innerText;
            }
        });
        state.price = pricePicture.innerText;
        console.log(state)
    }

    function calculPricePicture () {
        sum = Math.round((+sizePicture.value) * (+materialPicture.value) + (+optionsPicture.value));

        pricePicture.style.color = '#333';

        if(sizePicture.value == '0'){
            pricePicture.textContent = 'Пожалуйста выберите размер картины';
        }else if(materialPicture.value == '0'){
            pricePicture.textContent = 'Пожалуйста выберите материал картины';
        }else if(promotion.value === 'IWANTPOPART'){
            pricePicture.textContent = `Цена: ${Math.round(sum * 0.7)} грн`;
        }else{
            pricePicture.textContent = `Цена: ${sum} грн`;
        }
    }

    function addEvent(elem, event) {
        elem.addEventListener(event, (e) => {
            calculPricePicture();
            setState(e);
            
        });
    }

    addEvent(sizePicture, 'change');
    addEvent(materialPicture, 'change');
    addEvent(optionsPicture, 'change');
    addEvent(promotion, 'input');
};
export default calcCost;