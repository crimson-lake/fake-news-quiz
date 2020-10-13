const fullStar = "<i class=\"fas fa-star\"></i>";
const halfStar = "<i class=\"fas fa-star-half-alt\"></i>";

function Quiz() {
    this.currentQuestion = 0;
    this.lastQuestion = quizResources.length;
    this.result = 0;
}

Quiz.prototype.showNextQuestion = function() {
    if (this.currentQuestion != 0) {
        this.setProgress(this.currentQuestion - 1, fullStar);
    }
    if (this.currentQuestion == this.lastQuestion) {
        this.clearQuizBoard();
        this.showResult();
    } else {
        this.setProgress(this.currentQuestion, halfStar);
        var quizItem = quizResources[this.currentQuestion];
        
        $(".item-question").html(quizItem.question);
        for (let i = 0; i < quizItem.answers.length; i++) {
            $(".item-answer div").eq(i).html("<p>" + quizItem.answers[i] + "</p>");
        }
    }
}

Quiz.prototype.selectAnswer = function(value) {
    var quizItem = quizResources[this.currentQuestion];
    this.result += quizItem.results[value];
    this.currentQuestion++;
    this.showNextQuestion();
}

Quiz.prototype.setProgress = function(counter, icon) {
    $(".item-progress div").eq(counter).html(icon);
}

Quiz.prototype.clearQuizBoard = function() {
    $(".item-answer").removeClass("item-answer").addClass("item-your-result").html("");
    $(".item-question").remove();
}

Quiz.prototype.showResult = function() {
    if (this.result > 4) {
        $(".item-your-result").load("fragments/resultNo.html");
    } else {
        $(".item-your-result").load("fragments/resultYes.html");
    }
    console.log(this.result);
}