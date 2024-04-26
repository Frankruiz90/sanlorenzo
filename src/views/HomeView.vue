<template>
  <div>
    <MyCarrousel :images="imagesCarousel" v-if="imagesCarousel.length > 0" />
    <MyGalery  :images="imagesGallery" v-if="imagesGallery.length > 0"/>
    <SectionProducts />
  </div>
</template>

<script setup>
import MyCarrousel from '@/components/MyCarrousel.vue';
import MyGalery from '@/components/MyGalery.vue';
import SectionProducts from '@/components/SectionProducts.vue';
import { collectionFire, dbFire, getDocsFire } from '@/utils/firebase';
import { onMounted, ref } from 'vue';
import { useStore } from 'vuex';
const store = useStore();

const imagesCarousel = ref([]);
const imagesGallery = ref([]);
onMounted(async () => {
  try {
    store.commit('setDialogTrue', true);
    const querySnapshot = await getDocsFire(collectionFire(dbFire, "carousel"));
    querySnapshot.forEach((doc) => {
      imagesCarousel.value.push({ id: doc.id, url: doc.data().url })
    });
  } catch (error) {
    console.log(error);
  } finally {
    getgallery();
  }
})
const getgallery= ( async() => {
  try {
    store.commit('setDialogTrue', true);
    const querySnapshot = await getDocsFire(collectionFire(dbFire, "gallery"));
    querySnapshot.forEach((doc) => {
      imagesGallery.value.push({ id: doc.id, url: doc.data().url })
    });
  } catch (error) {
    console.log(error);
  } finally {
    console.log('imagesGallery',imagesGallery);
  }
})
</script>

<style lang="scss" scoped></style>
