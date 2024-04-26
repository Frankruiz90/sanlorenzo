<template>
  <div>
    <LoadingComponent />
    <MyNavbar />
    <router-view class="rout" />
    <MyFooter />
  </div>
</template>

<style lang="scss">
@import './assets/scss/main.scss';

body {
  background-color: $white;
}

#app {
  font-family: "Open Sans";
  font-style: normal;
  font-variation-settings:
    "wdth" 100;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}

.rout {
  margin-top: 7.90rem;
}
</style>

<script setup>
import MyNavbar from './components/MyNavbar.vue';
import MyFooter from './components/MyFooter.vue';
import { useStore } from 'vuex';
import { onMounted } from 'vue';
import LoadingComponent from './components/LoadingComponent.vue';

const store = useStore();

onMounted(() => {
  store.commit('setDialogTrue', true)
})
</script>
