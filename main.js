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