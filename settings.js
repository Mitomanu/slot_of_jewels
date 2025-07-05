// Variabile pentru gestionarea creditului și mizei
let credit = 0;
let bet = 0;

// Funcție pentru actualizarea afișării creditului și mizei
function updateDisplay() {
    const creditValueElement = document.getElementById('credit-value');
    const betValueElement = document.getElementById('bet-value');

    if (creditValueElement) {
        creditValueElement.textContent = credit;
    }

    if (betValueElement) {
        betValueElement.textContent = bet;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Referințe la elementele DOM
    const fullscreenButton = document.getElementById('fullscreen-button');
    const fullscreenIcon = document.getElementById('fullscreen-icon');
    const exitFullscreenIcon = document.getElementById('exit-fullscreen-icon');
    const infoButton = document.getElementById('info-button');

    // Funcția pentru comutarea modului fullscreen
    function toggleFullscreen() {
        if (!document.fullscreenElement) {
            // Dacă nu suntem în fullscreen, intră în fullscreen
            document.documentElement.requestFullscreen().then(() => {
                // Schimbă icoanele
                fullscreenIcon.style.display = 'none';
                exitFullscreenIcon.style.display = 'block';
            }).catch(err => {
                console.error(`Eroare la trecerea în fullscreen: ${err.message}`);
            });
        } else {
            // Dacă suntem deja în fullscreen, ieși din fullscreen
            document.exitFullscreen().then(() => {
                // Schimbă icoanele înapoi
                fullscreenIcon.style.display = 'block';
                exitFullscreenIcon.style.display = 'none';
            }).catch(err => {
                console.error(`Eroare la ieșirea din fullscreen: ${err.message}`);
            });
        }
    }

    // Adaugă event listener pentru butonul de fullscreen
    if (fullscreenButton) {
        fullscreenButton.addEventListener('click', toggleFullscreen);
    }

    // Adaugă event listener pentru butonul de info
    if (infoButton) {
        infoButton.addEventListener('click', () => {
            // Implementează aici acțiunea pentru butonul info
            console.log('Buton info apăsat');
            // Exemplu: afișează un modal cu informații
            alert('Informații despre joc');
        });
    }

    // Gestionează evenimentul de schimbare a stării fullscreen din browser
    document.addEventListener('fullscreenchange', () => {
        if (!document.fullscreenElement) {
            // Am ieșit din fullscreen, arată iconul de fullscreen
            if (fullscreenIcon && exitFullscreenIcon) {
                fullscreenIcon.style.display = 'block';
                exitFullscreenIcon.style.display = 'none';
            }
        }
    });

    // Adaugă funcționalitate pentru butonul de spin
    const spinButton = document.getElementById('spin-button');
    if (spinButton) {
        spinButton.addEventListener('click', () => {
            console.log('Buton spin apăsat');
            // Oprește animația de rotație
            spinButton.classList.add('clicked');

            // Resetează starea după o scurtă perioadă pentru a permite re-hover
            setTimeout(() => {
                spinButton.classList.remove('clicked');
            }, 500);

            // Verifică dacă mai sunt credite disponibile
            if (credit <= 0) {
                alert('Nu mai ai credite disponibile!');
                return;
            }

            // Verifică dacă există o miză setată
            if (bet <= 0) {
                alert('Setează o miză mai întâi!');
                return;
            }

            // Scade miza din credit
            credit -= bet;
            updateDisplay();

            // Aici vom adăuga logica pentru rotirea rolelor
        });
    }

    // Inițializare afișare
    updateDisplay();
});
