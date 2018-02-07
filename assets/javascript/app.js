var panel = $("#quiz-area");

var quizQuestions = [
{
	question: "What is Nintendo's best selling franchise?",
	choices: ["The Legend of Zelda", "Pokemon", "Mario", "Donkey Kong"],
	correctAnswer: "Mario"
},
{
	question: "What is the capital of France?",
	choices: ["Bordeaux", "Paris", "Avignon", "Lyon"],
	correctAnswer: "Paris"
},
{
	question: "Who was the 27th President of the United States?",
	choices: ["Donald Trump", "Grover Cleveland", "Woodrow Wilson", "William Howard Taft"],
	correctAnswer: "William Howard Taft"
},
{
	question: "What is the largest ocean in the world?",
	choices: ["Atlantic", "Pacific", "Arctic", "Indian"],
	correctAnswer: "Pacific"
},
{
	question: "What color jersey is worn by the winners of each stage of the Tour de France?",
	choices: ["Yellow", "Red", "Blue", "Green"],
	correctAnswer: "Yellow"
}];

var timer;

var game = {
	correct: 0,
	incorrect: 0,
	counter: 30,

	countdown: function() {
		game.counter--;
		$("#counter-number").html(game.counter);
		if (game.counter === 0) {
			console.log("TIME'S UP!!");
			game.done();
		}
	},

	start: function() {
		timer = setInterval(game.countdown, 1000);

		$("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>30</span> Seconds</h2>");
		$("#start").remove();

		for (var i = 0; i < quizQuestions.length; i++) {
			panel.append("<h2>" + quizQuestions[i].question + "</h2>");
			for (var j = 0; j < quizQuestions[i].choices.length; j++) {
				panel.append("<input type='radio' name='question-" + i 
					+ "' value='" + quizQuestions[i].choices[j] + "''>" + quizQuestions[i].choices[j]);
			}
		}

		panel.append("<button id='done'>Done</button>");
	},

	done: function() {
		$.each($("input[name='question-0']:checked"), function() {
			if ($(this).val() === quizQuestions[0].correctAnswer) {
				game.correct++;
			} else {
				game.incorrect++;
			}
		});

		$.each($("input[name='question-1']:checked"), function() {
			if ($(this).val() === quizQuestions[1].correctAnswer) {
				game.correct++;
			} else {
				game.incorrect++;
			}
		});

		$.each($("input[name='question-2']:checked"), function() {
			if ($(this).val() === quizQuestions[2].correctAnswer) {
				game.correct++;
			} else {
				game.incorrect++;
			}
		});

		$.each($("input[name='question-3']:checked"), function() {
			if ($(this).val() === quizQuestions[3].correctAnswer) {
				game.correct++;
			} else {
				game.incorrect++;
			}
		});

		$.each($("input[name='question-4']:checked"), function() {
			if ($(this).val() === quizQuestions[4].correctAnswer) {
				game.correct++;
			} else {
				game.incorrect++;
			}
		});

		this.result();
	},

	result: function() {
		clearInterval(timer);
		$("#sub-wrapper h2").remove();
		panel.html("<h2>All Done!</h2>");
		panel.append("<h3>Correct Answers: " + this.correct + "</h3>");
		panel.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
		panel.append("<h3>Unanswered Questions: " + (quizQuestions.length - (this.incorrect + this.correct)) + "</h3>");

	}
};

$(document).on("click", "#start", function(){
	game.start();
});

$(document).on("click", "#done", function(){
	game.done();
});