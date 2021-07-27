const slider = () => {
    const slides = document.querySelectorAll('.resours__slider'),
          btnLeft = document.querySelector('#left'),
          btnRight = document.querySelector('#right'),
          btnFooter = document.querySelectorAll('.resours__footer-btn')

    let index = 0;
    function activeSlide(n) {
        for (let item of slides) {
            item.classList.remove('active');
        } 
        slides[n].classList.add('active');
    }

    console.log(btnFooter);

    function nextSlide() {
        if (index == slides.length - 1) {
            index = 0;
        } else {
            index++;
        }
        activeSlide(index);
    }

    function backSlide() {
        if (index == 0) {
            index = slides.length - 1;
        } else {
            index--;
        }
        activeSlide(index);
    }

    btnRight.addEventListener('click', nextSlide);
    btnLeft.addEventListener('click', backSlide);

    btnFooter[0].addEventListener('click', nextSlide);
    btnFooter[1].addEventListener('click', backSlide);
}

module.exports = slider;