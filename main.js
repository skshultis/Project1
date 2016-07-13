$(document).ready(function() {
  // console.log("Your Mom");

var questions = [{
    question: "There are many different types of sharks, but we often only hear about a few of them. About how many different shark species are there?",
    choices: ["150", "340", "500", "1,200"],
    correctAnswer: 2
},  {
    question: "Which of these large shark species is known as the fastest of the sharks, with a top speed of 46 mph?",
    choices: ["Caribbean reef shark", "Shortfin Mako", "Gray reef shark", "Goblin shark"],
    correctAnswer: 1
},  {
    question: "The smallest species of shark is only seven inches long - what is its name?",
    choices: ["Greenland shark", "Japanese Angel shark", "Pale Catshark", "Dwarf Lantern shark"],
    correctAnswer: 3
},  {
    question: "Which shark species was descibed by Jacques Cousteau as being 'the most dangerous of all sharks'?",
    choices: ["Oceanic Whitetip", "Great White", "Bull shark", "Blacktip"],
    correctAnswer: 0
},  {
    question: "Which US state has the largest number of shark attacks per year?",
    choices: ["Florida", "California", "Hawaii", "North Carolina"],
    correctAnswer: 0
},  {
    question: "Which shark species is known as the largest?",
    choices: ["Great White", "Lemon", "Whale shark", "Blue shark"],
    correctAnswer: 2
},  {
    question: "Which color is believed to be the most visible and interesting to sharks?",
    choices: ["Black", "Blue", "Yellow", "Red"],
    correctAnswer: 2
},  {
    question: "What prey is known as the hammerhead's favorite meal?",
    choices: ["Stingray", "beachgoer", "Baby hammerhead", "Krill"],
    correctAnswer: 0
},  {
    question: "Most sharks can only live in the ocean, but one species is known for its ability to survive in brackish water. Which one is it?",
    choices: ["Nurse shark", "Bull shark", "Wobbegong shark", "Southern catshark"],
    correctAnswer: 1
},  {
    question: "In July of 1916, five people were attacked by a shark over the course of only 12 days, with only one surviving victim. Where did this series of unusual attacks occur?",
    choices: ["Gansbaai, South Africa", "Florida, US", "New Jersey, US", "Isla Guadalupe, Mexico"],
    correctAnswer: 2
},  {
    question: "Which species is likely responsible for the majority of shark attacks in the US?",
    choices: ["Nurse shark", "Lemon shark", "Bull shark", "Hammerhead"],
    correctAnswer: 2
}, {
    question: "Tiger sharks are known to have particularly long migratory patterns, with the longest on record reaching 27,000 miles. What's the average distance for a tiger shark's annual migration?",
    choices: ["2,890 miles", "4,660 miles", "13,500 miles", "16,000 miles"],
    correctAnswer: 1
// },  {
//     question: "The female blue shark's skin is three times thicker than that of males of the same species; why?",
//     choices: ["To keep her warmer during pregnancy", "Extra fat stores prevent hunger at the time of birth, preventing her from eating her pups", "Reduced risk of injury as a result of males' mating bites", "The extra skin increases bouyancy so that the pups can be born nearer the ocean's surface"],
//     correctAnswer: 2
}, {
    question: "Everyone knows Megalodon was the biggest of all the prehistoric sharks - how big do scientists estimate the average Megalodon was?",
    choices: ["60 feet", "85 feet", "100 feet", "150 feet"],
    correctAnswer: 0
}, {
    question: "Researchers estimate that 100 million sharks are killed each year, causing many species to be endangered. Of the over 500 species known today, how many of those species are considered endangered?",
    choices: ["fewer than 30", "95", "170", "over 200"],
    correctAnswer: 3
},  {
    question: "Sharks are apex predators - they're at the top of their food chain. Which of these is NOT a way that sharks help maintain healthy ecosystems?",
    choices: ["They help manage prey populations", "They control the numbers of species that can overgraze ecosystems", "Their presence boosts dive and ecotourism", "They eat tourists who pollute beaches"],
    correctAnswer: 3
}];

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;

    // Display first question
    displayCurrentQuestion();
    // $(this).find(".answerPlease").hide();

    // Displays current Q and answers
    function displayCurrentQuestion() {

        // console.log("Current question");

        var question = questions[currentQuestion].question;
        var questionClass = $(document).find(".quizContainer > .question");
        var answerList = $(document).find(".quizContainer > .answerList");
        var numChoices = questions[currentQuestion].choices.length;

        // Set the questionClass text to the current question
        $(questionClass).text(question);

        $(answerList).find("li").remove();

        var choice;
        for (i = 0; i < numChoices; i++) {
            choice = questions[currentQuestion].choices[i];
            $('<li><input type="radio" value=' + i + ' name="dynradio" />' + choice + '</li>').appendTo(answerList);
        }
    }

    // Clicking next displays next Q
    $(this).find("button").on("click", function () {
        if (!quizOver) {

            value = $("input[type='radio']:checked").val();

            // Tells user to select answer if none is selected before pressing next
            if (value === undefined) {
                $(document).find(".answerPlease").text("Please select an answer above");
                $(document).find(".answerPlease").show();
            } else {
                $(document).find(".answerPlease").hide();

                // Calculate score
                if (value == questions[currentQuestion].correctAnswer) {
                    correctAnswers++;
                }

                currentQuestion++;

                if (currentQuestion < questions.length) {
                    displayCurrentQuestion();
                    displayScore();
                } else {
                    $(document).find(".nextButton").toggle();
                    $(document).find("button").text("Play again and increase your score!");
                    quizOver = true;
                }
            }
        } else {
            quizOver = false;
            $(document).find("button").text("Next Question");
            resetQuiz();
            displayCurrentQuestion();
        }
    });

    function displayScore() {
        $(document).find(".quizContainer > .result").text("You've answered " + correctAnswers + " questions out of " + questions.length + " correctly!");
        $(document).find(".quizContainer > .result").show();
    }

function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
}

});
