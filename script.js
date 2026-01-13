// Game state
let gameState = {
    mode: 'practice',
    timerDuration: 60,
    startYear: 1900,
    endYear: 2099,
    currentDate: null,
    streak: 0,
    totalCorrect: 0,
    bestStreak: 0,
    timerInterval: null,
    timeRemaining: 0,
    isAnswered: false
};

// DOM elements
const settingsPanel = document.getElementById('settingsPanel');
const gamePanel = document.getElementById('gamePanel');
const resultsPanel = document.getElementById('resultsPanel');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const backToSettingsBtn = document.getElementById('backToSettings');
const dateQuestion = document.getElementById('dateQuestion');
const feedback = document.getElementById('feedback');
const streakDisplay = document.getElementById('streak');
const totalCorrectDisplay = document.getElementById('totalCorrect');
const timerDisplay = document.getElementById('timerDisplay');
const timeRemainingDisplay = document.getElementById('timeRemaining');
const startYearInput = document.getElementById('startYear');
const endYearInput = document.getElementById('endYear');
const timerSettings = document.getElementById('timerSettings');
const finalCorrect = document.getElementById('finalCorrect');
const finalStreak = document.getElementById('finalStreak');

// Mode and timer button handlers
document.querySelectorAll('.mode-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        gameState.mode = btn.dataset.mode;
        
        if (gameState.mode === 'timed') {
            timerSettings.style.display = 'block';
        } else {
            timerSettings.style.display = 'none';
        }
    });
});

document.querySelectorAll('.timer-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.timer-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        gameState.timerDuration = parseInt(btn.dataset.duration);
    });
});

// Day buttons
document.querySelectorAll('.day-btn').forEach(btn => {
    btn.addEventListener('click', () => handleGuess(parseInt(btn.dataset.day), btn));
});

// Generate random date within range
function generateRandomDate() {
    const start = new Date(gameState.startYear, 0, 1);
    const end = new Date(gameState.endYear, 11, 31);
    const randomTime = start.getTime() + Math.random() * (end.getTime() - start.getTime());
    return new Date(randomTime);
}

// Format date for display
function formatDate(date) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                   'July', 'August', 'September', 'October', 'November', 'December'];
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}

// Get day name
function getDayName(dayIndex) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[dayIndex];
}

// Generate new question
function generateNewQuestion() {
    gameState.currentDate = generateRandomDate();
    gameState.isAnswered = false;
    dateQuestion.textContent = formatDate(gameState.currentDate);
    feedback.textContent = '';
    feedback.className = 'feedback';
    
    // Reset button states
    document.querySelectorAll('.day-btn').forEach(btn => {
        btn.classList.remove('correct', 'incorrect');
        btn.disabled = false;
    });
}

// Handle user guess
function handleGuess(guessedDay, button) {
    if (gameState.isAnswered) return;
    
    gameState.isAnswered = true;
    const correctDay = gameState.currentDate.getDay();
    
    // Disable all buttons temporarily
    document.querySelectorAll('.day-btn').forEach(btn => {
        btn.disabled = true;
    });
    
    if (guessedDay === correctDay) {
        // Correct answer
        button.classList.add('correct');
        gameState.streak++;
        gameState.totalCorrect++;
        if (gameState.streak > gameState.bestStreak) {
            gameState.bestStreak = gameState.streak;
        }
        feedback.textContent = '✓ Correct!';
        feedback.className = 'feedback correct';
        
        // Auto-advance after short delay
        setTimeout(() => {
            generateNewQuestion();
        }, 800);
    } else {
        // Incorrect answer
        button.classList.add('incorrect');
        
        // Highlight the correct answer
        document.querySelectorAll('.day-btn').forEach(btn => {
            if (parseInt(btn.dataset.day) === correctDay) {
                btn.classList.add('correct');
            }
        });
        
        gameState.streak = 0;
        feedback.textContent = `✗ Incorrect! It was ${getDayName(correctDay)}.`;
        feedback.className = 'feedback incorrect';
        
        // Auto-advance after longer delay to show correct answer
        setTimeout(() => {
            generateNewQuestion();
        }, 1500);
    }
    
    updateStats();
}

// Update statistics display
function updateStats() {
    streakDisplay.textContent = gameState.streak;
    totalCorrectDisplay.textContent = gameState.totalCorrect;
}

// Format time for display
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// Start timer
function startTimer() {
    gameState.timeRemaining = gameState.timerDuration;
    timeRemainingDisplay.textContent = formatTime(gameState.timeRemaining);
    timerDisplay.style.display = 'block';
    
    gameState.timerInterval = setInterval(() => {
        gameState.timeRemaining--;
        timeRemainingDisplay.textContent = formatTime(gameState.timeRemaining);
        
        if (gameState.timeRemaining <= 0) {
            endGame();
        }
    }, 1000);
}

// Stop timer
function stopTimer() {
    if (gameState.timerInterval) {
        clearInterval(gameState.timerInterval);
        gameState.timerInterval = null;
    }
}

// Start game
function startGame() {
    // Validate year inputs
    const startYear = parseInt(startYearInput.value);
    const endYear = parseInt(endYearInput.value);
    
    if (isNaN(startYear) || isNaN(endYear)) {
        alert('Please enter valid years');
        return;
    }
    
    if (startYear >= endYear) {
        alert('Start year must be less than end year');
        return;
    }
    
    gameState.startYear = startYear;
    gameState.endYear = endYear;
    gameState.streak = 0;
    gameState.totalCorrect = 0;
    gameState.bestStreak = 0;
    
    // Hide settings, show game
    settingsPanel.style.display = 'none';
    gamePanel.style.display = 'block';
    resultsPanel.style.display = 'none';
    
    // Start timer if in timed mode
    if (gameState.mode === 'timed') {
        startTimer();
    } else {
        timerDisplay.style.display = 'none';
    }
    
    updateStats();
    generateNewQuestion();
}

// End game
function endGame() {
    stopTimer();
    gamePanel.style.display = 'none';
    resultsPanel.style.display = 'block';
    
    finalCorrect.textContent = gameState.totalCorrect;
    finalStreak.textContent = gameState.bestStreak;
}

// Stop game and return to settings
function stopGame() {
    stopTimer();
    gamePanel.style.display = 'none';
    settingsPanel.style.display = 'block';
}

// Event listeners
startBtn.addEventListener('click', startGame);
stopBtn.addEventListener('click', stopGame);
backToSettingsBtn.addEventListener('click', () => {
    resultsPanel.style.display = 'none';
    settingsPanel.style.display = 'block';
});

// Allow Enter key to start game
startYearInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') startGame();
});

endYearInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') startGame();
});


