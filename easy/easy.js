document.addEventListener('DOMContentLoaded', function() {
    const startBtn = document.getElementById('start-btn');
    const quizContainer = document.getElementById('quiz-container');
    const questionElement = document.getElementById('question');
    const optionsContainer = document.getElementById('options-container');
    const quizForm = document.getElementById('quiz-form');
    const submitBtn = document.getElementById('submit-btn');
    const feedbackElement = document.getElementById('feedback');
    const star1 = document.getElementById('s1');
    const star2 = document.getElementById('s2');
    const star3 = document.getElementById('s3');
    const starr1 = document.getElementById('ns1');
    const starr2 = document.getElementById('ns2');
    const starr3 = document.getElementById('ns3');
    const restartBtn = document.getElementById('restart-btn');

    let currentQuestionIndex = 0;
    let score = 0;

    const questions = [
        {
            question: "What is the capital of the south?",
            options: ["Tunis", "Sfax", "Tozeur", "Tatouine"],
            answer: "Sfax"
        },
        {
            question: "Who was the last president before Kais Said?",
            options: ["Beji Caid Essebsi", "Mohamed Ennaser", "Zine el-Abidine Ben Ali", "Moncef Marzouki"],
            answer: "Mohamed Ennaser"
        },
        {
            question: "Where exactly is located the El Jem amphitheatre?",
            options: ["Bizerte", "El Jem, Kairouan", "El Jem, Mahdia", "El Jem, Sfax"],
            answer: "El Jem, Mahdia"
        },
        {
            question: "Where is located the Beni M'tir Dam (سد بني مطير)?",
            options: ["Bizerte", "Bou Salem", "El Aioun", "Ain Drahem"],
            answer: "Ain Drahem"
        },
        {
            question: "Which governorate has 55 consecutive 1st places in the overall average of baccalaureate?",
            options: ["Tunis", "Sousse", "Sfax", "Jandouba"],
            answer: "Sfax"
        }
    ];

    function startQuiz() {
        startBtn.classList.add('slide-out-elliptic-top-bck'); // Add animation to start button
        setTimeout(() => {
            startBtn.style.display = 'none'; // Hide start button 
            loadQuestion();
        }, 700);
    }

    function loadQuestion() {
        if (currentQuestionIndex < questions.length) {
            const currentQuestion = questions[currentQuestionIndex];
            questionElement.textContent = currentQuestion.question;

            optionsContainer.innerHTML = ''; // Clear previous options

            currentQuestion.options.forEach((option, index) => {
                const optionDiv = document.createElement('div');
                optionDiv.classList.add('option');
                optionDiv.innerHTML = `
                    <input type="radio" id="option${index + 1}" name="answer" value="${option}">
                    <label for="option${index + 1}">${option}</label>
                `;
                optionsContainer.appendChild(optionDiv);
            });

            submitBtn.style.display = 'block'; // Show submit button for current question
            submitBtn.classList.add('puff-in-center'); // Add animation class to submit button
            submitBtn.disabled = false; 
        } else {
            // Quiz completed
            quizContainer.innerHTML = `<h2>Quiz Complete!</h2><p>Your Score: ${score} out of ${questions.length}</p>`;
            if (score == 1){
                quizContainer.innerHTML = `<h2>Quiz Complete!</h2><p>Your Score: ${score} out of ${questions.length}</p><h2>Only One?</h2><p>You got to do better in the next one!</p>`
                star1.classList.add ('rotate-scale-up')
                star1.style.display = 'block';
                starr2.style.display = 'block';
                starr3.style.display = 'block';
                
            }
            else{
                if(score>1 && score<5){
                    quizContainer.innerHTML = `<h2>Quiz Complete!</h2><p>Your Score: ${score} out of ${questions.length}</p><h2>That is pretty decent actually!</h2><p>Try other levels</p>`
                    star1.classList.add ('rotate-scale-up')
                    star1.style.display = 'block';
                    star2.classList.add ('rotate-scale-up')
                    star2.style.display = 'block';
                    starr3.style.display = 'block';
                }
                else{
                    if(score == 0){
                        console.log("this guy is not very intelligent is he?");
                        quizContainer.innerHTML = '<h2>Did you do this on purose? You cant have 0!</h2>'
                        starr1.style.display = 'block';
                        starr2.style.display = 'block';
                        starr3.style.display = 'block';
                    
                    }
                    else{
                        quizContainer.innerHTML = '<h2>You are a LEGEND! You got it all right!</h2>'
                        star1.classList.add ('rotate-scale-up')
                        star1.style.display = 'block';
                        star2.classList.add ('rotate-scale-up')
                        star2.style.display = 'block';
                        star3.classList.add ('rotate-scale-up')
                        star3.style.display = 'block';
                    }
                }
            }
            restartBtn.style.display = 'block';
        }
    } 

    startBtn.addEventListener('click', startQuiz);
    restartBtn.addEventListener('click',startQuiz);

    quizForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const selectedOption = document.querySelector('input[name="answer"]:checked');

        if (!selectedOption) {
            alert('Please select an answer.');
            return;
        }

        const userAnswer = selectedOption.value;
        const correctAnswer = questions[currentQuestionIndex].answer;

        document.querySelectorAll('input[type="radio"]').forEach(input => {
            input.disabled = true;
        });
        submitBtn.disabled = true; // Disable button after submitting the answer

        if (userAnswer === correctAnswer) {
            score++;
            feedbackElement.textContent = 'Correct!';
        } else {
            feedbackElement.textContent = `Incorrect. The correct answer is ${correctAnswer}.`;
        }

        // Clear feedback after a short delay
        setTimeout(function() {
            feedbackElement.textContent = '';
        }, 1000);

        currentQuestionIndex++;
        setTimeout(loadQuestion, 1000); // Load next question after a delay
    });
});
