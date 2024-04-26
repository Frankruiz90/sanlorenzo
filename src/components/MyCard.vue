<template>
  <div class="card m-4" style="width: 19rem;" :id="props.index">
    <img :src="urlImg" class="card-img-top" :alt="title">
    <div class="card-body text-start">
      <h5 class="card-title">{{ title }}</h5>
      <p>$ {{ price }}</p>
      <p class="card-text">{{ description }} Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque at,
        molestias placeat sapiente praesentium aut possimus voluptatibus cupiditate quam eligendi quia. Dolor modi quis
        veniam sapiente accusamus dolores quaerat odio.</p>
    </div>
    <div class="d-flex align-center card-shop">
      <div class="input-group  px-8">
        <v-btn class="btn btn-decrease" size="x-small" type="button" id="button-addon1" :disabled="amount <= 0"
          @click="amount--"><v-icon icon="$minus" size="small">

          </v-icon></v-btn>
        <input type="number" class="form-control input-number" placeholder="Cantidad" v-model="amount"
          aria-label="Example text with button addon" aria-describedby="button-addon1">
        <v-btn class="btn " size="x-small" type="button" id="button-addon2" @click="amount++">
          <v-icon icon="$plus" size="small"></v-icon>
        </v-btn>
      </div>
      <div class="d-flex pe-3">
        <v-btn rounded="lg" :disabled="amount <= 0" @click="addShopCard()" color="green" size="small" class="btn-add">
          Agregar
        </v-btn>
      </div>

    </div>
    <div class="d-flex justify-center card-offcanvas">
      <MyOffcanvas :dataProduct="dataProduct" :index="index" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, defineProps } from 'vue';
import MyOffcanvas from './MyOffcanvas.vue';
import { useStore } from 'vuex';

const props = defineProps({
  dataProduct: Object,
  index: String
});

const store = useStore();
const title = ref('');
const description = ref('');
const price = ref('');
const urlImg = ref('');
const amount = ref(0);

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

const addShopCard = (() => {
  const dataProduc = {
    price: price.value,
    title: title.value,
    amount: amount.value,
    total: amount.value * price.value,
    edit: false
  }
  store.dispatch('addShopCar', dataProduc);
  amount.value = 0
  console.log(dataProduc);
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
    height: 50px;
    width: 100%;
    display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;  
  overflow: hidden;
  }

  &-shop {
    background: $white;
    padding: 10px 0 16px;
    color: $orange-dark;
  }

  .btn {
    background-color: $coffe ;
    border: none;
    color: $white;

    &-decrease {
      background-color: $orange;
    }
  }

  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
    text-align: center;
  }

  input[type=number] {
    -moz-appearance: textfield;
    text-align: center;
    height: 20px
  }

  &-offcanvas {
    background: $white;
    padding-right: 10px;
    color: $orange-dark;
  }
}
</style>