import bindModal from './modules/modalWindow';

window.addEventListener('DOMContentLoaded', () => {
    'Use strict';
    let wasOpenWindow = {
        pressAnyBtn: false
    };

    bindModal('.button-design', '.popup-design', '.popup-design .popup-close', '.fixed-gift', wasOpenWindow);
    bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close', '.fixed-gift', wasOpenWindow);
    bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', '.fixed-gift', wasOpenWindow,  true);
});