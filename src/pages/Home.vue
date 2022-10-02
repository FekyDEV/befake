<script>
import loginComponent from "../components/loginComponent.vue";
import postsComponentVue from "../components/postsComponent.vue";

export default {
  components: {
    loginComponent,
    postsComponentVue,
  },
};
</script>

<template>
  <loginComponent v-if="!this.$store.state.loggedIn" />
  <postsComponentVue v-else />
</template>
