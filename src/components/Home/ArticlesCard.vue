<template>
  <v-card
    to="/home"
    flat
    tile
  >
    <v-img
      :height="col === 4 ? 330 : 380"
      width="100%"
      :src='image'
      gradient="rgba(0, 0, 0, .42), rgba(0, 0, 0, .42)"
    >
      <v-row align="start" class="fill-height">
        <v-col :cols="11" class="text-right mt-3 white--text">
          <v-btn depressed tile small dark class="mb-3">tags</v-btn>
          <p class="text-h4 font-weight-black mb-0 red--text darken-3">Hello Blog</p>
          <p class="subtitle-1 heading mb-0">position</p>
          <p class="subtitle-1 text-overline">date</p>
        </v-col>
        <v-col :cols="11" align-self="end" class="text-right">
          <v-btn small depressed tile class="yellow lighten-2 text-overline">Read More</v-btn>
        </v-col>
      </v-row>
    </v-img>
  </v-card>
</template>

<script>
  export default {
    name: "ArticlesCard",
    props: {
      col: {
        type: Number,
        required: true,
      },
      image: {
        type: String,
        required: true,
      }
    }
  }
</script>

<style scoped>

</style>
