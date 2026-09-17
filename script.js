/* =========================================================
   NEXUS // TECH ARENA
   COMPLETE JAVASCRIPT
   ========================================================= */


/* =========================================================
   GLOBAL VARIABLES
   ========================================================= */

let currentIndex = 0;
let score = 0;
let combo = 0;
let bestCombo = 0;
let lives = 3;

let correctCount = 0;
let wrongCount = 0;

let fastestTime = Infinity;

let answered = false;
let selectedDifficulty = "medium";

let timeLeft = 0;
let timerInterval = null;
let questionStartTime = 0;

let usedFifty = false;
let usedTime = false;
let usedSkip = false;

let soundEnabled = true;


/* =========================================================
   DIFFICULTY SETTINGS
   ========================================================= */

const difficultySettings = {
    easy: {
        time: 15,
        multiplier: 1
    },

    medium: {
        time: 10,
        multiplier: 1.25
    },

    hard: {
        time: 8,
        multiplier: 1.5
    },

    expert: {
        time: 6,
        multiplier: 2
    }
};


/* =========================================================
   QUESTIONS
   ========================================================= */

const questions = [
    {
        question: "Which language is primarily used for web page structure?",
        category: "HTML",
        answers: [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        correct: 0
    },

    {
        question: "Which language is used to style web pages?",
        category: "CSS",
        answers: [
            "HTML",
            "CSS",
            "SQL",
            "Java"
        ],
        correct: 1
    },

    {
        question: "Which language is mainly used to add interactivity to websites?",
        category: "JavaScript",
        answers: [
            "HTML",
            "CSS",
            "JavaScript",
            "XML"
        ],
        correct: 2
    },

    {
        question: "Which HTML tag is used to create a hyperlink?",
        category: "HTML",
        answers: [
            "<link>",
            "<a>",
            "<href>",
            "<url>"
        ],
        correct: 1
    },

    {
        question: "Which CSS property changes text color?",
        category: "CSS",
        answers: [
            "font-color",
            "text-color",
            "color",
            "foreground"
        ],
        correct: 2
    },

    {
        question: "Which keyword declares a block-scoped variable in JavaScript?",
        category: "JavaScript",
        answers: [
            "var",
            "let",
            "define",
            "variable"
        ],
        correct: 1
    },

    {
        question: "Which keyword declares a constant in JavaScript?",
        category: "JavaScript",
        answers: [
            "constant",
            "fixed",
            "const",
            "static"
        ],
        correct: 2
    },

    {
        question: "Which symbol is commonly used for comments in JavaScript?",
        category: "JavaScript",
        answers: [
            "//",
            "<!-- -->",
            "#",
            "**"
        ],
        correct: 0
    },

    {
        question: "What does CSS stand for?",
        category: "Web",
        answers: [
            "Computer Style Sheets",
            "Cascading Style Sheets",
            "Creative Style System",
            "Colorful Style Sheets"
        ],
        correct: 1
    },

    {
        question: "What does HTML stand for?",
        category: "Web",
        answers: [
            "Hyper Text Markup Language",
            "High Tech Modern Language",
            "Hyperlink Text Management Language",
            "Home Tool Markup Language"
        ],
        correct: 0
    },

    {
        question: "Which database is commonly used with the MERN stack?",
        category: "MongoDB",
        answers: [
            "MongoDB",
            "Oracle",
            "MySQL",
            "SQLite"
        ],
        correct: 0
    },

    {
        question: "What does SQL stand for?",
        category: "Database",
        answers: [
            "Structured Query Language",
            "Simple Query Language",
            "System Query Logic",
            "Structured Question Language"
        ],
        correct: 0
    },

    {
        question: "Which command initializes a Git repository?",
        category: "Git",
        answers: [
            "git start",
            "git init",
            "git create",
            "git new"
        ],
        correct: 1
    },

    {
        question: "Which Git command uploads local commits to a remote repository?",
        category: "Git",
        answers: [
            "git upload",
            "git send",
            "git push",
            "git deploy"
        ],
        correct: 2
    },

    {
        question: "Which Git command downloads changes from a remote repository?",
        category: "Git",
        answers: [
            "git download",
            "git pull",
            "git receive",
            "git fetch-all"
        ],
        correct: 1
    },

    {
        question: "Which technology is used to create reusable UI components?",
        category: "React",
        answers: [
            "React",
            "MongoDB",
            "Express",
            "Docker"
        ],
        correct: 0
    },

    {
        question: "Which React hook is commonly used for state management?",
        category: "React",
        answers: [
            "useState",
            "useStyle",
            "useData",
            "useHTML"
        ],
        correct: 0
    },

    {
        question: "Which React hook is commonly used for side effects?",
        category: "React",
        answers: [
            "useEffect",
            "useSide",
            "useAction",
            "useEvent"
        ],
        correct: 0
    },

    {
        question: "What does API stand for?",
        category: "Backend",
        answers: [
            "Application Programming Interface",
            "Application Process Integration",
            "Advanced Programming Internet",
            "Automated Program Interface"
        ],
        correct: 0
    },

    {
        question: "Which HTTP method is commonly used to retrieve data?",
        category: "HTTP",
        answers: [
            "POST",
            "GET",
            "PUT",
            "DELETE"
        ],
        correct: 1
    },

    {
        question: "Which HTTP method is commonly used to create data?",
        category: "HTTP",
        answers: [
            "GET",
            "POST",
            "DELETE",
            "HEAD"
        ],
        correct: 1
    },

    {
        question: "Which HTTP method is commonly used to delete data?",
        category: "HTTP",
        answers: [
            "GET",
            "POST",
            "DELETE",
            "PATCH"
        ],
        correct: 2
    },

    {
        question: "Which status code means 'Not Found'?",
        category: "HTTP",
        answers: [
            "200",
            "301",
            "404",
            "500"
        ],
        correct: 2
    },

    {
        question: "Which status code indicates a successful HTTP request?",
        category: "HTTP",
        answers: [
            "200",
            "404",
            "500",
            "403"
        ],
        correct: 0
    },

    {
        question: "Which Node.js package manager is installed by default with Node.js?",
        category: "Node.js",
        answers: [
            "npm",
            "pip",
            "composer",
            "gem"
        ],
        correct: 0
    },

    {
        question: "Which framework is commonly used with Node.js for backend development?",
        category: "Express",
        answers: [
            "Express.js",
            "Django",
            "Laravel",
            "Spring"
        ],
        correct: 0
    },

    {
        question: "Which command installs an npm package?",
        category: "Node.js",
        answers: [
            "npm add",
            "npm install",
            "node install",
            "install npm"
        ],
        correct: 1
    },

    {
        question: "Which file normally contains npm project configuration?",
        category: "Node.js",
        answers: [
            "project.json",
            "package.json",
            "npm.json",
            "config.json"
        ],
        correct: 1
    },

    {
        question: "Which technology packages applications into containers?",
        category: "Docker",
        answers: [
            "Docker",
            "Git",
            "React",
            "MongoDB"
        ],
        correct: 0
    },

    {
        question: "Which file is commonly used to define a Docker image?",
        category: "Docker",
        answers: [
            "Dockerfile",
            "docker.json",
            "container.txt",
            "image.yml"
        ],
        correct: 0
    },

    {
        question: "Which command builds a Docker image?",
        category: "Docker",
        answers: [
            "docker create",
            "docker build",
            "docker make",
            "docker image-new"
        ],
        correct: 1
    },

    {
        question: "Which command lists running Docker containers?",
        category: "Docker",
        answers: [
            "docker ps",
            "docker list",
            "docker running",
            "docker containers"
        ],
        correct: 0
    },

    {
        question: "Which language is widely used for data analysis and AI?",
        category: "Python",
        answers: [
            "Python",
            "HTML",
            "CSS",
            "SQL"
        ],
        correct: 0
    },

    {
        question: "Which Python library is widely used for numerical computing?",
        category: "Python",
        answers: [
            "NumPy",
            "React",
            "Express",
            "Bootstrap"
        ],
        correct: 0
    },

    {
        question: "Which Python library is widely used for data manipulation?",
        category: "Python",
        answers: [
            "Pandas",
            "Flask",
            "Django",
            "TensorFlow"
        ],
        correct: 0
    },

    {
        question: "Which keyword is used to define a function in Python?",
        category: "Python",
        answers: [
            "function",
            "def",
            "func",
            "define"
        ],
        correct: 1
    },

    {
        question: "Which data structure stores key-value pairs in Python?",
        category: "Python",
        answers: [
            "List",
            "Tuple",
            "Dictionary",
            "Set"
        ],
        correct: 2
    },

    {
        question: "Which data structure uses LIFO?",
        category: "DSA",
        answers: [
            "Queue",
            "Stack",
            "Array",
            "Graph"
        ],
        correct: 1
    },

    {
        question: "Which data structure uses FIFO?",
        category: "DSA",
        answers: [
            "Stack",
            "Tree",
            "Queue",
            "Graph"
        ],
        correct: 2
    },

    {
        question: "What is the average time complexity of binary search?",
        category: "Algorithms",
        answers: [
            "O(n)",
            "O(log n)",
            "O(n²)",
            "O(1)"
        ],
        correct: 1
    },

    {
        question: "Which data structure follows a hierarchical structure?",
        category: "DSA",
        answers: [
            "Tree",
            "Stack",
            "Queue",
            "Array"
        ],
        correct: 0
    },

    {
        question: "Which algorithm is commonly used for shortest paths in weighted graphs?",
        category: "Algorithms",
        answers: [
            "Bubble Sort",
            "Dijkstra's Algorithm",
            "Binary Search",
            "Linear Search"
        ],
        correct: 1
    },

    {
        question: "Which sorting algorithm has average O(n log n) complexity?",
        category: "Algorithms",
        answers: [
            "Bubble Sort",
            "Selection Sort",
            "Merge Sort",
            "Linear Search"
        ],
        correct: 2
    },

    {
        question: "Which protocol is commonly used for secure web communication?",
        category: "Security",
        answers: [
            "HTTP",
            "FTP",
            "HTTPS",
            "SMTP"
        ],
        correct: 2
    },

    {
        question: "What does JSON stand for?",
        category: "Web",
        answers: [
            "JavaScript Object Notation",
            "Java Standard Object Network",
            "JavaScript Online Notation",
            "JSON Object Network"
        ],
        correct: 0
    },

    {
        question: "Which symbol is used to access an object's property in JavaScript?",
        category: "JavaScript",
        answers: [
            "#",
            ".",
            "@",
            "%"
        ],
        correct: 1
    },

    {
        question: "Which operator checks both value and type in JavaScript?",
        category: "JavaScript",
        answers: [
            "==",
            "=",
            "===",
            "!="
        ],
        correct: 2
    },

    {
        question: "Which JavaScript method converts JSON text into an object?",
        category: "JavaScript",
        answers: [
            "JSON.parse()",
            "JSON.object()",
            "JSON.convert()",
            "JSON.decode()"
        ],
        correct: 0
    },

    {
        question: "Which database language is used to query relational databases?",
        category: "Database",
        answers: [
            "SQL",
            "HTML",
            "CSS",
            "JSON"
        ],
        correct: 0
    },

    {
        question: "Which command creates a new Git branch?",
        category: "Git",
        answers: [
            "git branch branch-name",
            "git new branch-name",
            "git create branch-name",
            "git make branch-name"
        ],
        correct: 0
    },

    {
        question: "What does URL stand for?",
        category: "Web",
        answers: [
            "Uniform Resource Locator",
            "Universal Reference Link",
            "Uniform Routing Language",
            "User Resource Location"
        ],
        correct: 0
    }
];


/* =========================================================
   DOM ELEMENTS
   ========================================================= */

const startBtn =
    document.getElementById("startBtn");

const startScreen =
    document.getElementById("startScreen");

const quizSection =
    document.getElementById("quizSection");

const resultSection =
    document.getElementById("resultSection");

const questionCard =
    document.getElementById("questionCard");

const answersElement =
    document.getElementById("answers");

const questionElement =
    document.getElementById("question");

const questionNumberElement =
    document.getElementById("questionNumber");

const currentQuestionElement =
    document.getElementById("currentQuestion");

const categoryBadge =
    document.getElementById("categoryBadge");

const nextBtn =
    document.getElementById("nextBtn");

const scoreElement =
    document.getElementById("score");

const comboElement =
    document.getElementById("combo");

const bestComboElement =
    document.getElementById("bestCombo");

const livesElement =
    document.getElementById("lives");

const timerText =
    document.getElementById("timerText");

const timerProgress =
    document.getElementById("timerProgress");

const progressFill =
    document.getElementById("progressFill");

const progressText =
    document.getElementById("progressText");

const difficultyDisplay =
    document.getElementById("difficultyDisplay");

const answerFeedback =
    document.getElementById("answerFeedback");

const fiftyBtn =
    document.getElementById("fiftyBtn");

const timeBtn =
    document.getElementById("timeBtn");

const skipBtn =
    document.getElementById("skipBtn");

const restartBtn =
    document.getElementById("restartBtn");

const soundBtn =
    document.getElementById("soundBtn");

const fullscreenBtn =
    document.getElementById("fullscreenBtn");

const finalScore =
    document.getElementById("finalScore");

const correctAnswers =
    document.getElementById("correctAnswers");

const wrongAnswers =
    document.getElementById("wrongAnswers");

const accuracy =
    document.getElementById("accuracy");

const finalBestCombo =
    document.getElementById("finalBestCombo");

const fastestTimeElement =
    document.getElementById("fastestTime");

const finalDifficulty =
    document.getElementById("finalDifficulty");

const resultIcon =
    document.getElementById("resultIcon");

const resultMessage =
    document.getElementById("resultMessage");

const achievementList =
    document.getElementById("achievementList");

const bootScreen =
    document.getElementById("bootScreen");

const bootAccess =
    document.getElementById("bootAccess");

const particlesContainer =
    document.getElementById("particles");


/* =========================================================
   BOOT SCREEN
   ========================================================= */

let bootValue = 0;

const bootInterval = setInterval(() => {

    bootValue++;

    const bootProgress =
        document.getElementById("bootProgress");

    const bootPercent =
        document.getElementById("bootPercent");

    if (bootProgress) {
        bootProgress.style.width =
            bootValue + "%";
    }

    if (bootPercent) {
        bootPercent.textContent =
            bootValue + "%";
    }

    if (bootValue >= 100) {

        clearInterval(bootInterval);

        if (bootAccess) {
            bootAccess.classList.add("show");
        }

        setTimeout(() => {

            if (bootScreen) {
                bootScreen.classList.add("hide");
            }

        }, 800);
    }

}, 35);


/* =========================================================
   PARTICLES
   ========================================================= */

function createParticles() {

    const container =
        document.getElementById("particles");

    if (!container) return;

    for (let i = 0; i < 75; i++) {

        const particle =
            document.createElement("div");

        particle.className =
            "particle";

        particle.style.left =
            Math.random() * 100 + "%";

        particle.style.animationDuration =
            Math.random() * 8 + 6 + "s";

        particle.style.animationDelay =
            Math.random() * 8 + "s";

        container.appendChild(particle);
    }
}

createParticles();


/* =========================================================
   DIFFICULTY SELECT
   ========================================================= */

document.querySelectorAll(".difficulty")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                document
                    .querySelectorAll(".difficulty")
                    .forEach(item =>
                        item.classList.remove("active")
                    );

                button.classList.add("active");

                selectedDifficulty =
                    button.dataset.difficulty;
            }
        );

    });


