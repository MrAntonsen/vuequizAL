<template>
  <div class="container mt-5">
    <div class="card" v-if="question">
      <div class="card-header">
        {{ question.category }}
      </div>
      <div class="card-body">
        <h6>{{ question.question }}</h6>
        <b-list-group>
          <b-list-group-item
            v-for="(answer, index) in answers"
            :key="index"
            @click="selectAnswer(index)"
            :class="answerClass(index)"
            >{{ answer }}</b-list-group-item
          >
        </b-list-group>
        <button
          class="btn btn-success text-center mt-3"
          :disabled="selectedIndex === null || answered"
          :class="[selectedIndex === null || answered ? 'inactiveButton' : '']"
          v-on:click="submitAnswer()"
        >
          Submit
        </button>
        <b-button
          @click="next"
          class="btn btn-primary text-center mt-3"
          :disabled="!answered"
          >Next</b-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
export default {
  name: "Question",
  props: {
    question: Object,
    next: Function,
    increment: Function
  },
  data() {
    return {
      answers: {},
      selectedIndex: null,
      correctIndex: null,
      answered: false
    };
  },
  watch: {
    immediate: true,
    question: function() {
      this.selectedIndex = null;
      this.answered = false;
      if (this.question) {
        let answers = [
          this.question.correct_answer,
          ...this.question.incorrect_answers
        ];

        this.answers = _.shuffle(answers);
        this.correctIndex = this.answers.indexOf(this.question.correct_answer);
      }
    }
  },
  methods: {
    selectAnswer(index) {
      this.selectedIndex = index;
    },
    submitAnswer() {
      let isCorrect = false;
      if (this.selectedIndex === this.correctIndex) {
        isCorrect = true;
      }
      this.answered = true;
      this.$emit("pushToArray", isCorrect, this.question.question);
    },
    answerClass(index) {
      let answerClass = "";
      if (!this.answered && this.selectedIndex === index) {
        answerClass = "selected";
      } else if (this.answered && this.correctIndex === index) {
        answerClass = "correct";
      } else if (
        this.answered &&
        this.selectedIndex === index &&
        this.correctIndex !== index
      ) {
        answerClass = "incorrect";
      }
      return answerClass;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list-group {
  margin-bottom: 15px;
}
.list-group-item:hover {
  background: #eee;
  cursor: pointer;
}
.btn {
  margin: 0 5px;
}
.selected {
  background-color: lightblue;
  color: black;
}
.correct {
  background-color: lightgreen;
}
.incorrect {
  background-color: red;
  color: white;
}
.inactiveButton {
  background-color: rgba(255, 254, 254, 0.534) !important;
  color: black !important;
  cursor: not-allowed;
}
</style>
