const drawer = document.querySelector('.drawer');
const arrow = document.querySelector('.arrow');

arrow.addEventListener('click', () => {
    if (drawer.style.right === '0px' || drawer.style.right === '') {
        drawer.style.right = '-300px';
        arrow.classList.remove('arrow-open');
    } else {
        drawer.style.right = '0px';
        arrow.classList.add('arrow-open');
    }
});