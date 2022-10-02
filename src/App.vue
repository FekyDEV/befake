<script>
import ErrorToast from "./errorToast.vue";
export default {
  components: { ErrorToast },
};
</script>
<style>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
@-webkit-keyframes bounce-in {
  0% {
    -webkit-transform: scale(0);
  }
  50% {
    -webkit-transform: scale(1.25);
  }
  100% {
    -webkit-transform: scale(1);
  }
}
</style>
<template>
  <Transition name="bounce">
    <ErrorToast v-if="error.show" :text="error.text" />
  </Transition>
  <router-view />
</template>
