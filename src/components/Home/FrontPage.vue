<template>
  <v-container>
    <v-row class="mt-3 px-0">
      <v-card
        class="align-content-center"
        flat
        tile
      >
        <v-img
          src="../../assets/images/minecraft-wallpaper3.png"
          height="400"
          width="100%"
        >
          <v-row class="fill-height" align="center" justify="center">
            <v-col :cols="7">
              <p class="text-h2 text-right white--text font-weight-medium">The Vuetify Blog</p>
              <p class="text-h4 text-right white--text font-weight-thin">Record you life and enjoy it</p>
              <p class="text-right">
                <v-btn
                  depressed
                  class="title red lighten-1 white--text text--darken-1"
                >
                  View More<v-icon>mdi-format-vertical-align-bottom</v-icon>
                </v-btn>
              </p>
            </v-col>
          </v-row>
        </v-img>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: "FrontPage"
  }
</script>

<style scoped>

</style>
