const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
// JSON.parse since value in local storage is a string
const MAX_HIGH_SCORES = 5;


finalScore.innerText = mostRecentScore;

username.addEventListener("keyup", () => {
   saveScoreBtn.disabled = !username.value;
   
});


saveHighScore = (e) => {
    
    e.preventDefault();
    
    const scoreBoard = {
        score: mostRecentScore,
        name: username.value
    };

    highScores.push(scoreBoard);
    highScores.sort( (a,b) => b.score - a.score); // if b is higher than a, b importance over a
    highScores.splice(MAX_HIGH_SCORES); // to keep just the top 5 scores

    localStorage.setItem("highScores", JSON.stringify(highScores));
   
    window.location.assign("../../index.html");

};