<template>
  <div class="container-offcanvas">
    <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas"
      :data-bs-target="`#staticBackdrop${props.index}`" :aria-controls="`staticBackdrop${props.index}`">Ver mas</button>
    <div class="offcanvas offcanvas-end" data-bs-backdrop="static" tabindex="-1" :id="`staticBackdrop${props.index}`"
      aria-labelledby="staticBackdropLabel">
      <v-btn density="comfortable" class="container-offcanvas__icon" icon="$close" variant="plain"
        data-bs-dismiss="offcanvas" aria-label="Close"></v-btn>
      <img :src="urlImg" class="img-fluid" alt="">
      <div class="offcanvas-header">
        <br>
        <h5 class="offcanvas-title" id="offcanvasRightLabel">{{ title }}</h5>
      </div>
      <div class="offcanvas-body text-orange">
        <p>
          {{ description }}
        </p>
      </div>
      <div class="d-flex justify-space-evenly align-center col-12">
        <div class="col-5 text-orange">
          <p><strong> Precio ${{ price }}</strong></p>
        </div>

        <div class="input-group mb-3 px-5 ">
          <v-btn class="btn btn-decrease" size="x-small" type="button" id="button-addon1" :disabled="amount <= 0"
            @click="amount--"><v-icon icon="$minus" size="small">

            </v-icon></v-btn>
          <input type="number" class="form-control input-number" placeholder="Cantidad" v-model="amount"
            aria-label="Example text with button addon" aria-describedby="button-addon1">
          <v-btn class="btn " size="x-small" type="button" id="button-addon2" @click="amount++">
            <v-icon icon="$plus" size="small"></v-icon>
          </v-btn>
        </div>
      </div>
      <div class="d-flex justify-space-evenly">
        <v-btn rounded="lg" data-bs-dismiss="offcanvas" aria-label="Close">Cancelar</v-btn>
        <v-btn rounded="lg" :disabled="amount <= 0" @click="addShopCard()" data-bs-dismiss="offcanvas">
          Agregar
        </v-btn>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref, defineProps } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const title = ref('');
const description = ref('');
const price = ref('');
const urlImg = ref('');
const amount = ref(0);

const props = defineProps({
  dataProduct: Object,
  index: String
});

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
@import '../assets/scss/main';

.container-offcanvas {
  padding-bottom: 5px;
  padding-left: 10px;
  display: flex;

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

  .offcanvas {
    background-color: $white;

    &.v-btn__content {
      background-color: $white;
    }
  }


}
</style>