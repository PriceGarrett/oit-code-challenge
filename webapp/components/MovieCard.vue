<template>
  <div class="movie-card-container">
    <img class="poster" v-bind:src= "movie.poster_image_url"/>
    <div class="details">
        <p class="title">{{ movie.title }}</p>
    <p class="summary">{{ movie.popularity_summary }} votes</p>
    </div>
  </div>
</template>

<script>

export default {
  name: "MovieCard",
  methods: {},
  props: {
    movie: Object,
  },
};
</script>

<style>
.movie-card-container {
  margin: 5px;
  width: 300px; 
  height: 550px;
  border: 1px solid #ccc;
  padding: 10px;
  box-sizing: border-box;
  background-color: #c9c9c9;
}

.poster {
  width: 100%;
  height: 400px;
  object-fit: cover;
}

.details{
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

}

.title {
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
}

.summary {
  font-size: 14px;
  color: #666;
  margin-top: 5px;
}
</style>
