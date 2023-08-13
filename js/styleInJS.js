const sections = document.querySelectorAll('section');
for(const section of sections){
    section.style.border='2px solid steelblue';
    section.style.borderRadius='15px';
    section.style.marginBottom='10px';
    section.style.backgroundColor='lightgrey';
}

const fruitContainer = document.getElementById('fruits-container');
fruitContainer.classList.add('yellow-bg');