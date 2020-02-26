<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>Game Over</h3>
      </div>
      <div class="card-body">
        <p>
          <b
            >You had the right answer on {{ numCorrect }} questions. You seem
            like a pretty {{ level }} person, congratulations</b
          >
        </p>
        <h3>Wrong answers</h3>
        <b-list-group class="wrong">
          <b-list-group-item
            class="wrong-item"
            v-for="(ques, index) in wrongQuestions"
            :key="index"
            >{{ ques }}</b-list-group-item
          >
        </b-list-group>
        <h3>Correct answers</h3>
        <b-list-group class="correct">
          <b-list-group-item
            class="correct-item"
            v-for="(ques, index) in correctQuestions"
            :key="index"
            >{{ ques }}</b-list-group-item
          >
        </b-list-group>
        <router-link to="/"
          ><b-button class="btn btn-primary text-center mt-3" @click="refresh"
            >Play Again</b-button
          ></router-link
        ><span>Score: {{ numCorrect * 10 }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    numCorrect: Number,
    restart: Function,
    correctQuestions: Array,
    wrongQuestions: Array
  },
  methods: {
    refresh() {
      this.$emit("restart");
    }
  },
  beforeMount() {
    if (this.numCorrect <= 3) {
      this.level = "Dumb";
    } else if (this.numCorrect <= 6) {
      this.level = "Average";
    } else if (this.numCorrect <= 9) {
      this.level = "Pretty clever";
    } else {
      this.level = "Insane in the membrane";
    }
  },
  data() {
    return {
      level: String
    };
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto+Slab&display=swap");
.correct {
  border: 2px solid green;
  background-color: rgb(114, 255, 86);
}
.wrong {
  border: 2px solid red;
  background-color: rgb(235, 65, 65);
}
.wrong-item {
  border-bottom: 1px solid red;
}
.correct-item {
  border-bottom: 1px solid green;
}
h3 {
  font-family: "Roboto Slab", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  margin-top: 1.3rem;
}
span {
  position: absolute;
  right: 5rem;
  top: 1.3rem;
  font-size: 2rem;
  color: indigo;
}
</style>
