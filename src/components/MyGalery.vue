<template>
  <section class="galery " v-if="viewGallery">
    <div class=" d-flex flex-lg-wrap justify-content-between">
      <div class="galery-container" v-for="(image, i) in props.images" :key="i">
        <img :src="image.url" class="galery-container__img img-fluid" :alt="image.id">
      </div>
    </div>

  </section>
</template>

<script setup>
import { defineProps, onMounted, ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const viewGallery = ref(false)
const props = defineProps({
  images: Array
})

onMounted(() => {
  console.log('carousel', props.images[0].id);
  if (props.images.length > 0) {
    store.commit('setDialogTrue', false);
    viewGallery.value = true
  }
})

</script>

<style lang="scss" scoped>
@import '../assets/scss/main.scss';

.galery {
  background-color: $green;
  width: 100%;
  // padding-bottom: 100px;
  // border-radius: 100% 0% 84% 16% / 23% 79% 21% 77% ;

  &-container {
    overflow: hidden;
    width: 33%;

    &__img {
      width: 100%;
      height: 320px;
      cursor: pointer;

      &:hover {
        transition: all 2s;
        -webkit-transform: scale(1.3);
        transform: scale(1.3);
      }

    }
  }
}
</style>