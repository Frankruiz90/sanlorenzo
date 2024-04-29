<template>
  <div class="form ">
    <h1 class="big-title">Información personal </h1>
    <v-form class="mt-3" @submit.prevent="sendForm()">
      <v-container>
        <v-row>
          <v-col cols="12" md="12">
            <v-text-field v-model="firstname" :counter="3" :rules="nameRules" label="Nombre"></v-text-field>
          </v-col>

          <v-col cols="12" md="12">
            <v-text-field v-model="lastname" :counter="3" :rules="nameRules" label="Apellidos" required></v-text-field>
          </v-col>
          <v-col cols="12" md="12">
            <v-text-field v-model="email" :counter="5" :rules="emailRules" label="E-mail" required></v-text-field>
          </v-col>
          <v-col cols="12" md="12">
            <v-text-field v-model="celnumber" :counter="10" :rules="numberRules" label="Celular" class="form-cel"
              required></v-text-field>
          </v-col>

        </v-row>
      </v-container>
      <v-btn class="mt-2" type="submit" block :disabled="!(valid.name && valid.celnumber && valid.email)">Submit</v-btn>
    </v-form>

    <a href="https://api.whatsapp.com/api/send?phone=573206907990&text=esto%20es%20una%20prueba%20para%20la%20api%20de%20whatsapp" style="font-size:20px;padding:5px 12px;border-radius:5px;background-color:#189D0E;color:white;text-shadow:none;"> ›› Mensaje de WhatsApp </a>
  </div>
</template>

<script setup>
import { ref } from 'vue'


// const valid = ref(false);
const firstname = ref('');
const lastname = ref('');
const celnumber = ref();
const valid = ref({})
const numberRules = [
  value => {
    if (value) return true;
    valid.value.celnumber = false;
    return 'El numero de celular requerido.'
  },
  value => {
    if (!isNaN(value) && value?.length >= 10) {
      valid.value.celnumber = true;
      return true;
    }
    valid.value.celnumber = false;
    return 'El Celular debe tener minimo 10 caracteres y ser numero'
  }
]
const nameRules = [
  value => {
    if (value) return true;
    valid.value.name = false;
    return 'El nombre es reuqerido.'
  },
  value => {
    if (value?.length >= 3) {
      valid.value.name = true;
      return true
    }
    valid.value.name = false;

    return 'El nombre debe tener mas de 3 caracteres.'
  },
];
const email = ref('');
const emailRules = [
  value => {
    if (value) return true
    valid.value.email = false;
    return 'E-mail is requred.'
  },
  value => {
    if (/.+@.+\..+/.test(value)) {
      valid.value.email = true;
      return true
    }
    valid.value.email = false;
    return 'E-mail must be valid.'
  },
]

const sendForm = (async () => {
  console.log('entre');

})
</script>

<style lang="scss" scoped>
@import '../assets/scss/main';

.form {
  .big-title {
    color: $coffe;

  }
}
</style>