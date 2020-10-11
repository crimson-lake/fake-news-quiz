const fullStar = "<i class=\"fas fa-star\"></i>";
const halfStar = "<i class=\"fas fa-star-half-alt\"></i>";

function Quiz() {
    this.currentQuestion = 0;
    this.lastQuestion = quizResources.length;
    this.starCounter = this.lastQuestion - this.currentQuestion;
}

Quiz.prototype.showQuestion = function() {
    this.setProgress(this.starCounter--, fullStar);
    if (this.currentQuestion == this.lastQuestion) {
        $(".item-result").css("display", "block");
    } else {
        this.setProgress(this.starCounter, halfStar);
        var quizItem = quizResources[this.currentQuestion];
        
        $(".item-question").html(quizItem.question);
        for (let i = 0; i < quizItem.answers.length; i++) {
            $(".item-answer div").eq(i).html("<p>" + quizItem.answers[i] + "<p>");
        }
        this.currentQuestion++;
    }
}

Quiz.prototype.setProgress = function(counter, icon) {
    $(".item-progress div").eq(counter).html(icon);
}