import "core-js";
import bindModal from './modules/modalWindow';
import slider from './modules/slider';
import forms from './modules/forms';
import  maskForNumberPhone from './modules/maskForNumberPhone';
import checklatinSymbol from './modules/checkTextInputs';

window.addEventListener('DOMContentLoaded', () => {
    'Use strict';
    let wasOpenWindow = {
        pressAnyBtn: false
    };

    bindModal('.button-design', '.popup-design', '.popup-design .popup-close', '.fixed-gift', wasOpenWindow);
    bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close', '.fixed-gift', wasOpenWindow);
    bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', '.fixed-gift', wasOpenWindow,  true);

    slider('', '.main-slider', '.main-slider-item', '', '', 'vertical');
    slider('.feedback', '.feedback-slider', '.feedback-slider-item', '.main-next-btn', '.main-prev-btn');

    forms();
    maskForNumberPhone('[name=phone]');
    checklatinSymbol('[name=name]');
    checklatinSymbol('[name=message]');
});