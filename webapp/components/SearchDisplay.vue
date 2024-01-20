<template>
    <div class="search-display-container">
        <div v-for="item in movies" :key="item.index">
            <MovieCard :movie="item"></MovieCard>
        </div>
    </div>
</template>


<script>
import MovieCard from './MovieCard.vue';

export default {
    name: "SearchDisplay", 
    components: {
        MovieCard,
    },
    props:{
        movies: Array,
    }
}
</script>

<style>
.search-display-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 20px;
    padding: 0% 5%;
}

</style>