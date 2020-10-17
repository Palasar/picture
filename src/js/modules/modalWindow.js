
const bindModal = (btnSelector, modalSelector, closeSelector, giftSelector, wasOpenWindow, destroy = false) => {

    const btnOpenModals = document.querySelectorAll(btnSelector),
          modal = document.querySelector(modalSelector),
          btnCloseModal = document.querySelector(closeSelector),
          allModalsWindow = document.querySelectorAll('[data-modal]'),
          gift = document.querySelector(giftSelector),
          giftRight = getComputedStyle(gift).right,
          scrollWidth = `${window.innerWidth - document.documentElement.clientWidth}px`,
          giftRightWhenModalOpen = `${parseInt(scrollWidth) + parseInt(giftRight)}px`;

    function animatedModal(){
        allModalsWindow.forEach(modal => {
            modal.classList.add('animated', 'fadeIn');
        });
    }
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

        if(destroy){
            gift.remove();
        }

        wasOpenWindow.pressAnyBtn = true;
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
    function openGiftByScroll() {
        // let scrollHeight = Math.max(
        //     document.body.scrollHeight, document.documentElement.scrollHeight,
        //     document.body.offsetHeight, document.documentElement.offsetHeight,
        //     document.body.clientHeight, document.documentElement.clientHeight
        //   );
        
        window.addEventListener('scroll', () => {
        
        const heightOfAllDocument = document.documentElement.scrollHeight,
                heightWindowWithScroll = document.documentElement.clientHeight + window.pageYOffset;
        
        if(( heightOfAllDocument <= heightWindowWithScroll ) && !wasOpenWindow.pressAnyBtn){
            gift.click();
            
            }
        });
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
    
    // showModlByTime('.popup-consultation', 60000);
    openGiftByScroll();
    animatedModal();
   
};
export default bindModal;
