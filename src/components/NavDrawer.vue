<template>
  <v-navigation-drawer temporary app v-model="showMenu" class="indigo">
    <v-list>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            Welcome to Vuetify Blog
          </v-list-item-title>
          <v-list-item-subtitle>
            Menu
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-divider />
    <v-list rounded>
      <v-list-item-group>
        <v-list-item :to="'/home'" class="white--text">
          <v-list-item-icon>
            <v-icon>mdi-folder</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <span>hello</span>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default {
    name: "NavDrawer",
    data() {
      return {
        showMenu: false,
      }
    }
  }
</script>

<style scoped>

</style>
