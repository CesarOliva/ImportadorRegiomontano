document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        if(window.innerWidth > 768) return;
        const list = card.querySelector('.list');
        const img = card.querySelector('img');
        if (getComputedStyle(list).opacity === '0') {
            list.style.opacity = '1';
            img.style.opacity = '0';
        } else {
            list.style.opacity = '0';
            img.style.opacity = '1';
        }

        setTimeout(() => {
            if (getComputedStyle(list).opacity === '1') {
                list.style.opacity = '0';
                img.style.opacity = '1';
            } else {
                list.style.opacity = '1';
                img.style.opacity = '0';
            }
        },4000);
    });
});

productos = document.getElementById('productos');
contacto = document.getElementById('contacto');
popup = document.querySelector('#popup');
popup.style.display = 'none';

if(window.innerWidth < 768){
    document.onscroll = () => {
        if(
            (window.scrollY > productos.offsetTop- window.innerHeight + 100)
            && (window.scrollY < contacto.offsetTop-innerHeight + 100)
        ){
            console.log("getBound: "+ window.scrollY),
            popup.style.display = 'inline-block';
        }else {
            popup.style.display = 'none';
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    hamburgerBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        mobileMenu.classList.toggle('open');
    });
    
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburgerBtn.classList.remove('active');
            mobileMenu.classList.remove('open');
        });
    });
});