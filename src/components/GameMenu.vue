<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-8 offset-2 text-center">
        <div class="game-menu">
          <b-card
            title="Start the Quiz"
            img-src="https://avisalofoten.no/media/cache/frontend_article_lg/bundles/global/uploads/articles/1/Quiz1.6326.jpg"
            img-alt="Image"
            img-top
            tag="article"
            class="mb-2 quiz-img"
          >
            <b-card-text>
              How smart are you?
            </b-card-text>

            <router-link to="/game"
              ><b-button variant="success" class="btn-lg"
                >Find out</b-button
              ></router-link
            >
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GameMenu",
  components: {}
};
</script>

<style scoped>
.b-card img {
  max-width: 512px;
  max-height: 350px;
}
</style>
