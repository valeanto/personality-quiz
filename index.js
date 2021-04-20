var questions = [
  {
    title: "What is your name?",
    // validation (in function checkInput)to check that it is not minus one
    selectedAnswer: -1,
    listAnswers: ["Valentina", "John", "Bob"],
  },
  {
    title: "What is your age?",
    selectedAnswer: -1,
    listAnswers: ["20", "26", "22"],
  },
  {
    title: "What is your pet name?",
    selectedAnswer: -1,
    listAnswers: ["Dog", "Cat", "Hamster"],
  },
];

// iterate through questions
function iterate() {
  // get the sections container
  var quizArea = document.getElementById("quiz-area");

  // for loop into the questions
  for (i = 0; i < questions.length; i++) {
    // group of questions
    var questionsDiv = document.createElement("div");
    quizArea.append(questionsDiv);

    var p = document.createElement("p");
    p.innerText = questions[i].title;
    questionsDiv.append(p);
    // Group of answers
    var answersContainer = document.createElement("div");
    questionsDiv.append(answersContainer);

    var answers = questions[i].listAnswers;

    for (var j = 0; j < answers.length; j++) {
      var element = document.createElement("button");
      answersContainer.append(element);
      element.innerText = answers[j];
      // memorize the value of i and j
      // add two properties (put indices in the button object)
      element.questionIndex = i;
      element.answerIndex = j;

      element.addEventListener("click", function () {
        // always going to be the last value;
        //
        questions[this.questionIndex].selectedAnswer = this.answerIndex;
        shownQuestionIndex++;
        updateShownQuestion();
      });
    }
  }

  // function that goes through all the answers=

  // onclick and separate divs
  // in each section create a paragraph or a header element to contain the question string./
  // create a div to contain the list of answers.
  // for each answer assign the onclick event to select the index of the element into the question being iterated.
  // add the answers div to the section
  // to add the section to the secion's container
}
iterate();
var i;
// all questions have been answered
function checkInput() {
  for (i = 0; i < questions.length; i++) {
    if (questions[i].selectedAnswer == -1) {
      return false;
    }
  }
  return true;
}
// hide all questions and answer divs- keep a variable that starts with value zero and whenever we click on answer we incremment by one
// shown questions
var shownQuestionIndex = 0;

function updateShownQuestion() {
  // hide all questions
  // display only the ones that has index equals to shown index

  var quizArea = document.getElementById("quiz-area");
  var questions = quizArea.children;
  for (let i = 0; i < questions.length; i++) {
    // hide the elements that do not have the same index that should be there
    if (i == shownQuestionIndex) {
      questions[i].hidden = false;
    } else {
      questions[i].hidden = true;
    }
  }
  if (shownQuestionIndex > questions.length - 1) {
    generateFinalAnswer();
  }
}
updateShownQuestion();

function generateFinalAnswer() {
  // if the result of checkInput which is a boolean
  if (checkInput()) {
    // generate new answer
    var result = [];
    for (i = 0; i < questions.length; i++) {
      // get index from selected answer property
      // result += questions[i].listAnswers[questions[i].selectedAnswer];
      result.push(questions[i].selectedAnswer);
    }
    for (let i = 0; i < images.length; i++) {
      const image = images[i];
      const answers = image.answers;
      for (let j = 0; j < answers.length; j++) {
        const answer = answers[j];
        if (equateAnswers(answer, result)) {
          console.log("Answer Found at image:" + image.url);
        }
      }
    }
    console.log(result);
  } else {
    alert("unanswered question, you must answer all");
  }
}
function equateAnswers(answer1, answer2) {
  for (let i = 0; i < answer1.length; i++) {
    const element1 = answer1[i];
    const element2 = answer2[i];
    if (element1 != element2) {
      return false;
    }
  }
  return true;
}
var images = [
  {
    url: "image1",
    answers: [
      [0, 0, 0],
      [0, 1, 3],
    ],
  },
  {
    url: "image2",
    answers: [
      [0, 1, 2],
      [0, 3, 3],
    ],
  },
  {
    url: "image3",
    answers: [
      [0, 2, 2],
      [0, 1, 1],
    ],
  },
];

var answers = document.querySelectorAll(".answer");
var finalAnswer = [];
answers.forEach(addEvent);

// push data attribute in array
function addEvent(item) {
  item.addEventListener("click", function () {
    var answer = item.dataset.value;
    finalAnswer.push(answer);
    console.log(finalAnswer);
    return finalAnswer;
  });
  showOutputImage();
  //each section needs to have an answer-
}

// finalAnswer has limit of 3 items
//each sections must only have one answer
