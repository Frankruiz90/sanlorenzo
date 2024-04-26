<template>
  <section class="products py-4">
    <h1 class="products-title title mb-5">Conoce nuestros productos.</h1>
    <section class="d-flex justify-content-center flex-wrap">
      <h3 class="products-subtitle col-12" v-if="cakesProducts.length > 0">Pasteles</h3>
      <div class="" v-for="(dataProduct, i) in cakesProducts" :key="i">
        <MyCard :dataProduct="dataProduct" :index="'c' + i" />
      </div>
    </section>
    <section class="d-flex justify-content-center flex-wrap">
      <h3 class="products-subtitle col-12" v-if="bakeryProducts.length > 0">Panaderia</h3>
      <div class="" v-for="(dataProduct, i) in bakeryProducts" :key="i">
        <MyCard :dataProduct="dataProduct" :index="'b' + i" />
      </div>
    </section>
  </section>
</template>

<script setup>
import { collectionFire, dbFire, getDocsFire } from '@/utils/firebase';
import MyCard from '../components/MyCard.vue';
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex';
const store = useStore();

const dataProducts = ref([])
const cakesProducts = ref([])
const bakeryProducts = ref([])

onMounted(async () => {
  store.commit('setDialogTrue', true)
  const querySnapshot = await getDocsFire(collectionFire(dbFire, "products"));
  querySnapshot.forEach((doc) => {
    dataProducts.value.push({ id: doc.id, product: doc.data() });
  })
  cakesProducts.value = dataProducts.value.filter((product) => product.product.productType == 'cakes')
  bakeryProducts.value = dataProducts.value.filter((product) => product.product.productType == 'bakery')
})
</script>

<style lang="scss" scoped>
@import '../assets/scss/main.scss';

.products {
  background-color: $green;

  &-title {
    @extend .big-title;
  }

  &-subtitle {
    @extend .middle-title;
  }
}
</style>