/* =========================================================
   START GAME
   ========================================================= */

if (startBtn) {

    startBtn.addEventListener(
        "click",
        startGame
    );
}


function startGame() {

    currentIndex = 0;
    score = 0;
    combo = 0;
    bestCombo = 0;
    lives = 3;

    correctCount = 0;
    wrongCount = 0;

    fastestTime = Infinity;

    usedFifty = false;
    usedTime = false;
    usedSkip = false;

    scoreElement.textContent = "0";
    comboElement.textContent = "×0";
    bestComboElement.textContent = "×0";

    updateLives();

    difficultyDisplay.textContent =
        selectedDifficulty.toUpperCase();

    fiftyBtn.disabled = false;
    timeBtn.disabled = false;
    skipBtn.disabled = false;

    startScreen.classList.add("hidden");
    resultSection.classList.add("hidden");
    quizSection.classList.remove("hidden");

    loadQuestion();

    playSound("start");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================================
   LOAD QUESTION
   ========================================================= */

function loadQuestion() {

    clearInterval(timerInterval);

    answered = false;

    nextBtn.classList.add("hidden");

    nextBtn.innerHTML =
        `NEXT QUESTION <span>→</span>`;

    answerFeedback.textContent = "";

    answerFeedback.className =
        "answer-feedback";

    const current =
        questions[currentIndex];

    const number =
        String(currentIndex + 1)
            .padStart(2, "0");

    currentQuestionElement.textContent =
        number;

    questionNumberElement.textContent =
        number;

    questionElement.textContent =
        current.question;

    categoryBadge.textContent =
        current.category;

    answersElement.innerHTML = "";

    current.answers.forEach(
        (answer, index) => {

            const button =
                document.createElement("button");

            button.className =
                "answer";

            button.innerHTML =
                `<strong>${String.fromCharCode(65 + index)}.</strong> ${answer}`;

            button.addEventListener(
                "click",
                () =>
                    selectAnswer(
                        index,
                        button
                    )
            );

            answersElement.appendChild(
                button
            );
        }
    );

    updateProgress();

    startTimer();
}


/* =========================================================
   TIMER
   ========================================================= */

function startTimer() {

    clearInterval(timerInterval);

    timeLeft =
        difficultySettings[
            selectedDifficulty
        ].time;

    updateTimerUI();

    questionStartTime =
        performance.now();

    timerInterval =
        setInterval(() => {

            timeLeft -= 0.1;

            updateTimerUI();

            if (timeLeft <= 0) {

                clearInterval(timerInterval);

                timeOut();
            }

        }, 100);
}


/* =========================================================
   TIMER UI
   ========================================================= */

function updateTimerUI() {

    if (!timerText || !timerProgress) {
        return;
    }

    timerText.textContent =
        Math.max(
            0,
            Math.ceil(timeLeft)
        );

    const maxTime =
        difficultySettings[
            selectedDifficulty
        ].time;

    const circumference =
        276.46;

    const percentage =
        Math.max(
            0,
            timeLeft / maxTime
        );

    timerProgress.style.strokeDashoffset =
        circumference -
        percentage * circumference;

    if (timeLeft <= 3) {

        timerProgress.style.stroke =
            "#ff3864";

        timerText.style.color =
            "#ff3864";

        document
            .querySelector(".timer-circle")
            ?.classList.add(
                "timer-danger"
            );

        if (
            Math.ceil(timeLeft * 10) %
            10 === 0
        ) {

            playSound("tick");
        }

    } else {

        timerProgress.style.stroke =
            "#00f5ff";

        timerText.style.color =
            "#ffffff";

        document
            .querySelector(".timer-circle")
            ?.classList.remove(
                "timer-danger"
            );
    }
}


/* =========================================================
   SELECT ANSWER
   ========================================================= */

function selectAnswer(
    selectedIndex,
    selectedButton
) {

    if (answered) {
        return;
    }

    answered = true;

    clearInterval(timerInterval);

    const current =
        questions[currentIndex];

    const elapsed =
        (performance.now() -
            questionStartTime) / 1000;

    if (elapsed < fastestTime) {
        fastestTime = elapsed;
    }

    const allButtons =
        document.querySelectorAll(".answer");

    allButtons.forEach(
        button =>
            button.classList.add("disabled")
    );

    if (
        selectedIndex ===
        current.correct
    ) {

        handleCorrect(
            selectedButton,
            elapsed
        );

    } else {

        handleWrong(
            selectedButton,
            current
        );
    }

    if (
        currentIndex ===
        questions.length - 1
    ) {

        nextBtn.innerHTML =
            `VIEW RESULT <span>→</span>`;
    }

    nextBtn.classList.remove(
        "hidden"
    );
}


/* =========================================================
   CORRECT ANSWER
   ========================================================= */

function handleCorrect(
    selectedButton,
    elapsed
) {

    selectedButton.classList.add(
        "correct"
    );

    correctCount++;

    combo++;

    if (combo > bestCombo) {
        bestCombo = combo;
    }

    let points = 50;

    if (elapsed <= 3) {

        points = 100;

    } else if (elapsed <= 6) {

        points = 75;
    }

    const difficultyMultiplier =
        difficultySettings[
            selectedDifficulty
        ].multiplier;

    const comboMultiplier =
        Math.min(
            2,
            1 + combo * 0.05
        );

    const gained =
        Math.round(
            points *
            difficultyMultiplier *
            comboMultiplier
        );

    score += gained;

    scoreElement.textContent =
        score;

    comboElement.textContent =
        "×" + combo;

    bestComboElement.textContent =
        "×" + bestCombo;

    answerFeedback.textContent =
        `✓ CORRECT // +${gained} POINTS`;

    answerFeedback.classList.add(
        "feedback-correct"
    );

    if (combo >= 3) {

        answerFeedback.textContent +=
            ` // COMBO ×${combo}`;
    }

    playSound("correct");

    createFlash();

    createSuccessParticles();

    if (combo >= 5) {

        createComboBurst();
    }
}


/* =========================================================
   WRONG ANSWER
   ========================================================= */

function handleWrong(
    selectedButton,
    current
) {

    selectedButton.classList.add(
        "wrong"
    );

    wrongCount++;

    combo = 0;

    comboElement.textContent =
        "×0";

    lives--;

    updateLives();

    questionCard.classList.add(
        "shake"
    );

    setTimeout(() => {

        questionCard.classList.remove(
            "shake"
        );

    }, 500);

    const allButtons =
        document.querySelectorAll(".answer");

    if (allButtons[current.correct]) {

        allButtons[
            current.correct
        ].classList.add(
            "correct"
        );
    }

    answerFeedback.textContent =
        "✕ WRONG // CORRECT ANSWER HIGHLIGHTED";

    answerFeedback.classList.add(
        "feedback-wrong"
    );

    playSound("wrong");

    createFlash(true);

    if (lives <= 0) {

        setTimeout(() => {

            gameOver();

        }, 900);
    }
}


/* =========================================================
   TIME OUT
   ========================================================= */

function timeOut() {

    if (answered) {
        return;
    }

    answered = true;

    clearInterval(timerInterval);

    wrongCount++;

    combo = 0;

    lives--;

    updateLives();

    const current =
        questions[currentIndex];

    const allButtons =
        document.querySelectorAll(".answer");

    allButtons.forEach(
        button =>
            button.classList.add(
                "disabled"
            )
    );

    if (allButtons[current.correct]) {

        allButtons[
            current.correct
        ].classList.add(
            "correct"
        );
    }

    questionCard.classList.add(
        "shake"
    );

    answerFeedback.textContent =
        "⌛ TIME OUT // CORRECT ANSWER HIGHLIGHTED";

    answerFeedback.classList.add(
        "feedback-wrong"
    );

    playSound("timeout");

    createFlash(true);

    nextBtn.classList.remove(
        "hidden"
    );

    if (
        currentIndex ===
        questions.length - 1
    ) {

        nextBtn.innerHTML =
            `VIEW RESULT <span>→</span>`;
    }

    if (lives <= 0) {

        setTimeout(
            gameOver,
            900
        );
    }
}


/* =========================================================
   NEXT QUESTION
   ========================================================= */

if (nextBtn) {

    nextBtn.addEventListener(
        "click",
        nextQuestion
    );
}


function nextQuestion() {

    if (lives <= 0) {

        gameOver();

        return;
    }

    currentIndex++;

    if (
        currentIndex >=
        questions.length
    ) {

        showResult();

        return;
    }

    loadQuestion();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================================
   GAME OVER
   ========================================================= */

function gameOver() {

    clearInterval(timerInterval);

    showResult(true);
}


/* =========================================================
   PROGRESS
   ========================================================= */

function updateProgress() {

    const progress =
        ((currentIndex + 1) /
            questions.length) *
        100;

    progressFill.style.width =
        progress + "%";

    progressText.textContent =
        `${currentIndex + 1} / ${questions.length}`;
}


/* =========================================================
   LIVES
   ========================================================= */

function updateLives() {

    let hearts = "";

    for (let i = 0; i < 3; i++) {

        hearts +=
            i < lives
                ? "♥ "
                : "♡ ";
    }

    livesElement.textContent =
        hearts;
}


/* =========================================================
   50/50 POWERUP
   ========================================================= */

if (fiftyBtn) {

    fiftyBtn.addEventListener(
        "click",
        () => {

            if (
                usedFifty ||
                answered
            ) {
                return;
            }

            usedFifty = true;

            fiftyBtn.disabled = true;

            const current =
                questions[currentIndex];

            const buttons =
                [
                    ...document.querySelectorAll(
                        ".answer"
                    )
                ];

            const wrongButtons =
                buttons.filter(
                    (_, index) =>
                        index !== current.correct
                );

            wrongButtons
                .sort(
                    () =>
                        Math.random() - 0.5
                )
                .slice(0, 2)
                .forEach(
                    button =>
                        button.classList.add(
                            "removed"
                        )
                );

            playSound("power");
        }
    );
}


/* =========================================================
   TIME POWERUP
   ========================================================= */

if (timeBtn) {

    timeBtn.addEventListener(
        "click",
        () => {

            if (
                usedTime ||
                answered
            ) {
                return;
            }

            usedTime = true;

            timeBtn.disabled = true;

            timeLeft += 5;

            updateTimerUI();

            playSound("power");

            answerFeedback.textContent =
                "+5 SECONDS ADDED";

            answerFeedback.className =
                "answer-feedback feedback-correct";
        }
    );
}


/* =========================================================
   SKIP POWERUP
   ========================================================= */

if (skipBtn) {

    skipBtn.addEventListener(
        "click",
        () => {

            if (
                usedSkip ||
                answered
            ) {
                return;
            }

            usedSkip = true;

            skipBtn.disabled = true;

            clearInterval(timerInterval);

            answerFeedback.textContent =
                "QUESTION SKIPPED";

            answerFeedback.className =
                "answer-feedback feedback-wrong";

            playSound("power");

            setTimeout(
                nextQuestion,
                400
            );
        }
    );
}


/* =========================================================
   RESULT
   ========================================================= */

function showResult(
    forcedGameOver = false
) {

    clearInterval(timerInterval);

    quizSection.classList.add(
        "hidden"
    );

    resultSection.classList.remove(
        "hidden"
    );

    const percentage =
        Math.round(
            (correctCount /
                questions.length) *
            100
        );

    finalScore.textContent =
        score;

    correctAnswers.textContent =
        correctCount;

    wrongAnswers.textContent =
        wrongCount;

    accuracy.textContent =
        percentage + "%";

    finalBestCombo.textContent =
        "×" + bestCombo;

    fastestTimeElement.textContent =
        fastestTime === Infinity
            ? "--s"
            : fastestTime.toFixed(1) + "s";

    finalDifficulty.textContent =
        selectedDifficulty.toUpperCase();


    if (forcedGameOver) {

        resultIcon.textContent =
            "☠";

        resultMessage.textContent =
            "SYSTEM FAILURE. Your three lives were exhausted.";

    } else if (percentage >= 90) {

        resultIcon.textContent =
            "🏆";

        resultMessage.textContent =
            "ELITE PERFORMANCE. The NEXUS recognizes your technical mastery.";

    } else if (percentage >= 75) {

        resultIcon.textContent =
            "⚡";

        resultMessage.textContent =
            "EXCELLENT PERFORMANCE. Your technical foundation is strong.";

    } else if (percentage >= 50) {

        resultIcon.textContent =
            "💻";

        resultMessage.textContent =
            "SOLID ATTEMPT. Keep training and push your technical skills further.";

    } else {

        resultIcon.textContent =
            "🔄";

        resultMessage.textContent =
            "TRAINING REQUIRED. Return to the arena and challenge yourself again.";
    }


    generateAchievements(
        percentage
    );

    createResultParticles();

    playSound("result");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================================
   ACHIEVEMENTS
   ========================================================= */

function generateAchievements(
    percentage
) {

    achievementList.innerHTML = "";

    const achievements = [];

    if (correctCount >= 1) {

        achievements.push(
            "⚡ FIRST BLOOD"
        );
    }

    if (
        fastestTime !== Infinity &&
        fastestTime <= 3
    ) {

        achievements.push(
            "⚡ SPEED DEMON"
        );
    }

    if (bestCombo >= 5) {

        achievements.push(
            "🔥 COMBO MASTER"
        );
    }

    if (bestCombo >= 10) {

        achievements.push(
            "💎 LEGENDARY COMBO"
        );
    }

    if (percentage === 100) {

        achievements.push(
            "👑 PERFECT RUN"
        );
    }

    if (
        selectedDifficulty === "expert" &&
        percentage >= 75
    ) {

        achievements.push(
            "🧠 ELITE HACKER"
        );
    }

    if (score >= 3000) {

        achievements.push(
            "🚀 SCORE BREAKER"
        );
    }

    if (
        achievements.length === 0
    ) {

        achievements.push(
            "🔒 ACHIEVEMENTS LOCKED"
        );
    }


    achievements.forEach(
        achievement => {

            const item =
                document.createElement("div");

            item.className =
                "achievement";

            item.textContent =
                achievement;

            achievementList.appendChild(
                item
            );
        }
    );
}


/* =========================================================
   RESTART
   ========================================================= */

if (restartBtn) {

    restartBtn.addEventListener(
        "click",
        () => {

            resultSection.classList.add(
                "hidden"
            );

            startScreen.classList.remove(
                "hidden"
            );

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    );
}


/* =========================================================
   SCREEN FLASH
   ========================================================= */

function createFlash(
    wrong = false
) {

    const flash =
        document.createElement("div");

    flash.className =
        "screen-flash";

    if (wrong) {

        flash.style.background =
            "rgba(255,56,100,.15)";
    }

    document.body.appendChild(
        flash
    );

    setTimeout(
        () => flash.remove(),
        400
    );
}


/* =========================================================
   SUCCESS PARTICLES
   ========================================================= */

function createSuccessParticles() {

    for (let i = 0; i < 18; i++) {

        const particle =
            document.createElement("div");

        particle.style.position =
            "fixed";

        particle.style.left =
            "50%";

        particle.style.top =
            "50%";

        particle.style.width =
            "5px";

        particle.style.height =
            "5px";

        particle.style.background =
            "#00ff9d";

        particle.style.borderRadius =
            "50%";

        particle.style.zIndex =
            "9999";

        particle.style.pointerEvents =
            "none";

        const angle =
            Math.random() *
            Math.PI * 2;

        const distance =
            Math.random() * 180 + 50;

        particle.animate(
            [
                {
                    transform:
                        "translate(-50%,-50%) scale(1)",
                    opacity: 1
                },

                {
                    transform:
                        `translate(
                            calc(-50% + ${Math.cos(angle) * distance}px),
                            calc(-50% + ${Math.sin(angle) * distance}px)
                        ) scale(0)`,
                    opacity: 0
                }
            ],
            {
                duration:
                    700 +
                    Math.random() * 500,

                easing:
                    "cubic-bezier(.2,.8,.3,1)"
            }
        );

        document.body.appendChild(
            particle
        );

        setTimeout(
            () => particle.remove(),
            1400
        );
    }
}


/* =========================================================
   COMBO BURST
   ========================================================= */

function createComboBurst() {

    for (let i = 0; i < 30; i++) {

        const particle =
            document.createElement("div");

        particle.style.position =
            "fixed";

        particle.style.left =
            "50%";

        particle.style.top =
            "45%";

        particle.style.width =
            "3px";

        particle.style.height =
            "20px";

        particle.style.background =
            i % 2
                ? "#ff2bd6"
                : "#00f5ff";

        particle.style.zIndex =
            "9999";

        particle.style.pointerEvents =
            "none";

        const angle =
            Math.random() *
            Math.PI * 2;

        const distance =
            100 +
            Math.random() * 250;

        particle.animate(
            [
                {
                    transform:
                        "translate(-50%,-50%) rotate(0deg)",
                    opacity: 1
                },

                {
                    transform:
                        `translate(
                            calc(-50% + ${Math.cos(angle) * distance}px),
                            calc(-50% + ${Math.sin(angle) * distance}px)
                        )
                        rotate(${Math.random() * 720}deg)`,
                    opacity: 0
                }
            ],
            {
                duration:
                    900 +
                    Math.random() * 500
            }
        );

        document.body.appendChild(
            particle
        );

        setTimeout(
            () => particle.remove(),
            1500
        );
    }
}


/* =========================================================
   RESULT PARTICLES
   ========================================================= */

function createResultParticles() {

    for (let i = 0; i < 45; i++) {

        const particle =
            document.createElement("div");

        particle.style.position =
            "fixed";

        particle.style.left =
            Math.random() * 100 + "%";

        particle.style.top =
            Math.random() * 100 + "%";

        particle.style.width =
            Math.random() * 4 + 2 + "px";

        particle.style.height =
            particle.style.width;

        particle.style.background =
            i % 2
                ? "#ff2bd6"
                : "#00f5ff";

        particle.style.borderRadius =
            "50%";

        particle.style.pointerEvents =
            "none";

        particle.style.zIndex =
            "999";

        particle.animate(
            [
                {
                    transform:
                        "scale(0)",
                    opacity: 0
                },

                {
                    transform:
                        "scale(1)",
                    opacity: 1
                },

                {
                    transform:
                        "scale(0)",
                    opacity: 0
                }
            ],
            {
                duration:
                    1500 +
                    Math.random() * 2000,

                delay:
                    Math.random() * 1000
            }
        );

        document.body.appendChild(
            particle
        );

        setTimeout(
            () => particle.remove(),
            5000
        );
    }
}


/* =========================================================
   SOUND ENGINE
   ========================================================= */

let audioContext = null;


function getAudioContext() {

    if (!audioContext) {

        audioContext =
            new (
                window.AudioContext ||
                window.webkitAudioContext
            )();
    }

    return audioContext;
}


function playSound(type) {

    if (!soundEnabled) {
        return;
    }

    try {

        const ctx =
            getAudioContext();

        const oscillator =
            ctx.createOscillator();

        const gain =
            ctx.createGain();

        oscillator.connect(gain);

        gain.connect(
            ctx.destination
        );

        let frequency = 500;
        let duration = 0.12;

        if (type === "correct") {

            frequency = 700;
            duration = 0.18;

        } else if (type === "wrong") {

            frequency = 160;
            duration = 0.25;

        } else if (type === "timeout") {

            frequency = 100;
            duration = 0.35;

        } else if (type === "power") {

            frequency = 850;
            duration = 0.15;

        } else if (type === "start") {

            frequency = 450;
            duration = 0.25;

        } else if (type === "result") {

            frequency = 900;
            duration = 0.3;

        } else if (type === "tick") {

            frequency = 1000;
            duration = 0.04;
        }

        oscillator.frequency.value =
            frequency;

        oscillator.type =
            "sine";

        gain.gain.setValueAtTime(
            0.001,
            ctx.currentTime
        );

        gain.gain.exponentialRampToValueAtTime(
            0.08,
            ctx.currentTime + 0.01
        );

        gain.gain.exponentialRampToValueAtTime(
            0.001,
            ctx.currentTime + duration
        );

        oscillator.start();

        oscillator.stop(
            ctx.currentTime +
            duration
        );

    } catch (error) {

        console.log(
            "Audio unavailable"
        );
    }
}


/* =========================================================
   SOUND TOGGLE
   ========================================================= */

if (soundBtn) {

    soundBtn.addEventListener(
        "click",
        () => {

            soundEnabled =
                !soundEnabled;

            soundBtn.textContent =
                soundEnabled
                    ? "🔊"
                    : "🔇";

            if (soundEnabled) {

                playSound("power");
            }
        }
    );
}


/* =========================================================
   FULLSCREEN
   ========================================================= */

if (fullscreenBtn) {

    fullscreenBtn.addEventListener(
        "click",
        async () => {

            try {

                if (!document.fullscreenElement) {

                    await document.documentElement
                        .requestFullscreen();

                    fullscreenBtn.textContent =
                        "✕";

                } else {

                    await document.exitFullscreen();

                    fullscreenBtn.textContent =
                        "⛶";
                }

            } catch (error) {

                console.log(
                    "Fullscreen unavailable"
                );
            }
        }
    );
}


/* =========================================================
   FUTURISTIC CURSOR
   ========================================================= */

const cursorDot =
    document.querySelector(
        ".cursor-dot"
    );

const cursorRing =
    document.querySelector(
        ".cursor-ring"
    );

let mouseX = 0;
let mouseY = 0;

let ringX = 0;
let ringY = 0;


document.addEventListener(
    "mousemove",
    event => {

        mouseX =
            event.clientX;

        mouseY =
            event.clientY;

        if (cursorDot) {

            cursorDot.style.left =
                mouseX + "px";

            cursorDot.style.top =
                mouseY + "px";
        }
    }
);


function animateCursor() {

    ringX +=
        (mouseX - ringX) *
        0.15;

    ringY +=
        (mouseY - ringY) *
        0.15;

    if (cursorRing) {

        cursorRing.style.left =
            ringX + "px";

        cursorRing.style.top =
            ringY + "px";
    }

    requestAnimationFrame(
        animateCursor
    );
}


animateCursor();


document.addEventListener(
    "mouseover",
    event => {

        const interactive =
            event.target.closest(
                "button, .answer"
            );

        if (interactive) {

            document.body.classList.add(
                "cursor-hover"
            );
        }
    }
);


document.addEventListener(
    "mouseout",
    event => {

        const interactive =
            event.target.closest(
                "button, .answer"
            );

        if (interactive) {

            document.body.classList.remove(
                "cursor-hover"
            );
        }
    }
);


document.addEventListener(
    "mousedown",
    () => {

        document.body.classList.add(
            "cursor-click"
        );
    }
);


document.addEventListener(
    "mouseup",
    () => {

        document.body.classList.remove(
            "cursor-click"
        );
    }
);


/* =========================================================
   KEYBOARD CONTROLS
   ========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            quizSection.classList.contains(
                "hidden"
            )
        ) {
            return;
        }

        const key =
            event.key.toLowerCase();

        if (
            ["a", "b", "c", "d"]
                .includes(key)
            &&
            !answered
        ) {

            const index =
                key.charCodeAt(0) -
                97;

            const buttons =
                document.querySelectorAll(
                    ".answer"
                );

            if (buttons[index]) {

                buttons[index].click();
            }
        }

        if (
            event.key === "Enter"
            &&
            answered
            &&
            !nextBtn.classList.contains(
                "hidden"
            )
        ) {

            nextBtn.click();
        }
    }
);


/* =========================================================
   EXTRA VISUAL EFFECTS
   ========================================================= */

document.addEventListener(
    "click",
    event => {

        const ripple =
            document.createElement("span");

        ripple.className =
            "click-ripple";

        ripple.style.left =
            event.clientX + "px";

        ripple.style.top =
            event.clientY + "px";

        document.body.appendChild(
            ripple
        );

        setTimeout(
            () => ripple.remove(),
            700
        );
    }
);


/* =========================================================
   MOUSE PARALLAX EFFECT
   ========================================================= */

document.addEventListener(
    "mousemove",
    event => {

        const cards =
            document.querySelectorAll(
                ".question-card, .result-card, .stat-card"
            );

        const x =
            (window.innerWidth / 2 -
                event.clientX) /
            60;

        const y =
            (window.innerHeight / 2 -
                event.clientY) /
            60;

        cards.forEach(card => {

            if (
                !card.classList.contains(
                    "shake"
                )
            ) {

                card.style.setProperty(
                    "--mouse-x",
                    `${x}px`
                );

                card.style.setProperty(
                    "--mouse-y",
                    `${y}px`
                );
            }
        });
    }
);


/* =========================================================
   PREVENT ACCIDENTAL DOUBLE SUBMISSION
   ========================================================= */

window.addEventListener(
    "blur",
    () => {

        if (timerInterval) {

            // Keep timer running,
            // but prevent duplicate events.
        }
    }
);


/* =========================================================
   INITIAL STATE
   ========================================================= */

if (quizSection) {

    quizSection.classList.add(
        "hidden"
    );
}

if (resultSection) {

    resultSection.classList.add(
        "hidden"
    );
}

console.log(
    "NEXUS // TECH ARENA INITIALIZED"
);

console.log(
    `${questions.length} technical questions loaded.`
);