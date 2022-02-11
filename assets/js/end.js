const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
<<<<<<< HEAD

=======
// JSON.parse since value in local storage is a string
>>>>>>> working
const MAX_HIGH_SCORES = 5;


finalScore.innerText = mostRecentScore;

username.addEventListener("keyup", () => {
   saveScoreBtn.disabled = !username.value;
<<<<<<< HEAD
  
=======
   
>>>>>>> working
});


saveHighScore = (e) => {
    
    e.preventDefault();
<<<<<<< HEAD
 
=======
    
>>>>>>> working
    const scoreBoard = {
        score: mostRecentScore,
        name: username.value
    };

    highScores.push(scoreBoard);
<<<<<<< HEAD
    highScores.sort( (a,b) => b.score - a.score);
    highScores.splice(MAX_HIGH_SCORES);
=======
    highScores.sort( (a,b) => b.score - a.score); // if b is higher than a, b importance over a
    highScores.splice(MAX_HIGH_SCORES); // to keep just the top 5 scores
>>>>>>> working

    localStorage.setItem("highScores", JSON.stringify(highScores));
   
    window.location.assign("../../index.html");

};