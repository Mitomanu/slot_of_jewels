document.addEventListener('DOMContentLoaded', () => {
    // Referințe la elementele DOM
    const infoButton = document.getElementById('info-button');
    let infoOverlay = null;
    let closeButton = null;

    // Funcție pentru inițializarea ecranului de informații
    function initializeInfoScreen() {
        // Verifică dacă overlay-ul există deja
        if (document.querySelector('.info-overlay')) {
            return;
        }

        // Creează overlay-ul pentru informații
        infoOverlay = document.createElement('div');
        infoOverlay.className = 'info-overlay';
        document.body.appendChild(infoOverlay);

        // Creează containerul pentru informații
        const infoContainer = document.createElement('div');
        infoContainer.className = 'info-container';
        infoOverlay.appendChild(infoContainer);

        // Creează butonul de închidere
        closeButton = document.createElement('img');
        closeButton.src = 'buttons/close.png';
        closeButton.alt = 'Închide';
        closeButton.className = 'close-button';
        infoContainer.appendChild(closeButton);

        // Creează un container pentru conținut
        const infoContent = document.createElement('div');
        infoContent.className = 'info-content';
        infoContainer.appendChild(infoContent);

        // Creează prima pagină de informații
        const infoPage1 = document.createElement('div');
        infoPage1.className = 'info-page active';
        infoContent.appendChild(infoPage1);
        
        // Adaugă titlul INFORMAȚII JOC pe prima pagină
        const infoTitle1 = document.createElement('div');
        infoTitle1.className = 'info-title';
        infoTitle1.textContent = 'INFORMAȚII JOC';
        infoPage1.appendChild(infoTitle1);

        // Creează rândul pentru simboluri
        const symbolsRow = document.createElement('div');
        symbolsRow.className = 'symbols-row';
        infoPage1.appendChild(symbolsRow);

        // Creează un container pentru simboluri pentru a le distribui uniform
        const symbolsContainer = document.createElement('div');
        symbolsContainer.className = 'symbols-container';
        symbolsRow.appendChild(symbolsContainer);

        // Adaugă cele patru simboluri
        const symbols = ['rubin', 'cristal', 'safir', 'round_diamond'];
        symbols.forEach(symbol => {
            const img = document.createElement('img');
            img.src = `jewels/${symbol}.png`;
            img.alt = symbol;
            img.className = 'jewel-symbol';
            symbolsContainer.appendChild(img);
        });

        // Adaugă primul text multiplicator
        const multiplierText1 = document.createElement('div');
        multiplierText1.className = 'multiplier-text-1';
        multiplierText1.textContent = '12 - 30  x100';
        infoPage1.appendChild(multiplierText1);

        // Adaugă al doilea text multiplicator
        const multiplierText2 = document.createElement('div');
        multiplierText2.className = 'multiplier-text-2';
        multiplierText2.textContent = '12 - 30 x25';
        infoPage1.appendChild(multiplierText2);

        // Adaugă al treilea text multiplicator
        const multiplierText3 = document.createElement('div');
        multiplierText3.className = 'multiplier-text-3';
        multiplierText3.textContent = '12 - 30 x15';
        infoContent.appendChild(multiplierText3);

        // Adaugă al patrulea text multiplicator
        const multiplierText4 = document.createElement('div');
        multiplierText4.className = 'multiplier-text-4';
        multiplierText4.textContent = '12 - 30 x12';
        infoContent.appendChild(multiplierText4);

        // Adaugă al cincilea text multiplicator
        const multiplierText5 = document.createElement('div');
        multiplierText5.className = 'multiplier-text-5';
        multiplierText5.textContent = '10 - 11  x  25';
        infoContent.appendChild(multiplierText5);

        // Adaugă al șaselea text multiplicator
        const multiplierText6 = document.createElement('div');
        multiplierText6.className = 'multiplier-text-6';
        multiplierText6.textContent = '10 - 11  x  10';
        infoContent.appendChild(multiplierText6);

        // Adaugă al șaptelea text multiplicator
        const multiplierText7 = document.createElement('div');
        multiplierText7.className = 'multiplier-text-7';
        multiplierText7.textContent = '10 - 11  x  5';
        infoContent.appendChild(multiplierText7);

        // Adaugă al optulea text multiplicator
        const multiplierText8 = document.createElement('div');
        multiplierText8.className = 'multiplier-text-8';
        multiplierText8.textContent = '10 - 11  x  2';
        infoContent.appendChild(multiplierText8);

        // Adaugă al nouălea text multiplicator
        const multiplierText9 = document.createElement('div');
        multiplierText9.className = 'multiplier-text-9';
        multiplierText9.textContent = '8 - 9  x  10';
        infoContent.appendChild(multiplierText9);

        // Adaugă al zecelea text multiplicator
        const multiplierText10 = document.createElement('div');
        multiplierText10.className = 'multiplier-text-10';
        multiplierText10.textContent = '8 - 9  x  2.5';
        infoContent.appendChild(multiplierText10);

        // Adaugă al 11-lea text multiplicator
        const multiplierText11 = document.createElement('div');
        multiplierText11.className = 'multiplier-text-11';
        multiplierText11.textContent = '8 - 9  x  2';
        infoContent.appendChild(multiplierText11);

        // Adaugă al 12-lea text multiplicator
        const multiplierText12 = document.createElement('div');
        multiplierText12.className = 'multiplier-text-12';
        multiplierText12.textContent = '8 - 9  x  1.5';
        infoContent.appendChild(multiplierText12);

        // Creează al doilea rând pentru simboluri
        const symbolsRow2 = document.createElement('div');
        symbolsRow2.className = 'symbols-row-2';
        infoPage1.appendChild(symbolsRow2);

        // Creează un container pentru simbolurile din al doilea rând
        const symbolsContainer2 = document.createElement('div');
        symbolsContainer2.className = 'symbols-container-2';
        symbolsRow2.appendChild(symbolsContainer2);

        // Adaugă cele cinci simboluri în al doilea rând
        const symbols2 = ['piatra', 'topaz', 'ametist', 'gemstone', 'diamant'];
        symbols2.forEach(symbol => {
            const img = document.createElement('img');
            img.src = `jewels/${symbol}.png`;
            img.alt = symbol;
            img.className = 'jewel-symbol';
            symbolsContainer2.appendChild(img);
        });

        // Adaugă al 13-lea text multiplicator
        const multiplierText13 = document.createElement('div');
        multiplierText13.className = 'multiplier-text-13';
        multiplierText13.textContent = '12 - 30 x 10';
        infoContent.appendChild(multiplierText13);

        // Adaugă simbolul scatter
        const scatterSymbol = document.createElement('img');
        scatterSymbol.src = 'jewels/scatter.png';
        scatterSymbol.alt = 'scatter';
        scatterSymbol.className = 'scatter-symbol';
        infoPage1.appendChild(scatterSymbol);



        // Adaugă al 14-lea text multiplicator
        const multiplierText14 = document.createElement('div');
        multiplierText14.className = 'multiplier-text-14';
        multiplierText14.textContent = '12 - 30 x 8';
        infoContent.appendChild(multiplierText14);

        //Adaugă al 15-lea text multiplicator
        const multiplierText15 = document.createElement('div');
        multiplierText15.className = 'multiplier-text-15';
        multiplierText15.textContent = '12 - 30 x 5';
        infoContent.appendChild(multiplierText15);

        //Adaugă al 16-lea text multiplicator
        const multiplierText16 = document.createElement('div');
        multiplierText16.className = 'multiplier-text-16';
        multiplierText16.textContent = '12 - 30 x 4';
        infoContent.appendChild(multiplierText16);

        //Adaugă al 17-lea text multiplicator
        const multiplierText17 = document.createElement('div');
        multiplierText17.className = 'multiplier-text-17';
        multiplierText17.textContent = '12 - 30 x 2';
        infoContent.appendChild(multiplierText17);

        //Adaugă al 18-lea text multiplicator
        const multiplierText18 = document.createElement('div');
        multiplierText18.className = 'multiplier-text-18';
        multiplierText18.textContent = '10 - 11 x 1.5';
        infoContent.appendChild(multiplierText18);

        //Adaugă al 19-lea text multiplicator
        const multiplierText19 = document.createElement('div');
        multiplierText19.className = 'multiplier-text-19';
        multiplierText19.textContent = '10 - 11 x 1.2';
        infoContent.appendChild(multiplierText19);

        //Adaugă al 20-lea text multiplicator
        const multiplierText20 = document.createElement('div');
        multiplierText20.className = 'multiplier-text-20';
        multiplierText20.textContent = '10 - 11 x 1';
        infoContent.appendChild(multiplierText20);

        //Adaugă al 21-lea text multiplicator
        const multiplierText21 = document.createElement('div');
        multiplierText21.className = 'multiplier-text-21';
        multiplierText21.textContent = '10 - 11 x 0.9';
        infoContent.appendChild(multiplierText21);

        //Adaugă al 22-lea text multiplicator
        const multiplierText22 = document.createElement('div');
        multiplierText22.className = 'multiplier-text-22';
        multiplierText22.textContent = '10 - 11 x 0.75';
        infoContent.appendChild(multiplierText22);

        //Adaugă al 23-lea text multiplicator
        const multiplierText23 = document.createElement('div');
        multiplierText23.className = 'multiplier-text-23';
        multiplierText23.textContent = '8 - 9 x 1';
        infoContent.appendChild(multiplierText23);

        //Adaugă al 24-lea text multiplicator
        const multiplierText24 = document.createElement('div');
        multiplierText24.className = 'multiplier-text-24';
        multiplierText24.textContent = '8 - 9 x 0.8';
        infoContent.appendChild(multiplierText24);

        //Adaugă al 25-lea text multiplicator
        const multiplierText25 = document.createElement('div');
        multiplierText25.className = 'multiplier-text-25';
        multiplierText25.textContent = '8 - 9 x 0.5';
        infoContent.appendChild(multiplierText25);

        //Adaugă al 26-lea text multiplicator
        const multiplierText26 = document.createElement('div');
        multiplierText26.className = 'multiplier-text-26';
        multiplierText26.textContent = '8 - 9 x 0.4';
        infoContent.appendChild(multiplierText26);

        //Adaugă al 27-lea text multiplicator
        const multiplierText27 = document.createElement('div');
        multiplierText27.className = 'multiplier-text-27';
        multiplierText27.textContent = '8 - 9 x 0.25';
        infoContent.appendChild(multiplierText27);

        //Adaugă valorile câștigurilor pentru scatter
        const multiplierText28 = document.createElement('div');
        multiplierText28.className = 'multiplier-text-28';
        multiplierText28.textContent = '6 x 100';
        infoContent.appendChild(multiplierText28);

        //Adaugă valorile câștigurilor pentru scatter
        const multiplierText29 = document.createElement('div');
        multiplierText29.className = 'multiplier-text-29';
        multiplierText29.textContent = '5 x 5';
        infoContent.appendChild(multiplierText29);

        //Adaugă valorile câștigurilor pentru scatter
        const multiplierText30 = document.createElement('div');
        multiplierText30.className = 'multiplier-text-30';
        multiplierText30.textContent = '4 x 3';
        infoContent.appendChild(multiplierText30);

        // Adaugă săgeata dreapta
        const rightArrow = document.createElement('img');
        rightArrow.src = 'buttons/right-arrow.png';
        rightArrow.alt = 'Pagina următoare';
        rightArrow.className = 'right-arrow';
        infoContent.appendChild(rightArrow);

        // Adaugă event listener pentru butonul de închidere
        closeButton.addEventListener('click', hideInfoScreen);

        // Previne propagarea click-urilor din interiorul containerului
        infoContainer.addEventListener('click', (event) => {
            event.stopPropagation();
        });
    }

    // Funcție pentru afișarea ecranului de informații
    function showInfoScreen() {
        // Inițializează ecranul de informații dacă nu există
        if (!infoOverlay) {
            initializeInfoScreen();
        }

        // Afișează overlay-ul
        infoOverlay.classList.add('visible');
    }

    // Funcție pentru ascunderea ecranului de informații
    function hideInfoScreen() {
        if (infoOverlay) {
            infoOverlay.classList.remove('visible');
        }
    }

    // Adaugă event listener pentru butonul de informații cu prevenirea comportamentului browser-ului
    if (infoButton) {
        // Adaugă listeners pentru mousedown și touchstart în loc de click
        infoButton.addEventListener('mousedown', function(event) {
            event.preventDefault();
            event.stopPropagation();
            showInfoScreen();
            return false;
        });

        infoButton.addEventListener('touchstart', function(event) {
            event.preventDefault();
            event.stopPropagation();
            showInfoScreen();
            return false;
        });

        // Previne orice alte comportamente implicite
        infoButton.addEventListener('contextmenu', function(event) {
            event.preventDefault();
            return false;
        });

        // Opțional, adaugă și event listener de click pentru compatibilitate
        infoButton.addEventListener('click', function(event) {
            event.preventDefault();
            event.stopPropagation();
            return false;
        });
    }
});