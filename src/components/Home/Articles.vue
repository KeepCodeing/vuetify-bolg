<template>
  <v-container class="px-0">
    <v-row class="px-0">
      <v-col v-for="(col, idx) in cols" :cols="col" :key="idx">
        <ArticlesCard :col="col" :image="art_data[idx]" />
      </v-col>
    </v-row>


  </v-container>
</template>

<script>
  import ArticlesCard from "./ArticlesCard";
  export default {
    name: "Articles",
    components: {
      ArticlesCard,
    },
    data() {
      return {
        cols: [12, 6, 6, 4, 4, 4],
        art_data: [
          'https://w.wallhaven.cc/full/0q/wallhaven-0qvwl5.jpg',
          'https://w.wallhaven.cc/full/4y/wallhaven-4ye3v7.jpg',
          'https://w.wallhaven.cc/full/4d/wallhaven-4dm8vm.jpg',
          'https://w.wallhaven.cc/full/4o/wallhaven-4oq7m9.jpg',
          'https://w.wallhaven.cc/full/ne/wallhaven-ne19dr.jpg',
          'https://w.wallhaven.cc/full/mp/wallhaven-mp2158.jpg',
        ]
      }
    }
  }
</script>

<style scoped>

</style>
