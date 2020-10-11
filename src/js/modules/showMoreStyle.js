import {getResource} from '../services/requests';

const showMoreStyle = (targetSelector, wrapperSelector) => {
    const btn = document.querySelector(targetSelector),
          wrapperCards = document.querySelector(wrapperSelector);

    function createCards() {
        getResource('http://localhost:3000/styles')
        .then((response) => {
            response.forEach(({src, title, link}) => {
                const  card = document.createElement('div');
                card.classList.add('col-sm-3','col-sm-offset-0', 
                                'col-xs-10', 'col-xs-offset-1', 
                                'animated', 'fadeIn');
                card.innerHTML = `
                                <div class=styles-block>
                                    <img src = ${src} alt>
                                    <h4>${title}</h4>
                                    <a href="${link}">Подробнее</a>
                                </div>
                `;
                wrapperCards.append(card);
            });
           
        })
        .catch(() => {
            const error = document.createElement('div');
                error.textContent = new Error('Sorry, something went wrong');
                error.style.color = 'red';
                error.style.textAlign = 'center';
                error.style.fontSize = '20px';
                wrapperCards.append(error);
        }); 
    }

    btn.addEventListener('click', function() {
        createCards();
        this.remove();
    });
};
export default showMoreStyle;