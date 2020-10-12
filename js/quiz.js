const fullStar = "<i class=\"fas fa-star\"></i>";
const halfStar = "<i class=\"fas fa-star-half-alt\"></i>";

function Quiz() {
    this.currentQuestion = 0;
    this.lastQuestion = quizResources.length;
    this.starCounter = this.lastQuestion - this.currentQuestion;
    this.result = 0;
}

Quiz.prototype.showNextQuestion = function() {
    this.setProgress(this.starCounter--, fullStar);
    if (this.currentQuestion == this.lastQuestion) {
        $(".item-result").css("display", "block");
    } else {
        this.setProgress(this.starCounter, halfStar);
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

Quiz.prototype.showResult = function() {
    $(".item-answer").removeClass("item-answer").addClass("item-your-result");
    $(".item-question").remove();
    if (this.result > 4) {
        $(".item-your-result").html("<p>Nie jesteś. Dobra robota!</p>")
    } else {
        $(".item-your-result").html("<p>Żółte napisy w Tobie silne!</p>")
    }
    console.log(this.result);
}