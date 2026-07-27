// ==========================
// STUDENT SURVEY QUESTIONS
// ==========================

const questions = [
{
    question: "What is your age?",
        answers: ["Under 18", "18–24", "25–34", "35+"]
        },
        {
            question: "What is your gender?",
                answers: ["Male", "Female", "Prefer not to say"]
                },
                {
                    question: "Which year are you in?",
                        answers: ["Year 1", "Year 2", "Year 3", "Year 4"]
                        },
                        {
                            question: "How satisfied are you with your lecturers?",
                                answers: [
                                        "Very Satisfied",
                                                "Satisfied",
                                                        "Neutral",
                                                                "Dissatisfied"
                                                                    ]
                                                                    },
                                                                    {
                                                                        question: "Would you recommend this university?",
                                                                            answers: ["Yes", "No"]
                                                                            }
                                                                            ];

                                                                            // ==========================

                                                                            let currentQuestion = 0;
                                                                            let selectedAnswers = [];

                                                                            // ==========================

                                                                            const question = document.getElementById("question");
                                                                            const answers = document.getElementById("answers");
                                                                            const progressBar = document.getElementById("progressBar");
                                                                            const questionCounter = document.getElementById("questionCounter");
                                                                            const nextBtn = document.getElementById("nextBtn");
                                                                            const prevBtn = document.getElementById("prevBtn");

                                                                            // Only run on survey page
                                                                            if(question){

                                                                            loadQuestion();

                                                                            prevBtn.addEventListener("click", previousQuestion);
                                                                            nextBtn.addEventListener("click", nextQuestion);

                                                                            }

                                                                            // ==========================

                                                                            function loadQuestion(){

                                                                            const current = questions[currentQuestion];

                                                                            question.textContent = current.question;

                                                                            questionCounter.textContent =
                                                                            `Question ${currentQuestion+1} of ${questions.length}`;

                                                                            progressBar.style.width =
                                                                            `${((currentQuestion+1)/questions.length)*100}%`;

                                                                            answers.innerHTML = "";

                                                                            current.answers.forEach((answer,index)=>{

                                                                            const card = document.createElement("div");

                                                                            card.className="answer-card";

                                                                            card.textContent=answer;

                                                                            if(selectedAnswers[currentQuestion]===index){

                                                                            card.classList.add("selected");

                                                                            }

                                                                            card.addEventListener("click",()=>{

                                                                            document.querySelectorAll(".answer-card").forEach(c=>{

                                                                            c.classList.remove("selected");

                                                                            });

                                                                            card.classList.add("selected");

                                                                            selectedAnswers[currentQuestion]=index;

                                                                            });

                                                                            answers.appendChild(card);

                                                                            });

                                                                            prevBtn.style.visibility =
                                                                            currentQuestion===0 ? "hidden":"visible";

                                                                            nextBtn.textContent =
                                                                            currentQuestion===questions.length-1
                                                                            ? "Submit"
                                                                            : "Next";

                                                                            }

                                                                            // ==========================

                                                                            function nextQuestion(){

                                                                            if(selectedAnswers[currentQuestion]===undefined){

                                                                            alert("Please select an answer before continuing.");

                                                                            return;

                                                                            }

                                                                            if(currentQuestion<questions.length-1){

                                                                            currentQuestion++;

                                                                            loadQuestion();

                                                                            }else{

                                                                            showThankYou();

                                                                            }

                                                                            }

                                                                            // ==========================

                                                                            function previousQuestion(){

                                                                            if(currentQuestion>0){

                                                                            currentQuestion--;

                                                                            loadQuestion();

                                                                            }

                                                                            }

                                                                            // ==========================

                                                                            function showThankYou(){

                                                                            const card=document.querySelector(".survey-card");

                                                                            card.innerHTML=`

                                                                            <div class="thank-you">

                                                                            <h1>✔ Thank You!</h1>

                                                                            <p>

                                                                            Your response has been submitted successfully.

                                                                            <br><br>

                                                                            We appreciate your participation.

                                                                            </p>

                                                                            </div>

                                                                            `;

                                                                            }