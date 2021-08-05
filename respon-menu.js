addEventListener('DOMContentLoaded', () => {
    const boton = document.querySelector('.btn-menu');
    if (boton){
        boton.addEventListener('click', () => {
            const menu = document.querySelector('.menu');
            menu.classList.toggle('desplecable')
        })
    }
}) 