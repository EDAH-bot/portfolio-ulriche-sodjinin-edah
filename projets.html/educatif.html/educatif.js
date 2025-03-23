const questions = [
    {
    question :" Combien font 2 + 2 ?" ,
    options : [ "3", "4",  "5"],
    answer : "4"
    },
    {
    question : "Combien font 5 x 3 ?",
    options : ["10" ,  "15" ,  "20"],
    answer :  "15" 
    },
    {
    question:  "Combien font 10 - 4 ?",
    options: ["5" , "6", "7"],
    answer:  "6"
    }
   ] ;
   let currentQuestion = 0 ;
   let score = 0 ;
   const questionElement = document.getElementById('question') ;
   const optionsElement = document.getElementById('options') ;
   const nextBtn = document.getElementById('next-btn') ;
   const resultElement = document.getElementById('result') ;
   function loadQuestion() {
    const q = questions[currentQuestion] ;
    questionElement.textContent = q.question ;
    optionsElement.innerHTML = '' ;
    q.options.forEach(option => {
    const button = 
   document.createElement('button') ;
    button.textContent = option ;
    button.addEventListener('click', () => 
   checkAnswer(option)) ;
    optionsElement.appendChild(button) ;
    }) ;
   }
   function checkAnswer(option) {
    const q = questions[currentQuestion] ;
    if (option === q.answer) {
    score++ ;
    resultElement.textContent = "Correct !"  ;
    } else {
    resultElement.textContent =  "Incorrect. La bonne réponse est" + q.answer ;
    }
    nextBtn.style.display = 'block';
   }
   nextBtn.addEventListener('click', () => {
    currentQuestion++ ;
    if (currentQuestion < questions.length) {
    loadQuestion() ;
    nextBtn.style.display = 'none' ;
    resultElement.textContent = '' ;
    } else {
    questionElement.textContent = " Quiz terminé ! Votre score est"  + score +  "/" + questions.length ;
    optionsElement.innerHTML = '' ;
    nextBtn.style.display = 'none';
    }
   }) ;
   loadQuestion() ;