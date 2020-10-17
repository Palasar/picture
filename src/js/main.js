
import bindModal from './modules/modalWindow';
import slider from './modules/slider';
import forms from './modules/forms';
import  maskForNumberPhone from './modules/maskForNumberPhone';
import checklatinSymbol from './modules/checkTextInputs';
import showMoreStyle from './modules/showMoreStyle';
import calcCost from './modules/calc';
import tabs from './modules/tabs';
import showPicture from './modules/showPicture';
import {accordionV1, accordionV2} from './modules/accordion';
import burger from './modules/burger';
import {smoothScrolling} from './modules/scrolling';

window.addEventListener('DOMContentLoaded', () => {
    'Use strict';
    let wasOpenWindow = {
        pressAnyBtn: false
    },
    state = {};
  
    bindModal('.button-design', '.popup-design', '.popup-design .popup-close', '.fixed-gift', wasOpenWindow);
    bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close', '.fixed-gift', wasOpenWindow);
    bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', '.fixed-gift', wasOpenWindow,  true);
    

    slider('', '.main-slider', '.main-slider-item', '', '', 'vertical');
    slider('.feedback', '.feedback-slider', '.feedback-slider-item', '.main-next-btn', '.main-prev-btn');

    forms(state);
    maskForNumberPhone('[name=phone]');
    checklatinSymbol('[name=name]');
    checklatinSymbol('[name=message]');
    showMoreStyle('.button-styles', '#styles .row');

    calcCost('#size', '#material', '#options', '.promocode', '.calc-price', state);
    tabs();
    showPicture('.sizes-block', '.sizes-hit');
    // accordionV1('.accordion-heading', '.accordion-block');
    accordionV2('.accordion-heading');
    burger('.burger-menu', '.burger');
    smoothScrolling('.pageup');
    smoothScrolling('[href="#portfolio"]');
    smoothScrolling('[href="#styles"]');
    smoothScrolling('[href="#often-questions"]');
    smoothScrolling('[href="#scheme"]');
    smoothScrolling('[href="#footer"]');
    
   
    
});