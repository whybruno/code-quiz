// Document Selectors

var scoresButton = document.querySelector('.scores');

// highScoresDisplay() : organize and retrieve scores from localStorage

function highScoresDisplay() {
  var highScores = JSON.parse(window.localStorage.getItem('highscores')) || [];
  
  highScores.sort(function(a, b) {
    return b.score - a.score;
  });
  
  highScores.forEach(function(score) {
    var liElement = document.createElement('li');
    liElement.textContent = score.user + " - " + score.score;
    var olElement = document.getElementById('highscores');
    olElement.appendChild(liElement);
  });
};

// clearHighscores() : clear scoreboard after clicking on clearButton

function highScoresClear() {
  window.localStorage.removeItem('highscores');
  window.location.reload();
};

document.getElementById('clear').onclick = highScoresClear;

// Global Function Caller
  
highScoresDisplay();