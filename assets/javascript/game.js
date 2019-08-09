// set up jquery
$(document).ready(function () {

    // VARIABLES

    var numToGuess = 0;
    var winsCount = 0;
    var lossesCount = 0;
    var crystalValueOne = 0;
    var crystalValueTwo = 0;
    var crystalValueThree = 0;
    var crystalValueFour = 0;
    var totalScore = 0;


    // FUNCTIONS

    // gameStart by generating and assigning the required random numbers
    var gameStart = function () {
        numToGuess = Math.floor(Math.random() * 101) + 19; // rand num between 19-120 for number-to-guess
        crystalValueOne = Math.floor(Math.random() * 12) + 1; //  rand num between 1-12 for crystal 1
        crystalValueTwo = Math.floor(Math.random() * 12) + 1; //  rand num between 1-12 for crystal 2
        crystalValueThree = Math.floor(Math.random() * 12) + 1; //  rand num between 1-12 for crystal 3
        crystalValueFour = Math.floor(Math.random() * 12) + 1; //  rand num between 1-12 for crystal 4
        $("#number-to-guess").text(numToGuess); // assign
        $("#crystal-1").text(crystalValueOne); // assign
        $("#crystal-2").text(crystalValueTwo); // assign
        $("#crystal-3").text(crystalValueThree); // assign
        $("#crystal-4").text(crystalValueFour); // assign

        // first crystal add to total score
        $("#crystal-1").on("click", function () {
            totalScore = totalScore + crystalValueOne; // add to total score
            $("#player-score").text("Total Score: " + totalScore); //  assign to HTML
            console.log("score: " + totalScore);
            scoreUpdate();
        });

        // second crystal add to total score
        $("#crystal-2").on("click", function () {
            totalScore = totalScore + crystalValueTwo; // add to total score
            $("#player-score").text("Total Score: " + totalScore); //  assign to HTML
            console.log("score: " + totalScore);
            scoreUpdate();
        });

        // third crystal add to total score
        $("#crystal-3").on("click", function () {
            totalScore = totalScore + crystalValueThree; // add to total score
            $("#player-score").text("Total Score: " + totalScore); //  assign to HTML
            console.log("score: " + totalScore);
            scoreUpdate();
        });

        // fourth crystal add to total score
        $("#crystal-4").on("click", function () {
            totalScore = totalScore + crystalValueFour; // add to total score
            $("#player-score").text("Total Score: " + totalScore); //  assign to HTML
            console.log("score: " + totalScore);
            scoreUpdate();
        });

        // if totalScore === numToGuess then you win, add to winsCount, restart game
        var scoreUpdate = function () {
            if (totalScore === numToGuess) {
                winsCount++;
                $("#wins-count").text(winsCount);
                resetGame();
            } else if (totalScore > numToGuess) {
                lossesCount++;
                $("#losses-count").text(lossesCount);
                resetGame();
            }
        }
    }


    gameStart();

    var resetGame = function () {
        numToGuess = Math.floor(Math.random() * 101) + 19; // rand num between 19-120 for number-to-guess
        crystalValueOne = Math.floor(Math.random() * 12) + 1; //  rand num between 1-12 for crystal 1
        crystalValueTwo = Math.floor(Math.random() * 12) + 1; //  rand num between 1-12 for crystal 2
        crystalValueThree = Math.floor(Math.random() * 12) + 1; //  rand num between 1-12 for crystal 3
        crystalValueFour = Math.floor(Math.random() * 12) + 1; //  rand num between 1-12 for crystal 4
        $("#number-to-guess").text(numToGuess); // assign
        $("#crystal-1").text(crystalValueOne); // assign
        $("#crystal-2").text(crystalValueTwo); // assign
        $("#crystal-3").text(crystalValueThree); // assign
        $("#crystal-4").text(crystalValueFour); // assign
        totalScore = 0;
        $("#player-score").text("Total Score: " + totalScore); //  assign to HTML

    }
});