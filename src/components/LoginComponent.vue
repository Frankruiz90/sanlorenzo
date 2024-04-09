<template>
  <div class="container login">
    <img src="../assets/logotipo.svg" class="login-img img-fluid" alt="">
    <div class="login-form container d-block">
      <div class="mb-3">
        <label for="" class=" text-start">Email</label>
        <input type="email" name="" id="" class="form-control" v-model="email">
      </div>
      <div class="mb-3">
        <label for="" class="text-start">Password</label>
        <input type="password" name="" id="" class="form-control" v-model="password">
      </div>
      <div class="mb-3">
        <button class="btn btn-outline-primary" @click="senData">Iniciar</button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { defineEmits, ref } from 'vue'

const emit = defineEmits(['login']);
const email = ref('');
const password = ref('');
const senData = () => {
  emit('login', email.value, password.value)
}
</script>

<style lang="scss" scoped>
.login {
  &-img {
    width: 200px;
    height: 200px;
  }

  &-form {
    display: flex;
    justify-content: center;
    width: 25%;
  }

  .text-start {
    width: 100%;
  }
}
</style>