const slider = (sectionSelector, wrapperSliderSelector, slideSelector, nextSelector, prevSelector, direction) => {

    const slides = document.querySelectorAll(slideSelector),
          wrapperSlider = document.querySelector(wrapperSliderSelector),
          widthSlide = getComputedStyle(document.querySelector('.container')).width,
          heightSlide = getComputedStyle(document.querySelector('.container')).height;
          
    let slideIndex = 0,
        paused = false,
        allowShift = true;

    slides.forEach(slide => {
        slide.style.display = 'none';
        slide.classList.add('animated');
        if(direction){
            slide.style.height = heightSlide;
        }else{
            slide.style.width = widthSlide;
        }
        slide.style.position = 'absolute';
            if(direction){
                slide.style.top = '-62px';
            }else{
                slide.style.top = '0';
            }
        
        slide.style.left = '0';
    });

    slides[slideIndex].style.display = 'block';

    function autoShiftSlide(dir){
        if(dir === 'vertical') {
        paused = setInterval(() => {
            shiftSlide(1, 'fadeOutDown', 'fadeInDown');
            }, 6000);
        }else{
            paused = setInterval(() => {
            
                shiftSlide(1, 'fadeOutLeft', 'fadeInRight');

            }, 6000);
        }
    }
    // autoShiftSlide(direction);

    wrapperSlider.addEventListener('mouseenter', () => clearInterval(paused));
    wrapperSlider.addEventListener('mouseleave', () => autoShiftSlide(direction));

    function shiftSlide(n, shiftOutClass, shiftInClass){
        
        allowShift = false;

        slides[slideIndex].classList.add(shiftOutClass);

        slideIndex += n;

        if(slideIndex == slides.length){
            slideIndex = 0;
        }else if(slideIndex < 0){
            slideIndex = slides.length - 1;
        }

        slides[slideIndex].classList.add(shiftInClass);
        slides[slideIndex].style.display = 'block';

        slides[slideIndex].addEventListener('animationend', () => {
            
            allowShift = true;

            slides.forEach(slide => {
                slide.style.display = 'none';
            });

            slides[slideIndex].style.display = 'block';
            slides[slideIndex].classList.remove(shiftInClass);

            if(slideIndex == 0){
                slides[slides.length - 1].classList.remove(shiftOutClass);
            }else{
                slides[slideIndex - 1].classList.remove(shiftOutClass);
            }

            if(slideIndex == slides.length - 1){
                slides[0].classList.remove(shiftOutClass);
            }else{
                slides[slideIndex + 1].classList.remove(shiftOutClass);
            }    
        });
    }

    try{
        const nextArrow = document.querySelector(nextSelector),
              prevArrow = document.querySelector(prevSelector),
              sectionSlider = document.querySelector(sectionSelector);

        sectionSlider.style.overflowX = 'hidden';

        nextArrow.addEventListener('click', () => {
            if(allowShift){
                shiftSlide(1, 'fadeOutLeft', 'fadeInRight');
            }
        });

        prevArrow.addEventListener('click', () => {
            if(allowShift){
                shiftSlide(-1, 'fadeOutRight', 'fadeInLeft');   
            }
        });
    }catch(e){}
};
export default slider;