// Variabile pentru credit și bet
let gameCredit = 0;
let gameBet = 0;
let introCompleted = false; // Variabilă pentru a ști dacă intro-ul s-a terminat

// Variabile folosite doar în acest fișier pentru acum

// Referințe la elemente DOM
const creditDisplay = document.getElementById('credit-value');
const betDisplay = document.getElementById('bet-value');
const creditMessage = document.getElementById('credit-message');
const betMessage = document.getElementById('bet-message');

// Sunete
const cashInsertSound = new Audio('sounds/cash_insert.mp3');
const betSound = new Audio('sounds/bet.mp3');

// Funcție pentru actualizarea display-ului
function updateDisplay() {
    creditDisplay.textContent = gameCredit;
    betDisplay.textContent = gameBet;
}

// Funcție pentru verificarea și afișarea mesajelor
function checkAndShowMessages() {
    // Verifică mesajele NUMAI după ce intro-ul s-a terminat
    if (!introCompleted) {
        return;
    }
    
    // Verifică mesajul pentru credit
    if (gameCredit === 0) {
        creditMessage.classList.add('visible');
    } else {
        creditMessage.classList.remove('visible');
    }
    
    // Verifică mesajul pentru bet
    if ((gameBet === 0 && gameCredit > 0) || (gameBet > gameCredit)) {
        betMessage.classList.add('visible');
    } else {
        betMessage.classList.remove('visible');
    }
}

// Această funcție va fi utilizată doar intern în joc

// Funcție pentru adăugarea creditului
function addCredit() {
    if (gameCredit < 10000) {
        gameCredit += 1000;
        if (gameCredit > 10000) {
            gameCredit = 10000;
        }
        updateDisplay();
        checkAndShowMessages();
        
        // Redă sunetul de inserare credit
        cashInsertSound.play().catch(e => {
            console.log('Nu s-a putut reda sunetul cash_insert.mp3:', e);
        });
    }
}

// Exportăm funcția pentru a o face disponibilă în engine.js
window.addCredit = addCredit;

// Funcție pentru modificarea bet-ului
function modifyBet() {
    if (gameCredit > 0) {
        if (gameBet < 10) {
            gameBet += 1;
        } else if (gameBet < 50) {
            gameBet += 5;
        }
        
        // Dacă bet-ul depășește creditul, îl resetează la 0
        if (gameBet > gameCredit) {
            gameBet = 0;
        }
        
        updateDisplay();
        checkAndShowMessages();
        
        // Redă sunetul de bet
        betSound.play().catch(e => {
            console.log('Nu s-a putut reda sunetul bet.mp3:', e);
        });
    }
}

// Exportăm funcția pentru a o face disponibilă în engine.js
window.modifyBet = modifyBet;

// Vom implementa scăderea și creșterea creditului direct în butonul de spin
// când vom dezvolta funcționalitatea completă a jocului

// Funcție care se apelează când intro-ul se termină
function onIntroCompleted() {
    introCompleted = true;
    checkAndShowMessages();
}

// Event listener pentru tastele C și B
document.addEventListener('keydown', function(event) {
    const key = event.key.toLowerCase();
    
    if (key === 'c') {
        addCredit();
    } else if (key === 'b') {
        modifyBet();
    }
});

// Inițializarea jocului
function initializeGame() {
    updateDisplay();
    // Nu se afișează mesajele până când intro-ul nu se termină
}

// Pornește jocul când se încarcă pagina
document.addEventListener('DOMContentLoaded', function() {
    initializeGame();
});