<template>
  <div class="card m-4" style="width: 18rem;">
    <img :src="urlImg" class="card-img-top" :alt="title">
    <div class="card-body text-start">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">{{ description }}</p>
    </div>
    <div class="d-flex justify-content-between card-offcanvas">
      <MyOffcanvas />
      <p>$ {{ price }}</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, defineProps } from 'vue';
import MyOffcanvas from './MyOffcanvas.vue';
import { useStore } from 'vuex';

const props = defineProps({
  dataProduct: Object
});

const store = useStore();
const title = ref('');
const description = ref('');
const price = ref('');
const urlImg = ref('');

onMounted(() => {
  try {
    title.value = props.dataProduct.product.name;
    description.value = props.dataProduct.product.description;
    price.value = props.dataProduct.product.value;
    urlImg.value = props.dataProduct.product.url;
  } catch (error) {
    console.log(error);
  } finally {
    store.commit('setDialogTrue', false)
  }
})
</script>

<style lang="scss" scoped>
@import '../assets/scss/main.scss';

.card {
  cursor: pointer;
  img {
    height: 200px;
  }
  &-body {
    background-color: $white;
  }

  &-title {
    color: $orange-dark;
    font-family: "Playfair Display";
  }

  &-text {
    color: $green;
  }

  &-offcanvas {
    background: $white;
    padding-right: 10px;
    color: $orange-dark;
  }
}
</style>