const accordionV1 = (triggersSelector, blockSelector) => {
    const btns = document.querySelectorAll(triggersSelector),
          blocks = document.querySelectorAll(blockSelector);

    blocks.forEach(block => {
        block.classList.add('animated', 'fadeInDown');
    });

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            if(!btn.classList.contains('active-btn')){
                btns.forEach(btn => {
                    btn.classList.remove('active-btn');
                });
                btn.classList.add('active-btn');
            }
        });
    });
};

const accordionV2 = (btnSelector) => {
    const btns = document.querySelectorAll(btnSelector);

    function hideContent(){
        btns.forEach(btn => {
            btn.classList.remove('active-btn');
            btn.nextElementSibling.classList.remove('active-content');
            btn.nextElementSibling.style.maxHeight = '0px';
        });
    }
    
    function showContent(btn) {
        btn.classList.add('active-btn');
        btn.nextElementSibling.classList.add('active-content');
        btn.nextElementSibling.style.maxHeight = btn.nextElementSibling.scrollHeight + 80 + 'px';
    }

    btns.forEach(btn => {
        btn.addEventListener('click', function() {
            if(this.classList.contains('active-btn')){
                hideContent();
            }else{
                hideContent();
                showContent(this);
            }  
        });
    });
};
export {accordionV1, accordionV2};