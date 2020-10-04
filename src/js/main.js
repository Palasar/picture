import bindModal from './modules/modalWindow';

window.addEventListener('DOMContentLoaded', () => {
'Use strict';



bindModal('.button-design', '.popup-design', '.popup-design .popup-close', '.fixed-gift');
bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close', '.fixed-gift');
});