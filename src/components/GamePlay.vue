<template>
	<div>
		<Question
			v-if="questions && numTotal < 10"
			:question="questions[questionIndex]"
			:next="next"
			:increment="increment"
			@pushToArray="pushToRightOrFalse"
		></Question>
		<GameOver
			v-if="numTotal >= 10"
			:numCorrect="numCorrect"
			:correctQuestions="correctQuestions"
			:wrongQuestions="wrongQuestions"
		></GameOver>
		<QuizResults :numTotal="numTotal"></QuizResults>
	</div>
</template>

<script>
import axios from 'axios';
import QuizResults from './QuizResults.vue';
import Question from './Question';
import GameOver from './GameOver';

export default {
	name: 'Game',
	components: {
		Question,
		QuizResults,
		GameOver
	},
	data() {
		return {
			correctQuestions: [],
			wrongQuestions: [],
			questions: {},
			score: 0,
			questionIndex: 0,
			numTotal: 0,
			numCorrect: 0
		};
	},
	created() {
		axios.get('https://opentdb.com/api.php?amount=10&type=multiple').then((res) => {
			this.questions = res.data.results;
			// console.log(this.questions);
		});
	},
	methods: {
		next() {
			this.questionIndex++;
		},
		increment(isCorrect) {
			if (isCorrect) {
				this.numCorrect++;
			}
			this.numTotal++;
		},
		restartGame() {
			location.reload();
		},
		//Method that gets triggered after custom event to push questions to right array
		pushToRightOrFalse: function(value, question) {
			value ? this.correctQuestions.push(question) : this.wrongQuestions.push(question);
			this.increment(value);
		}
	}
};
</script>

<style></style>
