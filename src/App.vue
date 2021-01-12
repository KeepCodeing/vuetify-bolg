<template>
  <v-app>
    <NavBar />
    <v-main>
      <router-view />
<!--      <FrontPage />
      <Articles />-->
    </v-main>
  </v-app>
</template>

<script>
  import NavBar from "./components/NavBar";
  import FrontPage from "./components/Home/FrontPage";
  import Articles from "./components/Home/Articles";

  export default {
    name: 'App',
    components: {
      NavBar,
      FrontPage,
      Articles,
    },
    data: () => ({
    }),
  };
</script>
