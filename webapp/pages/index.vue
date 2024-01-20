<template>
  <div class="container">
  <div class="header">
    <h1>Movie Search</h1>
    <form class="search-form" @submit.prevent="submitSearchQuery">
      <input class="searchbar" v-model="searchText" />
      <button class="submit-button" type="submit">Submit</button>
    </form>
  </div>
  <div v-if="foundResults">
    <SearchDisplay :movies= "this.movieList"></SearchDisplay>
  </div>
  <div v-else>

  </div>
  </div>
</template>

<script>
import SearchDisplay from '../components/SearchDisplay.vue';

export default {
  name: 'IndexPage',
  components:{
    SearchDisplay,
  },
  data(){
  return {
    searchText: "",
    movieList: []
  };
},
computed:{
  foundResults(){
    return this.movieList.length > 0
  }
},
methods: {
  submitSearchQuery(){
  const url = `http://localhost:3000/movies?search=${this.searchText}`

  try{
    fetch(url, {
    method: "GET", 
    mode: "cors",
  })
    .then(resp => {
      if(resp.ok){
        return resp.json()
      }
      if(!resp.ok){
        throw new Error(resp.status);
      }
    })
    .then(movies => {
      this.movieList = []
      this.movieList.push(...movies)
      console.log(this.movieList)
    })
    .catch(error => {
      console.log(error)
    })
  } catch(error) {
    console.log("error", error);
  }

},
}

}

</script>

<style>
.header{
  display: flex;
  padding: 10px;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
}
</style>
