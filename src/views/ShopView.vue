<template>
  <div class="pt-5 shop">
    <h1 class="big-title">Mi Pedido</h1>
    <div v-if="amount>0">
      <v-table theme="dark"  >
        <thead>
          <tr>
            <th class="text-left">
              Producto
            </th>
            <th class="text-left">
              Cantidad
            </th>
            <th class="text-left">
              Valor Unitario
            </th>
            <th class="text-left">
              Total Producto
            </th>
          </tr>
        
        </thead>
        <tbody>
          <tr v-for="(item, i ) in cardShop" :key="i">
            <td class="text-left">{{ item.title }}</td>
            <td class="text-left">
              <div class="d-flex ">
                <div class="input-group shop-amount">
                  <v-btn class="btn btn-decrease" size="x-small" type="button" id="button-addon1" 
                    :disabled="item.amount <= 0" @click="newAmount(i,'rest')"><v-icon icon="$minus" size="small">
                    </v-icon></v-btn>
                  <input type="number" class="form-control input-number" placeholder="Cantidad" v-model="item.amount"
                    aria-label="Example text with button addon" aria-describedby="button-addon1"  @input="newTotal(i)">
                  <v-btn class="btn " size="x-small" type="button" id="button-addon2" @click="newAmount(i,'add')" >
                    <v-icon icon="$plus" size="small"></v-icon>
                  </v-btn>
                </div>
              </div>
            </td>
            <td class="text-left">{{ item.price }}</td>
            <td class="text-left">{{ item.total }}</td>
          </tr>
        </tbody>
        <tbody class="">
          <tr >
            <td></td>
            <td></td>
            <td></td>
            <td class="text-left">
              <strong >
                Total: ${{ totalPrice }}
              </strong>
            </td>
  
          </tr>
  
        </tbody>
      </v-table>
      <div class="my-5 d-flex justify-content-evenly " >
        <v-btn>Cancelar</v-btn>
        <v-btn>Comprar</v-btn>
  
      </div>
      
    </div>
    <h2 class="medium-title" v-if="!amount">No hay productos</h2>
  </div>
</template>

<script setup>

import {  onMounted,  computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const cardShop = computed(() => store.state.shopCar);
const amount = computed(() => store.getters.totalAmount);

onMounted(() => {
  store.commit('setDialogTrue', false);
})
const newTotal = (index) => {
  const product = cardShop.value[index];
  product.total = product.price * product.amount;  
}

const newAmount = (i,operation)=> {
  console.log('newAmount');
  const product = cardShop.value[i];
  operation == 'add'? product.amount ++ : product.amount --;
  newTotal(i);
}

const totalPrice = computed(() => store.getters.totalPrice)

</script>

<style lang="scss" scoped>
@import '../assets/scss/main.scss';

.shop {
  .big-title {
    color: $coffe;
  }
  &-amount{
    width: 120px;
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
}
</style>