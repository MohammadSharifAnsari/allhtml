
const quizstore=document.getElementById('quiz')

const buttonstore=document.getElementById('submit')

const resultstore=document.getElementById('result')

const myquestion=[
    {
    question:"what is the capital of franch?",
answer:{
a:"paris",
b:"london",
c:"new-york"
},
correctanswer:"a"

},
    {
    question:"which is the largest country in the  world?",
answer:{
a:"Australia",
b:"China",
c:"Russia"
},
correctanswer:"c"

},
{
    question:"What is the currency of Japan?",
answer:{
a:"Yuan",
b:"Euro",
c:"Yen"
},
correctanswer:"c"

},
{
    question:"What is the national animal of india?",
answer:{
a:"Tiger",
b:"Elephant",
c:"Cow"
},
correctanswer:"a"

}

]

function buildquiz(){
    const output=[];
myquestion.forEach((currentquestion,questionnumber) => {
    const answers=[];
    for(letter in currentquestion.answer){

    answers.push(`<label><input type="radio" name="question${questionnumber}" value="${letter}"/>${letter}:${currentquestion.answer[letter]}</label>`)

   }
//    console.log(answers);
output.push(`<div class="question">${currentquestion.question}</div>
<div class="answer">${answers.join('')}</div>`)



});
// console.log(output);
quizstore.innerHTML=output.join('');
}



function showresult(){
let numcorr=0;
const answercontainers=quizstore.querySelectorAll('.answer');

myquestion.forEach((currentquestion,questionnumber)=>{

   const answercontainer=answercontainers[questionnumber];
   const selector=`input[name=question${questionnumber}]:checked` ;
   const userans=(answercontainer.querySelector(selector)||{}).value;
  console.log(userans);
  console.log(currentquestion.correctanswer);
  if(userans===currentquestion.correctanswer){
numcorr++;
answercontainers[questionnumber].style.color='green';
  }
  else{
      answercontainers[questionnumber].style.color='red';
    }
    
})

resultstore.innerHTML=`${numcorr} out of ${myquestion.length}`
}


buildquiz();
buttonstore.addEventListener('click',showresult);

