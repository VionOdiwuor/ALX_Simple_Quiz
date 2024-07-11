function checkAnswer(){
   let correctAnswer = ('4')

console.log('The correct answer is:',correctAnswer );
const selectedRadioButton = document.querySelector('input[name="quiz"] :checked')
if (selectedRadioButton) {
   const userAnswer = selectedRadioButton.value
 const correctAnswer = "4"
 if (userAnswer === correctAnswer){
   document.getElementById("feedback").textContent = "Correct!Well done.";

 }else{
   document.getElementById("feedback").textContent = "That's incorrect.Try again!";
   
 }
  
}
const submitButton = document.getElementById("submit-answer");
submitButton.addEventListener("click", checkAnswer);
}

