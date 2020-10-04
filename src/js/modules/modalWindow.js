const bindModal = (btnSelector, modalSelector, closeSelector, giftSelector) => {

    const btnOpenModals = document.querySelectorAll(btnSelector),
          modal = document.querySelector(modalSelector),
          btnCloseModal = document.querySelector(closeSelector),
          allModalsWindow = document.querySelectorAll('[data-modal]'),
          gift = document.querySelector(giftSelector),
          giftRight = getComputedStyle(gift).right,
          scrollWidth = `${window.innerWidth - document.documentElement.clientWidth}px`,
          giftRightWhenModalOpen = `${parseInt(scrollWidth) + parseInt(giftRight)}px`;

    function closeModal() {
        modal.style.display = 'none';
        document.body.style.marginRight = '0px';
        document.body.style.overflow = '';
        gift.style.right = giftRight;
    }

    function openModal (modalWindow) {
        modalWindow.style.display = 'block';
        document.body.style.marginRight = scrollWidth;
        document.body.style.overflow = 'hidden';
        gift.style.right = giftRightWhenModalOpen;
    }

    function showModlByTime(selector, time){
        let allowOpenModal = true;

        setTimeout(() => {
            allModalsWindow.forEach(modal => {
                if(getComputedStyle(modal).display == 'block'){
                    allowOpenModal = false;
                }
            });
            if(allowOpenModal){
               const modal = document.querySelector(selector);
                openModal (modal); 
            }   
        }, time);
    } 
    
    btnOpenModals.forEach(btnOpen => {
        btnOpen.addEventListener('click', () => {
            closeModal();
            openModal(modal);
        });
    });

    btnCloseModal.addEventListener('click', () => {
        closeModal();
    });
   
    modal.addEventListener('click', (e) => {
        if(e.target === modal){
            closeModal();
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if(e.code == 'Escape'){
            closeModal();
        }
    });

    showModlByTime('.popup-consultation', 3000);

};
export default bindModal;