const questions=[
    {
        question: "Which is largest animal in the world?",
        answers: [
        { text: "Shark", correct: false},
        { text: "Blue whale", correct: true},
        { text: "Elephant", correct: false},
        { text: "Giraffe", correct: false},
        ]
      },
      {
        question: "Which is the smallest country in the world?",
        
        answers: [
        { text: "Vatican City", correct: true},
        { text: "Bhutan", correct: false},
        { text: "Nepal", correct: false},    
        { text: "Shri Lanka", correct: false},
            
        ]
          
      },
      {
        question: "Which is the largest desert in the world?",
        
        answers: [
        
        { text: "Kalahari", correct: false},
        { text: "Gobi", correct: false},
        { text: "Sahara", correct: false},
        { text: "Antarctica", correct: true},
         ]
        },
        
        {
            question: "Which is the smallest continent in the world?",
        answers: [
    
        { text: "Asia", correct: false},
        { text: "Australia", correct: true},
        { text: "Arctic", correct: false},
        { text: "Africa", correct:false},  
    ]
    },
    {
      question: "When was the Battle of Plassey fought?",
    answers: [
    
    { text: "1750", correct: false},
    { text: "1757", correct: true},
    { text: "1857", correct: false},
    { text: "1755", correct:false},
    
    ]
    } , 
    {
      question: "Which fish has no skeleton at all?",
      
      answers: [
      { text: "Jelly Fish", correct: true},
      { text: "Star Fish", correct: false},
      { text: "Sword Fish", correct: false},    
      { text: "Gold Fish", correct: false},
          
      ]
        
    },
    {
      question: "Due to the presence of chlorophyll, the leaves change into which color?",
      
      answers: [
      { text: "blue", correct: false},
      { text: "red", correct: false},
      { text: "green", correct: true},    
      { text: "yellow", correct: false},
          
      ]
        
    },
    {
      question: "Which country is known as the ‘Pearl of the Orient Seas’?",
      
      answers: [
      { text: "Philippines", correct: true},
      { text: "India", correct: false},
      { text: "	Brazil", correct: false},    
      { text: "	Belgium", correct: false},
          
      ]
        
    },
    {
      question: "Who won the Nobel Peace Prize 2020? ",
      
      answers: [
      { text: "30th September", correct: false},
      { text: "30th May", correct: false},
      { text: "30th January", correct: true},    
      { text: "30th June", correct: false},
          
      ]
        
    },
    {
      question: "When is Martyrs’ day observed in India? ",
      
      answers: [
      { text: "World health Programme", correct: false},
      { text: "World heart Programme", correct: false},
      { text: "World Food Programme", correct: true},    
      { text: "World Peace Programme", correct: false},
          
      ]
        
    },
      
    ] ;
    
    const questionElement = document.getElementById("question");
     const answerButtons = document.getElementById("answer-button");
     const nextButton = document.getElementById("next-btn");
    
    let currentQuestionIndex = 0;
    let score = 0;
     function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
     }
    
     function showQuestion(){
        resetState();
          let currentQuestion = questions[currentQuestionIndex];
          let questionNo = currentQuestionIndex + 1;
          questionElement.innerHTML = questionNo + "." + currentQuestion.question;
    
          currentQuestion.answers.forEach(answer => {
         const button = document.createElement("button");
          button.innerHTML = answer.text;
         button.classList.add("btn");
         answerButtons.appendChild(button);
         if(answer.correct){
        button.dataset.correct= answer.correct;
          }
         button.addEventListener("click",selectAnswer);
         });
        }
        
        function resetState(){
      nextButton.style.display = "none";
        while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
        }
    }
    
     function selectAnswer (e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;
    }else{
    selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
    if(button.dataset.correct === "true"){ 
      button.classList.add("correct");
    }
    button.disabled = true;
    });
    nextButton.style.display="block";
     }
    
     function showScore(){
      resetState();
      questionElement.innerHTML =`You scored ${score}  out of ${questions.length}! `;
      nextButton.innerHTML="Play Again";
      nextButton.style.display="block";
     }
    
    
    
    function   handleNextButton(){
     currentQuestionIndex++;
     if(currentQuestionIndex< questions.length){
       showQuestion();
     }else{
       showScore();
     }
    }
    
    
    
    
    nextButton.addEventListener("click",()=>{
        if(currentQuestionIndex<questions.length){
            handleNextButton();
        }else{
          startQuiz();
        }
    });
        startQuiz();