let slides = document.querySelectorAll('.slide .image');
let slideSayisi = slides.length;

const slider = {
    'el': {
      'active': document.querySelector('.active-slider-of .big'),
      'last': document.querySelector('.active-slider-of .last'),
      'pagination': document.querySelector('.pagination-slider')
    },
    'active': 1
}

slider.el.last.innerHTML = slideSayisi;

for (let index = 0; index < slides.length; index++) {
    const element = slides[index];
    element.style.transform = "translateX("+100*(index)+"%)";
    
    const bullet = document.createElement('span');
    bullet.classList.add('bullet');
    if(index == 0) {
        bullet.classList.add('active');
    }
    slider.el.pagination.appendChild(bullet);
}

let loop = 0 + 1000*slideSayisi;

function goNext(){
    loop++;
    for (let index = 0; index < slides.length; index++) {
        const element = slides[index];
        element.style.transform = "translateX("+100*(index-loop%slideSayisi)+"%)";
    }
    
    changeSlide('next');
}

function goPrev(){
    loop--;
    for (let index = 0; index < slides.length; index++) {
        const element = slides[index];
        element.style.transform = "translateX("+100*(index-loop%slideSayisi)+"%)";
    }
    
    if (slider.active === 1) {
        slider.active = slideSayisi;
    }else{
        slider.active--;
    }
    
    changeSlide('prev');
}

function changeSlide(el) {
    
    if (el == 'next'){
        if (slider.active === slideSayisi) {
            slider.active = 1;
        }else{
            slider.active++;
        }  
    } 
    
    if (el == 'prev'){
        if(slider.active === 1) {
            slider.active = slideSayisi;
        }else{
            slider.active--;
        }
    }
    
    slider.el.pagination.querySelectorAll('.bullet').forEach(element => {
        element.classList.remove('active')
    });
    
    const activeElement = slider.el.pagination.querySelectorAll('.bullet')[slider.active-1];
    activeElement.classList.add('active');
    
    slider.el.active.innerHTML = slider.active;    
}

next.addEventListener('click',goNext);
prev.addEventListener('click',goPrev);
document.addEventListener('keydown',function(e){
    if(e.code === 'ArrowRight'){
        goNext();
    }else if(e.code === 'ArrowLeft'){
        goPrev();
    }
});

changeSlide();