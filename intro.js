document.addEventListener('DOMContentLoaded', () => {
    // Referințe la elementele DOM
    const logoContainer = document.querySelector('.logo-container');
    const lLetter = document.querySelector('.l-letter');
    const iLetter = document.querySelector('.i-letter');
    const presentsLetters = document.querySelectorAll('.presents-letter');
    const overlay = document.querySelector('.overlay');
    const body = document.body;
    const gameTitle = document.querySelector('.game-title');
    const skipIntroButton = document.getElementById('skip-intro');

    // Funcție pentru a sări peste intro și a arăta jocul direct
    function skipIntro() {
        // Oprim toate animațiile în curs
        const allElements = document.querySelectorAll('*');
        allElements.forEach(element => {
            const computedStyle = window.getComputedStyle(element);
            const hasTransition = computedStyle.transition !== 'all 0s ease 0s';

            if (hasTransition) {
                element.style.transition = 'none';
            }
        });

        // Ascunde elementele intro-ului
        logoContainer.style.opacity = '0';
        logoContainer.style.visibility = 'hidden';
        document.querySelector('.presents-text').style.opacity = '0';
        document.querySelector('.presents-text').style.visibility = 'hidden';
        document.querySelector('.intro-container').style.display = 'none';

        // Ascunde butonul de skip
        skipIntroButton.style.display = 'none';

        // Schimbă fundalul la lightgrey
        body.classList.add('light-background');

        // Resetează overlay-ul
        overlay.style.opacity = '0';
        overlay.style.transition = 'none';

        // Afișează titlul jocului
        gameTitle.classList.add('visible');

        // Afișează butoanele de control
        const controlButtons = document.querySelectorAll('.control-button');
        controlButtons.forEach(button => {
            button.classList.add('visible');
        });

        // Afișează containerul de benzi și butonul de spin
        const reelsContainer = document.querySelector('.reels-container');
        const spinButton = document.getElementById('spin-button');
        if (reelsContainer) {
            reelsContainer.classList.add('visible');
        }
        if (spinButton) {
            spinButton.classList.add('visible');
        }

        // Afișează informațiile despre joc (credit și miză)
        const gameInfoElements = document.querySelectorAll('.game-info');
        gameInfoElements.forEach(element => {
            element.classList.add('visible');
        });

        // Restabilim tranzițiile după un moment
        setTimeout(() => {
            allElements.forEach(element => {
                element.style.transition = '';
            });
        }, 50);
    }

    // Adăugăm event listener pentru butonul Skip Intro
    if (skipIntroButton) {
        skipIntroButton.addEventListener('click', skipIntro);
    }

    // Funcția de inițializare a animațiilor
    function startIntroAnimation() {
        // Începe cu ecran negru
        setTimeout(() => {
            // Arată logo-ul ALSOFT cu efect de mărire și fade-in
            logoContainer.classList.add('visible');

            // După 3 secunde, transformă "L" în "I"
            setTimeout(() => {
                lLetter.classList.add('melt');
                setTimeout(() => {
                    iLetter.classList.add('visible');
                    iLetter.classList.remove('hidden');
                }, 1000); // Un mic delay pentru efect de tranziție (dublat)

                // Afișează textul "presents..." literă cu literă
                setTimeout(() => {
                    presentsLetters.forEach((letter, index) => {
                        setTimeout(() => {
                            letter.classList.add('visible');
                        }, index * 500); // Fiecare literă apare la interval de 0.5s (jumătate din timpul anterior)
                    });

                    // După terminarea tuturor tranzițiilor și 5 secunde în plus
                    const lastLetterDelay = (presentsLetters.length - 1) * 500; // Ajustat pentru noul timp de apariție
                    setTimeout(() => {
                        // Fade-out pe culoarea neagră (overlay)
                        overlay.classList.add('fade-out');

                        // După 2 secunde, schimbă fundalul și afișează titlul jocului
                        setTimeout(() => {
                            // Schimbă fundalul la lightgrey
                            body.classList.add('light-background');

                            // Ascunde elementele intro-ului
                            logoContainer.style.opacity = '0';
                            document.querySelector('.presents-text').style.opacity = '0';

                            // Afișează titlul jocului
                            setTimeout(() => {
                                gameTitle.classList.add('visible');
                                // La final, ascunde overlay-ul
                                overlay.style.opacity = '0';

                                // Afișează butoanele de control și benzile
                                const controlButtons = document.querySelectorAll('.control-button');
                                controlButtons.forEach(button => {
                                    button.classList.add('visible');
                                });

                                // Afișează containerul de benzi și butonul de spin
                                const reelsContainer = document.querySelector('.reels-container');
                                const spinButton = document.getElementById('spin-button');
                                if (reelsContainer) {
                                    reelsContainer.classList.add('visible');
                                }
                                if (spinButton) {
                                    spinButton.classList.add('visible');
                                }

                                // Afișează informațiile despre joc (credit și miză)
                                const gameInfoElements = document.querySelectorAll('.game-info');
                                gameInfoElements.forEach(element => {
                                    element.classList.add('visible');
                                });
                            }, 500);
                        }, 2000);
                    }, lastLetterDelay + 5000); // 5 secunde după ce s-a terminat animația cu literele

                }, 2000); // Așteaptă 2s după transformarea L->I (dublat)

            }, 3000); // 3s după ce logo-ul este vizibil
        }, 1000); // Delay inițial dublat pentru efect
    }

    // Pornește animația
    startIntroAnimation();
});