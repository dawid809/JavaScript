// pobranie referencji
const gallery = document.querySelectorAll('.gallery img');
const galleryCount = gallery.length;
// zapisanie się na zdarzenie click
for (let idx = 0; idx < gallery.length; idx++) {
    const img = gallery[idx];
    img.addEventListener('click', showLightbox);
}

function showLightbox(ev) { 
    console.dir(ev.target);
    const lightbox = document.querySelector('.lightbox');
    const img = document.querySelector('.lightbox img');
    const imgUrl = ev.target.src;
    img.src = imgUrl;
    lightbox.classList.add('visible');
}
//Po klikinięciu poza nasze zjdęcie powraca do stanu przed klikiem
const lightbox = document.querySelector('.lightbox');
lightbox.addEventListener('click', e=>{
    if (e.target !== e.currentTarget) return
    lightbox.classList.remove('visible')
})