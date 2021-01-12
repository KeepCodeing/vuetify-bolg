<template>
  <div>
    <nav>
      <v-app-bar app flat>
        <v-app-bar-nav-icon class="hidden-md-and-up" />
        <v-app-bar-title>
          <div>Vuetify-blog</div>
        </v-app-bar-title>
        <v-container>
          <v-row align="center">
            <v-btn
              class="hidden-sm-and-down"
              text v-for="item in tabs"
            >
              {{ item }}
            </v-btn>
            <v-spacer />
            <v-text-field
              hide-details
              append-icon="mdi-magnify"
              solo-inverted
              style="max-width: 300px"
              flat
            />
          </v-row>
        </v-container>
      </v-app-bar>
    </nav>

  </div>
</template>

<script>
  export default {
    name: "NavBar",
    data() {
     return {
       showMenu: false,
       tabs: ['Home', 'Message', 'About']
     }
    }
  }
</script>

<style scoped>

</style>
