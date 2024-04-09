<template>
  <div class="text-center">
    <v-dialog v-model="dialog" max-width="400" persistent>
      <img src="../assets/logotipo.svg" class="img-animation" />
    </v-dialog>
  </div>
</template>
<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const dialog = computed(() => store.state.dialog);
</script>

<style lang="scss" scoped>
@import '../assets/scss/_main.scss';

.img-animation {
  margin: 0 auto;
  animation: progress-beat 2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
}

@keyframes progress-beat {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.25);
  }

  100% {
    transform: scale(1);
  }
}
</style>