const smoothScrolling = (linkSelector) => {
    const linkElements = document.querySelectorAll(linkSelector);
    
    linkElements.forEach(linkElem => {
        
        if(linkElem.getAttribute('data-up')){
           
            window.addEventListener('scroll', () => {
                let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
               
                if(scrollTop > 1000){
                    linkElem.classList.add('animated', 'fadeIn');
                    linkElem.classList.remove('fadeOut');
                }else{
                    linkElem.classList.add('fadeOut');
                    linkElem.classList.remove('fadeIn');
                }
            });
        }
    });

    function calcAnchorTop() {

        linkElements.forEach(linkElem  => {
            linkElem.addEventListener('click', function(e) {

            let linkTop =  document.documentElement.scrollTop || document.body.scrollTop,
                anchorTop = 0,
                anchorElement;
                
            if(this.hash){
                e.preventDefault();
                    
                anchorElement = document.querySelector(this.hash);
                
                while(anchorElement.offsetParent){
                    anchorTop += anchorElement.offsetTop;
                    anchorElement = anchorElement.offsetParent;
                }
                
                anchorTop = Math.round(anchorTop);
            }
                moveScroll(linkTop, anchorTop, this.hash);
            });
        });
    }

    function moveScroll(fromLink, toAnchor, hash) {
        let interval = 1,
            speed = (fromLink > toAnchor) ? -15 : 15,
            prevScrollTop,

            move = setInterval(() => {

                let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

                if( prevScrollTop === scrollTop ||
                   (fromLink < toAnchor && scrollTop >= toAnchor) ||
                   (fromLink > toAnchor && scrollTop <= toAnchor) 
                ){
                    clearInterval(move);
                    history.replaceState(null, document.title, location.href.replace(/#.*$/g, '') + hash);
                }else{
                    document.documentElement.scrollTop += speed;
                    document.body.scrollTop += speed;
                    prevScrollTop = scrollTop;
                }

            }, interval);
    }
    calcAnchorTop();  
};
export {smoothScrolling};