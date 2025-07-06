document.addEventListener('DOMContentLoaded', () => {
    // Referințe la elementele DOM
    const infoButton = document.getElementById('info-button');
    let infoOverlay = null;
    let closeButton = null;

    // Funcție pentru inițializarea ecranului de informații
    function initializeInfoScreen() {
        // Verifică dacă overlay-ul există deja
        if (document.querySelector('.info-overlay')) {
            // Dacă există deja, doar îl facem vizibil
            const existingOverlay = document.querySelector('.info-overlay');
            existingOverlay.classList.add('visible');
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

        // Creează a doua pagină de informații
        const infoPage2 = document.createElement('div');
        infoPage2.className = 'info-page inactive-right';
        infoContent.appendChild(infoPage2);

        // Creează a treia pagină de informații
        const infoPage3 = document.createElement('div');
        infoPage3.className = 'info-page inactive-right';
        infoContent.appendChild(infoPage3);

        // Adaugă titlul INFORMAȚII JOC pe a treia pagină
        const infoTitle3 = document.createElement('div');
        infoTitle3.className = 'info-title';
        infoTitle3.textContent = 'INFORMAȚII JOC';
        infoPage3.appendChild(infoTitle3);

        // Adaugă săgeata stânga pe a treia pagină
        const leftArrow3 = document.createElement('img');
        leftArrow3.src = 'buttons/left-arrow.png';
        leftArrow3.alt = 'Pagina anterioară';
        leftArrow3.className = 'left-arrow';
        infoPage3.appendChild(leftArrow3);

        // Adaugă informațiile despre credit
        const creditInfo = document.createElement('div');
        creditInfo.className = 'game-rule';
        creditInfo.style.marginTop = '30px';
        creditInfo.textContent = 'Pentru a introduce CREDIT, apăsați tasta \'C\'. Creditul maxim ce poate fi introdus este de 10000';
        infoPage3.appendChild(creditInfo);

        // Adaugă informațiile despre miză
        const betInfo = document.createElement('div');
        betInfo.className = 'game-rule';
        betInfo.style.marginTop = '20px';
        betInfo.textContent = 'Pentru a modifica MIZA, apăsați pe tasta \'B\'. Miza maximă este 50.';
        infoPage3.appendChild(betInfo);

        // Adaugă informațiile despre rotire
        const spinInfo = document.createElement('div');
        spinInfo.className = 'game-rule';
        spinInfo.style.marginTop = '30px';
        infoPage3.appendChild(spinInfo);

        // Prima parte a textului pentru rotire
        const spinText = document.createTextNode('Pentru rotire apăsați simbolul ');
        spinInfo.appendChild(spinText);

        // Adaugă simbolul spin_button
        const spinButtonIcon = document.createElement('img');
        spinButtonIcon.src = 'buttons/spin_button.png';
        spinButtonIcon.alt = 'spin';
        spinButtonIcon.className = 'spin-icon';
        spinInfo.appendChild(spinButtonIcon);

        // Adaugă informațiile despre fullscreen
        const fullscreenInfo = document.createElement('div');
        fullscreenInfo.className = 'game-rule';
        fullscreenInfo.style.marginTop = '10px';
        infoPage3.appendChild(fullscreenInfo);

        // Prima parte a textului pentru fullscreen
        const fullscreenText1 = document.createTextNode('Pentru fullscreen, apăsați simbolul ');
        fullscreenInfo.appendChild(fullscreenText1);

        // Adaugă simbolul fullscreen
        const fullscreenIcon = document.createElement('img');
        fullscreenIcon.src = 'buttons/fullscreen.png';
        fullscreenIcon.alt = 'fullscreen';
        fullscreenIcon.className = 'spin-icon';
        fullscreenInfo.appendChild(fullscreenIcon);

        // A doua parte a textului pentru fullscreen
        const fullscreenText2 = document.createTextNode(' iar pentru revenire apăsați simbolul ');
        fullscreenInfo.appendChild(fullscreenText2);

        // Adaugă simbolul exit_fullscreen
        const exitFullscreenIcon = document.createElement('img');
        exitFullscreenIcon.src = 'buttons/exit_fullscreen.png';
        exitFullscreenIcon.alt = 'exit fullscreen';
        exitFullscreenIcon.className = 'spin-icon';
        fullscreenInfo.appendChild(exitFullscreenIcon);

        // Adaugă informațiile despre info
        const infoButtonInfo = document.createElement('div');
        infoButtonInfo.className = 'game-rule';
        infoButtonInfo.style.marginTop = '10px';
        infoPage3.appendChild(infoButtonInfo);

        // Prima parte a textului pentru info
        const infoText1 = document.createTextNode('Pentru a ajunge aici, apăsați pe ');
        infoButtonInfo.appendChild(infoText1);

        // Adaugă simbolul info
        const infoIcon = document.createElement('img');
        infoIcon.src = 'buttons/info.png';
        infoIcon.alt = 'info';
        infoIcon.className = 'spin-icon';
        infoButtonInfo.appendChild(infoIcon);

        // A doua parte a textului pentru info
        const infoText2 = document.createTextNode(' iar pentru închidere apăsați pe ');
        infoButtonInfo.appendChild(infoText2);

        // Adaugă simbolul close
        const closeIcon = document.createElement('img');
        closeIcon.src = 'buttons/close.png';
        closeIcon.alt = 'close';
        closeIcon.className = 'spin-icon';
        infoButtonInfo.appendChild(closeIcon);

        // Adaugă informațiile despre navigare
        const navigationInfo = document.createElement('div');
        navigationInfo.className = 'game-rule';
        navigationInfo.style.marginTop = '10px';
        infoPage3.appendChild(navigationInfo);

        // Prima parte a textului pentru navigare
        const navText1 = document.createTextNode('Pentru navigarea între pagini, apăsați simbolul ');
        navigationInfo.appendChild(navText1);

        // Adaugă simbolul left-arrow
        const leftArrowIcon = document.createElement('img');
        leftArrowIcon.src = 'buttons/left-arrow.png';
        leftArrowIcon.alt = 'previous page';
        leftArrowIcon.className = 'spin-icon';
        navigationInfo.appendChild(leftArrowIcon);

        // A doua parte a textului pentru navigare
        const navText2 = document.createTextNode(' sau ');
        navigationInfo.appendChild(navText2);

        // Adaugă simbolul right-arrow
        const rightArrowIcon = document.createElement('img');
        rightArrowIcon.src = 'buttons/right-arrow.png';
        rightArrowIcon.alt = 'next page';
        rightArrowIcon.className = 'spin-icon';
        navigationInfo.appendChild(rightArrowIcon);

        // Punct final
        const navText3 = document.createTextNode('.');
        navigationInfo.appendChild(navText3);
        
        // Adaugă titlul INFORMAȚII JOC pe prima pagină
        const infoTitle1 = document.createElement('div');
        infoTitle1.className = 'info-title';
        infoTitle1.textContent = 'INFORMAȚII JOC';
        infoPage1.appendChild(infoTitle1);

        // Adăugăm informație despre variabila pentru a păstra referința la pagina activă
        let currentPage = infoPage1;

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
        infoPage1.appendChild(multiplierText3);

        // Adaugă al patrulea text multiplicator
        const multiplierText4 = document.createElement('div');
        multiplierText4.className = 'multiplier-text-4';
        multiplierText4.textContent = '12 - 30 x12';
        infoPage1.appendChild(multiplierText4);

        // Adaugă al cincilea text multiplicator
        const multiplierText5 = document.createElement('div');
        multiplierText5.className = 'multiplier-text-5';
        multiplierText5.textContent = '10 - 11  x  25';
        infoPage1.appendChild(multiplierText5);

        // Adaugă al șaselea text multiplicator
        const multiplierText6 = document.createElement('div');
        multiplierText6.className = 'multiplier-text-6';
        multiplierText6.textContent = '10 - 11  x  10';
        infoPage1.appendChild(multiplierText6);

        // Adaugă al șaptelea text multiplicator
        const multiplierText7 = document.createElement('div');
        multiplierText7.className = 'multiplier-text-7';
        multiplierText7.textContent = '10 - 11  x  5';
        infoPage1.appendChild(multiplierText7);

        // Adaugă al optulea text multiplicator
        const multiplierText8 = document.createElement('div');
        multiplierText8.className = 'multiplier-text-8';
        multiplierText8.textContent = '10 - 11  x  2';
        infoPage1.appendChild(multiplierText8);

        // Adaugă al nouălea text multiplicator
        const multiplierText9 = document.createElement('div');
        multiplierText9.className = 'multiplier-text-9';
        multiplierText9.textContent = '8 - 9  x  10';
        infoPage1.appendChild(multiplierText9);

        // Adaugă al zecelea text multiplicator
        const multiplierText10 = document.createElement('div');
        multiplierText10.className = 'multiplier-text-10';
        multiplierText10.textContent = '8 - 9  x  2.5';
        infoPage1.appendChild(multiplierText10);

        // Adaugă al 11-lea text multiplicator
        const multiplierText11 = document.createElement('div');
        multiplierText11.className = 'multiplier-text-11';
        multiplierText11.textContent = '8 - 9  x  2';
        infoPage1.appendChild(multiplierText11);

        // Adaugă al 12-lea text multiplicator
        const multiplierText12 = document.createElement('div');
        multiplierText12.className = 'multiplier-text-12';
        multiplierText12.textContent = '8 - 9  x  1.5';
        infoPage1.appendChild(multiplierText12);

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

        // Adaugă al 13-lea text multiplicator pentru al doilea rând de simboluri
        const multiplierText13 = document.createElement('div');
        multiplierText13.className = 'multiplier-text-13';
        multiplierText13.textContent = '12 - 30 x 10';
        infoPage1.appendChild(multiplierText13);

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
        infoPage1.appendChild(multiplierText14);

        //Adaugă al 15-lea text multiplicator
        const multiplierText15 = document.createElement('div');
        multiplierText15.className = 'multiplier-text-15';
        multiplierText15.textContent = '12 - 30 x 5';
        infoPage1.appendChild(multiplierText15);

        //Adaugă al 16-lea text multiplicator
        const multiplierText16 = document.createElement('div');
        multiplierText16.className = 'multiplier-text-16';
        multiplierText16.textContent = '12 - 30 x 4';
        infoPage1.appendChild(multiplierText16);

        //Adaugă al 17-lea text multiplicator
        const multiplierText17 = document.createElement('div');
        multiplierText17.className = 'multiplier-text-17';
        multiplierText17.textContent = '12 - 30 x 2';
        infoPage1.appendChild(multiplierText17);

        //Adaugă al 18-lea text multiplicator
        const multiplierText18 = document.createElement('div');
        multiplierText18.className = 'multiplier-text-18';
        multiplierText18.textContent = '10 - 11 x 1.5';
        infoPage1.appendChild(multiplierText18);

        //Adaugă al 19-lea text multiplicator
        const multiplierText19 = document.createElement('div');
        multiplierText19.className = 'multiplier-text-19';
        multiplierText19.textContent = '10 - 11 x 1.2';
        infoPage1.appendChild(multiplierText19);

        //Adaugă al 20-lea text multiplicator
        const multiplierText20 = document.createElement('div');
        multiplierText20.className = 'multiplier-text-20';
        multiplierText20.textContent = '10 - 11 x 1';
        infoPage1.appendChild(multiplierText20);

        //Adaugă al 21-lea text multiplicator
        const multiplierText21 = document.createElement('div');
        multiplierText21.className = 'multiplier-text-21';
        multiplierText21.textContent = '10 - 11 x 0.9';
        infoPage1.appendChild(multiplierText21);

        //Adaugă al 22-lea text multiplicator
        const multiplierText22 = document.createElement('div');
        multiplierText22.className = 'multiplier-text-22';
        multiplierText22.textContent = '10 - 11 x 0.75';
        infoPage1.appendChild(multiplierText22);

        //Adaugă al 23-lea text multiplicator
        const multiplierText23 = document.createElement('div');
        multiplierText23.className = 'multiplier-text-23';
        multiplierText23.textContent = '8 - 9 x 1';
        infoPage1.appendChild(multiplierText23);

        //Adaugă al 24-lea text multiplicator
        const multiplierText24 = document.createElement('div');
        multiplierText24.className = 'multiplier-text-24';
        multiplierText24.textContent = '8 - 9 x 0.8';
        infoPage1.appendChild(multiplierText24);

        //Adaugă al 25-lea text multiplicator
        const multiplierText25 = document.createElement('div');
        multiplierText25.className = 'multiplier-text-25';
        multiplierText25.textContent = '8 - 9 x 0.5';
        infoPage1.appendChild(multiplierText25);

        //Adaugă al 26-lea text multiplicator
        const multiplierText26 = document.createElement('div');
        multiplierText26.className = 'multiplier-text-26';
        multiplierText26.textContent = '8 - 9 x 0.4';
        infoPage1.appendChild(multiplierText26);

        //Adaugă al 27-lea text multiplicator
        const multiplierText27 = document.createElement('div');
        multiplierText27.className = 'multiplier-text-27';
        multiplierText27.textContent = '8 - 9 x 0.25';
        infoPage1.appendChild(multiplierText27);

        //Adaugă valorile câștigurilor pentru scatter
        const multiplierText28 = document.createElement('div');
        multiplierText28.className = 'multiplier-text-28';
        multiplierText28.textContent = '6 x 100';
        infoPage1.appendChild(multiplierText28);

        //Adaugă valorile câștigurilor pentru scatter
        const multiplierText29 = document.createElement('div');
        multiplierText29.className = 'multiplier-text-29';
        multiplierText29.textContent = '5 x 5';
        infoPage1.appendChild(multiplierText29);

        //Adaugă valorile câștigurilor pentru scatter
        const multiplierText30 = document.createElement('div');
        multiplierText30.className = 'multiplier-text-30';
        multiplierText30.textContent = '4 x 3';
        infoPage1.appendChild(multiplierText30);


        // Adaugă săgeata dreapta pe prima pagină
        const rightArrow = document.createElement('img');
        rightArrow.src = 'buttons/right-arrow.png';
        rightArrow.alt = 'Pagina următoare';
        rightArrow.className = 'right-arrow';
        infoPage1.appendChild(rightArrow);

        // Adaugă titlul INFORMAȚII JOC pe a doua pagină
        const infoTitle2 = document.createElement('div');
        infoTitle2.className = 'info-title';
        infoTitle2.textContent = 'INFORMAȚII JOC';
        infoPage2.appendChild(infoTitle2);

        // Adaugă textul descrierii jocului cu gradient
        const gameDescription = document.createElement('div');
        gameDescription.className = 'game-description';
        infoPage2.appendChild(gameDescription);

        // Adaugă textul cu gradient
        const gradientText = document.createElement('div');
        gradientText.className = 'gradient-text';
        gradientText.textContent = 'SLOT OF JEWELS ';
        gameDescription.appendChild(gradientText);

        // Adaugă textul alb
        const whiteText = document.createElement('div');
        whiteText.className = 'white-text';
        whiteText.textContent = 'este un slot cu 6 role a câte 5 simboluri reprezentate prin simboluri giuvaier.';
        gameDescription.appendChild(whiteText);

        // Adaugă titlul REGULA JOCULUI
        const gameRuleTitle = document.createElement('div');
        gameRuleTitle.className = 'game-rule-title';
        gameRuleTitle.textContent = 'REGULA JOCULUI';
        infoPage2.appendChild(gameRuleTitle);

        // Adaugă prima regulă a jocului
        const gameRule1 = document.createElement('div');
        gameRule1.className = 'game-rule';
        infoPage2.appendChild(gameRule1);

        // Prima parte a textului regulii
        const ruleText1 = document.createTextNode('La apăsarea simbolului ');
        gameRule1.appendChild(ruleText1);

        // Adaugă iconița de rotire
        const spinIcon = document.createElement('img');
        spinIcon.src = 'buttons/spin_button.png';
        spinIcon.alt = 'rotire';
        spinIcon.className = 'spin-icon';
        gameRule1.appendChild(spinIcon);

        // A doua parte a textului regulii
        const ruleText2 = document.createTextNode(' rolele se golesc de simboluri, în locul lor apărând alte simboluri. Dacă pe role apar minimum 8 simboluri de același fel, atunci avem un câștig, iar acele simboluri vor dispărea, iar în locul lor vor cădea cele de deasupra, iar locurile rămase libere, vor fi populate cu alte simboluri. Se va continua până când nu mai există nicio variantă câștigătoare.');
        gameRule1.appendChild(ruleText2);

        // Adaugă a doua regulă a jocului
        const gameRule2 = document.createElement('div');
        gameRule2.className = 'game-rule';
        gameRule2.textContent = 'Dacă într-o rotire, se câștigă consecutiv de 3 ori, atunci de la al 4-lea câștig, se va acorda un multiplicator. Astfel de la al 4-lea câștig se va acorda un multiplicator de câștig +1 pentru fiecare câștig. Când nu mai există câștig, valoarea multiplicatorului se resetează la zero.';
        infoPage2.appendChild(gameRule2);

        // Adaugă titlul FREE SPIN
        const freeSpinTitle = document.createElement('div');
        freeSpinTitle.className = 'game-rule-title';
        freeSpinTitle.textContent = 'FREE SPIN';
        freeSpinTitle.style.marginTop = '30px';
        infoPage2.appendChild(freeSpinTitle);

        // Adaugă regula pentru Free Spin
        const freeSpinRule = document.createElement('div');
        freeSpinRule.className = 'game-rule';
        infoPage2.appendChild(freeSpinRule);

        // Prima parte a textului pentru Free Spin
        const freeSpinText1 = document.createTextNode('Când minimum 4 simboluri ');
        freeSpinRule.appendChild(freeSpinText1);

        // Adaugă simbolul scatter
        const scatterIcon = document.createElement('img');
        scatterIcon.src = 'jewels/scatter.png';
        scatterIcon.alt = 'scatter';
        scatterIcon.className = 'spin-icon';
        scatterIcon.style.width = '24px';
        scatterIcon.style.height = '24px';
        freeSpinRule.appendChild(scatterIcon);

        // A doua parte a textului pentru Free Spin
        const freeSpinText2 = document.createTextNode(' apar pe role, se vor declanșa 10 rotiri gratuite, în care la fiecare câștig se va adăuga un multiplicator. Acești multiplicatori vor rămâne activi până la finalul rotirilor.');
        freeSpinRule.appendChild(freeSpinText2);

        // Adaugă săgeata dreapta pe a doua pagină
        const rightArrow2 = document.createElement('img');
        rightArrow2.src = 'buttons/right-arrow.png';
        rightArrow2.alt = 'Pagina următoare';
        rightArrow2.className = 'right-arrow';
        infoPage2.appendChild(rightArrow2);

        // Adaugă săgeata stânga pe a doua pagină
        const leftArrow = document.createElement('img');
        leftArrow.src = 'buttons/left-arrow.png';
        leftArrow.alt = 'Pagina anterioară';
        leftArrow.className = 'left-arrow';
        infoPage2.appendChild(leftArrow);

        // Adaugă funcționalitatea de navigare între pagini
        rightArrow.addEventListener('click', () => {
            infoPage1.classList.remove('active');
            infoPage1.classList.add('inactive-left');
            infoPage2.classList.remove('inactive-right');
            infoPage2.classList.add('active');
        });

        leftArrow.addEventListener('click', () => {
            infoPage2.classList.remove('active');
            infoPage2.classList.add('inactive-right');
            infoPage1.classList.remove('inactive-left');
            infoPage1.classList.add('active');
        });

        // Adaugă funcționalitatea pentru trecerea de la pagina 2 la pagina 3
        rightArrow2.addEventListener('click', () => {
            infoPage2.classList.remove('active');
            infoPage2.classList.add('inactive-left');
            infoPage3.classList.remove('inactive-right');
            infoPage3.classList.add('active');
        });

        // Adaugă funcționalitatea pentru trecerea de la pagina 3 înapoi la pagina 2
        leftArrow3.addEventListener('click', () => {
            infoPage3.classList.remove('active');
            infoPage3.classList.add('inactive-right');
            infoPage2.classList.remove('inactive-left');
            infoPage2.classList.add('active');
        });

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