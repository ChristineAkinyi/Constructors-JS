class Car{
    constructor (make,model,year,isAvailable = true){

        this.make = make;
        this.model = model;
        this.year = year;
        this.isAvailable = isAvailable;
    }

    toggleAvailability(){
        this.isAvailable = !this.isAvailable;
    }
}

const toyota = new Car("Subaru", "Impreza", 2001, true);
console.log(toyota.isAvailable);
toyota.toggleAvailability();
console.log(toyota.isAvailable);

class Rental{
    constructor(car, renterName, rentalStartDate, rentalEndDate){
        this.car = car;
        this.renterName = renterName;
        this.rentalStartDate = rentalStartDate;
        this.rentalEndDate = rentalEndDate;
    }

    calculateRentalDuration(){
        const rentalDuration = this.rentalEndDate - this.rentalStartDate
       const durationInDays = this.rentalEndDate - this.rentalStartDate / oneDay;
        return diffDays;
    }
}

const myCar = new Car('Toyota', 'Camry', 2020);

// Creating a rental instance
const myRental = new Rental(myCar, 'John Doe', '2023-05-01', '2023-05-07');


const rentalDuration = myRental.calculateRentalDuration();
console.log(`The rental duration is ${rentalDuration} days.`);

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

   // Creating a quiz instance
const myQuiz = new Quiz();

// Adding questions to the quiz
myQuiz.addQuestion(new Question("What is the capital of France?", ["Paris", "London", "Berlin"], "Paris"));
myQuiz.addQuestion(new Question("What is the largest planet in our solar system?", ["Earth", "Mars", "Jupiter"], "Jupiter"));

// Simulating user answering questions
myQuiz.submitAnswer("Paris"); // Correct answer
myQuiz.submitAnswer("Mars"); // Incorrect answer

// Checking the final score
console.log(`Your final score is ${myQuiz.score} out of ${myQuiz.questions.length}.`);


   