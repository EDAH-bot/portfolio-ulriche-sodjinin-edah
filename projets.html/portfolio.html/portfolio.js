// Sélection des éléments
const carousel = document.querySelector( '.carousel') ;
const carouselItems = document.querySelectorAll( '.carousel-item') ;
const prevBtn = document.getElementById('prev-btn') ;
const nextBtn = document.getElementById('next-btn') ;
let currentIndex = 0 ;
let autoPlayInterval ;
let touchStartX = 0 ;
let touchEndX = 0 ;

// Ajout des indicateurs de pagination
const paginationDots = document.createElement('div') ;
paginationDots.className = 'pagination-dots' ;
carousel.parentNode.insertBefore(paginationDots, carousel.nextSibling) ;

// Création des points de pagination
carouselItems.forEach((_, index) => {
 const dot = document.createElement('button') ;
 dot.className = 'pagination-dot' ;
 dot.addEventListener('click', () => goToItem(index)) ;
 paginationDots.appendChild(dot) ;
}) ;

// Fonction pour afficher un item avec animation
function showItem(index) {
 carouselItems.forEach((item, i) => {
 item.classList.remove('active', 'fade', 'slide-left', 'slide-right') ;
 if (i === index) {
 item.classList.add('active') ;

 // Animation fluide
 setTimeout(() => {
 item.style.opacity = '1';
 item.style.transform = 'translateX(0)' ;
 }, 10) ;
 } else {
 item.style.opacity = '0' ;
 item.style.transform = `translateX(${i < index ? '-' : ''}100%)` ;
 }
 }) ;

 // Mise à jour des points de pagination
 document.querySelectorAll('.pagination-dot').forEach((dot, i) => {
 dot.classList.toggle('active', i === index) ;
 }) ;
}

// Navigation
function  nextItem() {
    currentIndex = (currentIndex < carouselItems.length - 1) ? currentIndex + 1 : 0 ;
    showItem(currentIndex) ;
}

function  prevItem() {
 currentIndex = (currentIndex > 0) ? currentIndex - 1 : carouselItems.length - 1 ;
 showItem(currentIndex) ;
}

// Auto-play
function startAutoPlay() {
 autoPlayInterval = setInterval(nextItem, 5000) ;
}
function stopAutoPlay() {
 clearInterval(autoPlayInterval) ;
}

// Gestion des événements
prevBtn.addEventListener('click', () => {
 prevItem() ;
 stopAutoPlay() ;
}) ;
nextBtn.addEventListener('click', () => {
 nextItem() ;
 stopAutoPlay() ;
}) ;

// Swipe mobile
carousel.addEventListener('touchstart', (e) => {
 touchStartX = e.changedTouches[0].screenX ;
}) ;

carousel.addEventListener('touchend', (e) => {
 touchEndX = e.changedTouches[0].screenX ;
 if (touchStartX - touchEndX > 50) nextItem() ; // Swipe gauche
 if (touchEndX - touchStartX > 50) prevItem() ; // Swipe droit
}) ;

// Navigation clavier
document.addEventListener('keydown', (e) => {
 if (e.key === 'ArrowLeft') prevItem() ;
 if (e.key === 'ArrowRight') nextItem() ;
}) ;

// Hover pause
carousel.addEventListener('mouseenter', stopAutoPlay) ;
carousel.addEventListener('mouseleave', startAutoPlay) ;

// Initialisation
showItem(currentIndex) ;
startAutoPlay() ;