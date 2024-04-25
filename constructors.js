// QUESTION ONE
class Car {
    constructor(make, model, year, isAvailable) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.isAvailable = isAvailable;
    }
    toggleAvailability() {
      this.isAvailable = !this.isAvailable;
    }
  }
  
  class Rental {
    constructor(car, renterName, rentalStartDate, rentalEndDate) {
      this.car = car;
      this.renterName = renterName;
      this.rentalStartDate = rentalStartDate;
      this.rentalEndDate = rentalEndDate;
    }
    calculateRentalDuration() {
      const startDate = this.rentalStartDate.getTime();
      const endDate = this.rentalEndDate.getTime();
      const duration = endDate - startDate;
      return Math.ceil(duration / (1000 * 60 * 60 * 24)); 
    }
  }
  
  const thisCar = new Car("Ford", "Jetta", 2020, true);
  
  const rentalInfo = new Rental(thisCar, "John Doe", new Date("2024-04-20"), new Date("2024-04-25"));
  
  const rentalDuration = rentalInfo.calculateRentalDuration();
  console.log("Rental duration:", rentalDuration, "days");


// QUESTION TWO
class Question {
    constructor(text, options, correctAnswer) {
       this.text = text;
       this.options = options;
       this.correctAnswer = correctAnswer;
    }
   
    checkAnswer(answer) {
       if(answer === this.correctAnswer){
        return true;
       } else {
        return false;
       } ;
    }
   }

   class Quiz {
    constructor(questions, currentQuestionIndex, score) {
       this.questions = [];
       this.currentQuestionIndex = 0;
       this.score = 0;
    }
   
    addQuestion(question) {
       this.questions.push(question);
    }
   
    nextQuestion() {
       if (this.currentQuestionIndex < this.questions.length - 1) {
           this.currentQuestionIndex++;
       } else {
           console.log("You are at the end of the quiz.");
       }
    }
   
    submitAnswer(answer) {
       const currentQuestion = this.questions[this.currentQuestionIndex];
       if (currentQuestion.checkAnswer(answer)) {
           this.score++;
           console.log("Correct!");
       } else {
           console.log("Incorrect.");
       }
       this.nextQuestion();
    }
   }

const myQuiz = new Quiz();

myQuiz.addQuestion(new Question("What is the capital of France?", ["Paris", "London", "Berlin"], "Paris"));
myQuiz.addQuestion(new Question("What is the largest planet in our solar system?", ["Earth", "Mars", "Jupiter"], "Jupiter"));

myQuiz.submitAnswer("Paris"); 
myQuiz.submitAnswer("Mars"); 

console.log(`Your final score is ${myQuiz.score} out of ${myQuiz.questions.length}.`);


   