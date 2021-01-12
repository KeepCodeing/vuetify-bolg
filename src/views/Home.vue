<template>
  <div>
    <FrontPage />
    <Articles />
  </div>
</template>

<script>
  import FrontPage from "../components/Home/FrontPage";
  import Articles from "../components/Home/Articles";
  export default {
    name: "Home",
    components: {
      FrontPage,
      Articles,
    }
  }
</script>

<style scoped>

</style>
