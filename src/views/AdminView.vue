<template>
  <div>
    <div v-if="!viewAdmin">
      <LoginComponent @login="verificationData" />
    </div>
    <div v-else>
      <AdminComponent />

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import AdminComponent from '@/components/AdminComponent.vue';
import LoginComponent from '@/components/LoginComponent.vue';
import { auth } from '@/utils/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useStore } from 'vuex';

let viewAdmin = ref(false)
const store = useStore();

store.commit('setDialogTrue', false)

const verificationData = (email, password) => {
  signInWithEmailAndPassword(auth, email, password).then((data) => {
    if (data.user) {
      viewAdmin.value = true
    }
  }).catch(function (error) {
    console.log(error);
    window.alert("Correo o contraseña erronea");
    // ...
  });
}

</script>
<style lang="scss" scoped></style>