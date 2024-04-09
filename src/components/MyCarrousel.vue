<template>
  <v-carousel class="carrousel" v-if="vueCarrousel" show-arrows="hover" cycle   :continuous="true">
    <v-carousel-item v-for="(image, i) in props.images" :key="i" >
      <img :src="image.url" :ref="image.id"></v-carousel-item>
  </v-carousel>
</template>
<script setup>
import { defineProps, onMounted, ref } from 'vue';

const vueCarrousel = ref(false)
const props = defineProps({
  images: Array
})

onMounted(() => {
  if (props.images.length > 0) {
    vueCarrousel.value = true
  }
})
</script>

<style lang="scss" scoped>
@import '../assets/scss/main';



.bi-chevron-left,
.bi-chevron-right {

  color: $white;
}
</style>