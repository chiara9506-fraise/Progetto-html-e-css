
// Frasi da visualizzare
const titles = ['UX/UI Designer', 'Ing. Gestionale'];
let currentIndex = 0;
const titleElement = document.getElementById('job-title');

// Funzione per cambiare il testo
function changeTitle() {
    titleElement.style.opacity = '0'; // Inizia la transizione di dissolvenza
    
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % titles.length;
        titleElement.textContent = titles[currentIndex];
        titleElement.style.opacity = '1'; // Rende il testo visibile
    }, 500); // Ritardo per la transizione
}

// Avvia il cambio di testo ogni 3.5 secondi
setInterval(changeTitle, 3500);
