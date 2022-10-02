<script>
import MyButton from "../ui/Button.vue";
export default {
  components: {
    MyButton,
  },
  data() {
    return {
      copy: JSON.stringify({
        token: this.$store.state.token,
        refreshToken: this.$store.state.refreshToken,
      }),
    };
  },
};
</script>
<template>
  <div class="bg-blue-300 flex py-2 dark:bg-blue-900 dark:text-white">
    <div class="mr-auto invisible"></div>
    <div class="mr-auto">
      <a class="sm:text-3xl font-bold">BeFake</a>
    </div>
    <a
      href="https://github.com/rvaidun/berealviewer"
      class="mr-3 max-w-full max-h-full"
    >
      <img src="../../assets/github-svgrepo-com.svg" class="h-12" />
    </a>
    <MyButton v-clipboard:copy="copy">Copy Credentials</MyButton>
    <MyButton @click="this.$store.commit('logout')">Logout</MyButton>
  </div>
</template>
