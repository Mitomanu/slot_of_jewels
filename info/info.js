document.addEventListener('DOMContentLoaded', () => {
    // Referințe la elementele DOM
    const infoButton = document.getElementById('info-button');
    let infoOverlay = null;
    let closeButton = null;
    let currentPageIndex = 0;
    let pages = [];

    // Funcție pentru încărcarea paginii de informații
    function loadInfoHTML() {
        return fetch('info/info.html')
            .then(response => response.text())
            .then(html => {
                // Creează un element temporar pentru a extrage conținutul
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = html;

                // Extrage overlay-ul din HTML-ul încărcat
                const overlayContent = tempDiv.querySelector('.info-overlay');
                if (overlayContent) {
                    return overlayContent.outerHTML;
                }
                return null;
            })
            .catch(error => {
                console.error('Eroare la încărcarea info.html:', error);
                return null;
            });
    }

    // Funcție pentru inițializarea ecranului de informații
    function initializeInfoScreen() {
        // Verifică dacă overlay-ul există deja
        if (document.querySelector('.info-overlay')) {
            // Dacă există deja, doar îl facem vizibil
            const existingOverlay = document.querySelector('.info-overlay');
            existingOverlay.classList.add('visible');
            return;
        }

        // Încarcă HTML-ul și inițializează overlay-ul
        loadInfoHTML().then(htmlContent => {
            if (htmlContent) {
                // Adaugă HTML-ul la body
                document.body.insertAdjacentHTML('beforeend', htmlContent);

                // Inițializează referințele la elementele DOM
                infoOverlay = document.querySelector('.info-overlay');
                closeButton = document.getElementById('close-button');
                pages = document.querySelectorAll('.info-page');

                // Resetează indexul paginii curente
                currentPageIndex = 0;

                // Configurează event listeners
                setupEventListeners();

                // Afișează overlay-ul
                infoOverlay.classList.add('visible');
            }
        });
    }

    // Funcție pentru configurarea event listeners
    function setupEventListeners() {
        // Event listener pentru butonul de închidere
        if (closeButton) {
            closeButton.addEventListener('click', closeInfoScreen);
        }

        // Event listener pentru click pe overlay (pentru închidere)
        if (infoOverlay) {
            infoOverlay.addEventListener('click', (event) => {
                if (event.target === infoOverlay) {
                    closeInfoScreen();
                }
            });
        }

        // Event listeners pentru săgețile de navigare
        const rightArrow1 = document.getElementById('right-arrow-1');
        const leftArrow2 = document.getElementById('left-arrow-2');
        const rightArrow2 = document.getElementById('right-arrow-2');
        const leftArrow3 = document.getElementById('left-arrow-3');

        if (rightArrow1) {
            rightArrow1.addEventListener('click', () => navigateToPage(1));
        }
        if (leftArrow2) {
            leftArrow2.addEventListener('click', () => navigateToPage(0));
        }
        if (rightArrow2) {
            rightArrow2.addEventListener('click', () => navigateToPage(2));
        }
        if (leftArrow3) {
            leftArrow3.addEventListener('click', () => navigateToPage(1));
        }
    }

    // Funcție pentru navigarea între pagini
    function navigateToPage(pageIndex) {
        if (pageIndex < 0 || pageIndex >= pages.length) {
            return;
        }

        // Actualizează clasele pentru pagina curentă
        pages[currentPageIndex].classList.remove('active');
        if (pageIndex > currentPageIndex) {
            pages[currentPageIndex].classList.add('inactive-left');
            pages[currentPageIndex].classList.remove('inactive-right');
        } else {
            pages[currentPageIndex].classList.add('inactive-right');
            pages[currentPageIndex].classList.remove('inactive-left');
        }

        // Actualizează clasele pentru pagina nouă
        pages[pageIndex].classList.add('active');
        pages[pageIndex].classList.remove('inactive-left', 'inactive-right');

        // Actualizează indexul paginii curente
        currentPageIndex = pageIndex;
    }

    // Funcție pentru închiderea ecranului de informații
    function closeInfoScreen() {
        if (infoOverlay) {
            infoOverlay.classList.remove('visible');
        }
    }

    // Event listener pentru butonul de informații
    if (infoButton) {
        infoButton.addEventListener('click', initializeInfoScreen);
    }

    // Event listener pentru tastatura (pentru navigare cu săgețile)
    document.addEventListener('keydown', (event) => {
        // Verifică dacă overlay-ul de informații este vizibil
        if (infoOverlay && infoOverlay.classList.contains('visible')) {
            switch(event.key) {
                case 'ArrowLeft':
                    if (currentPageIndex > 0) {
                        navigateToPage(currentPageIndex - 1);
                    }
                    break;
                case 'ArrowRight':
                    if (currentPageIndex < pages.length - 1) {
                        navigateToPage(currentPageIndex + 1);
                    }
                    break;
                case 'Escape':
                    closeInfoScreen();
                    break;
            }
        }
    });
});