// questionsArr : store quiz questions

const questionsArr = [
  {
    forAsk: '1. Do we only have two ways to declare a variable in JavaScript?',
    forAnswer: false
  },
  {
    forAsk: '2. Does the operator !== describe that only the value is different?',
    forAnswer: false
  },
  {
    forAsk: `3. Is the syntax: const obj = ['first', 'second', 'third'] correct?`,
    forAnswer: true
  },
  {
    forAsk: '4. The if ( ) conditional will only work if it contains the else { } conditional?',
    forAnswer: false
  },
  {
    forAsk: '5. These are the three data types in JavaScript that cannot contain values: null, typeof and undefined?',
    forAnswer: false
  }
];

// Document Selectors

const timeSpan = document.querySelector("#time");
const startButton = document.querySelector("#start");
const questionsDiv = document.querySelector("#questions");
const questionTitle = document.querySelector("#question-title");
const trueButton = document.querySelector("#true");
const falseButton = document.querySelector("#false");
const endScreenDiv = document.querySelector("#end-screen");
const finalScore = document.querySelector("#final-score");
const initialsInput = document.querySelector("#initials");
const submitButton = document.querySelector("#submit");
const feedbackDiv = document.querySelector("#feedback");

// Global Variables

var timer;
var minTime = 0;
var userTime = 60;
var userScore = 0;