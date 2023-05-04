let slides = document.querySelectorAll('.slide .image');
let slideSayisi = slides.length;

const slider = {
    'el': {
      'active': document.querySelector('.active-slider-of .big'),
      'last': document.querySelector('.active-slider-of .last'),
      'pagination': document.querySelectorAll('.pagination-slider'),
      'caption': document.querySelector('#blog .info-slide'),
    },
    'active': 1
}

slider.el.last.innerHTML = slideSayisi;

for (let index = 0; index < slides.length; index++) {
    const element = slides[index];
    element.style.transform = "translateX("+100*(index)+"%)";
    
    const bullet = document.createElement('span');
    bullet.classList.add('bullet');
    
    const bullet2 = document.createElement('span');
    bullet2.classList.add('bullet');
    
    if(index == 0) {
        bullet2.classList.add('active');
        bullet.classList.add('active');
    }
    
    slider.el.pagination[0].appendChild(bullet);
    slider.el.pagination[1].appendChild(bullet2);
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
    
    slider.el.pagination.forEach(element => {
        element.querySelectorAll('.bullet').forEach(element => {
            element.classList.remove('active')
        });
    })
    
    slider.el.caption.querySelectorAll('.content').forEach(element => {
        element.classList.remove('active');
    });
    
    slider.el.pagination.forEach(element => {
        const activeElement = element.querySelectorAll('.bullet')[slider.active-1];
        activeElement.classList.add('active');
    })
    
    const activeElementCaption = slider.el.caption.querySelectorAll('.content')[slider.active-1];
    
    activeElementCaption.classList.add('active');
    
    slider.el.active.innerHTML = slider.active;    
}

const nextBtn = document.querySelectorAll('#blog .arrow-right');
const prevBtn = document.querySelectorAll('#blog .arrow-left');

nextBtn.forEach(element => {
    element.addEventListener('click',goNext);    
});

prevBtn.forEach(element => {
    element.addEventListener('click',goPrev);    
});

document.addEventListener('keydown',function(e){
    if(e.code === 'ArrowRight'){
        goNext();
    }else if(e.code === 'ArrowLeft'){
        goPrev();
    }
});

changeSlide();