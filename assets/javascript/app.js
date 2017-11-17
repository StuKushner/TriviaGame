var correct;
var incorrect;
var unanswered;
var countdown = 30;

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

function timer() {
	$(".timer").html("Time Remaining: " + countdown + " seconds.");
	var timer = setInterval(clockTicking, 1000);
	function clockTicking() {
		if (countdown == 0) {
			clearTimeout(timer);
			alert("Time's Up!");
			finalScreen();
		} else if (countdown > 0) {
			countdown--;
			$(".timer").html("Time Remaining: " + countdown + " seconds.");
		}
	}
}

function game() {
	timer();

	for (var i = 0; i < quizQuestions.length; i++) {
		$("#quiz").append("<p><strong>" + quizQuestions[i].question + "</strong></p>");
		for (var j = 0; j < quizQuestions[i].choices.length; j++) {
			$("#quiz").append(' <input type="radio" name="val'+i+'" value="'+i+'"> ' + quizQuestions[i].choices[j]);	
			}
		}
	
	$("#submitButton").click(function() {
		correct = 0;
		incorrect = 0;
		unanswered = 5;
		$("input[type='radio']:checked").each(function() {
			//If the value of the clicked radio button is the same as the correct answer, the correct counter increments
			//and the unanswered counter decrements. If the value isn't the same, the incorrect counter increments and the
			//unanswered counter decrements
		})
		clearTimeout(timer);
		finalScreen();
	});
}

function finalScreen() {
	$(".container").hide();
	clearTimeout(timer);
	$("#correct").html("Correct Answers: " + correct);
	$("#incorrect").html("Incorrect Answers: " + incorrect);
	$("#unanswered").html("Unanswered Questions: " + unanswered);
	$("#message").html("Press Reload To Play Again!");
}

$(document).ready(function(){
	$(".container").hide();
	$("#startButton").click(function(){
		$(".container").fadeIn();
		$("#startButton").hide();
		game();
		$(this).hide();
	})

});