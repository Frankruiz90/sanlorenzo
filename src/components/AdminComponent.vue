<template>
  <div class="container admin">
    <h1 class="admin-title title mb-4">hola admin</h1>
    <div class="btn-group" role="group" aria-label="Basic example">
      <button type="button" class="btn btn-primary" @click="changeValue()" :disabled="addProduct">Agregar</button>
      <button type="button" class="btn btn-primary" @click="changeValue()" :disabled="!addProduct">Modificar</button>
    </div>
    <AddProduct v-if="addProduct" />
    <EditProducts v-if="!addProduct" />
  </div>
</template>

<script setup>
import AddProduct from './AddProduct.vue';
import EditProducts from './EditProducts.vue';
import { ref } from 'vue';

const addProduct = ref(true)
const changeValue = (() => {
  addProduct.value = !addProduct.value
})
</script>

<style lang="scss" scoped>
@import '../assets/scss/main';

.admin {
  &-title {
    @extend .big-title;
    color: $green;
  }
}
</style>