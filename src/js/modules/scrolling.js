const toggleUpButton = (buttons) => {
    buttons.forEach(linkElem => {
        
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
};

const smoothScrolling = (linkSelector) => {
    const linkElements = document.querySelectorAll(linkSelector);
    
    toggleUpButton(linkElements);

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
            speed = (fromLink > toAnchor) ? -20 : 20,
            prevScrollTop,

            move = setInterval(() => {

                let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

                if( prevScrollTop === scrollTop ||
                   (fromLink < toAnchor && scrollTop >= toAnchor) ||
                   (fromLink > toAnchor && scrollTop <= toAnchor) 
                ){
                    clearInterval(move);
                    // history.replaceState(null, document.title, location.href.replace(/#.*$/g, '') + hash);
                    location.hash = hash;
                }else{
                    document.documentElement.scrollTop += speed;
                    document.body.scrollTop += speed;
                    prevScrollTop = scrollTop;
                }

            }, interval);
    }
    calcAnchorTop();  
};

const smoothScrollV2 = (linkSelector) => {
     
    const links = document.querySelectorAll(linkSelector);

    toggleUpButton(links);

    links.forEach(link => {
        link.addEventListener('click', function() {
            const hash = this.hash,
                  distanceToAnchor = document.querySelector(hash).getBoundingClientRect().top,
                  speed = 0.3,
                  scrollTop = document.documentElement.scrollTop;
            
            let start = null;

            requestAnimationFrame(step);
            
            function step(time){
               start = start === null ? time : start;

                let progress = time - start,
                    stepAnimation;

                if(distanceToAnchor < 0){
                    stepAnimation = Math.max(scrollTop - progress/speed, scrollTop + distanceToAnchor);
                }else{
                    stepAnimation = Math.min(scrollTop + progress/speed, scrollTop + distanceToAnchor);
                }

                document.documentElement.scrollTo(0, stepAnimation);

                if(stepAnimation != scrollTop + distanceToAnchor){
                    requestAnimationFrame(step);
                }else{
                    location.hash = hash;
                }
            }
        });
    });
};
export {smoothScrolling, smoothScrollV2} ;