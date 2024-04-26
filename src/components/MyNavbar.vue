<template>
  <div>
    <nav class="nav navbar navbar-expand-lg fixed-top">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">
          <div class="nav-container__img">
            <svg :class="[sizeImg ? 'nav-img__small' : 'nav-img']">
              <image :class="[sizeImg ? 'nav-img__small' : 'nav-img']" xlink:href="../assets/logotipo.svg"
                src="../assets/logotipo.svg" />
            </svg>
          </div>
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <router-link class="me-3 " to="/">Inicio</router-link>
          <router-link class="me-3" to="products">Productos</router-link>
          <router-link class="me-3" to="about">Nosotros</router-link>
          <router-link class="me-3" to="shop">
            <svg-icon v-if="amount <= 0" type="mdi" :path="mdiCartOutline"></svg-icon>
            <v-badge v-if="amount > 0" color="success" :content="amount">
              <svg-icon type="mdi" :path="mdiCartOutline"></svg-icon>
            </v-badge>
          </router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiCartOutline } from '@mdi/js';
import { useStore } from 'vuex';

const store = useStore();
const amount = computed(() => store.getters.totalAmount);

let sizeImg = ref(false);
addEventListener('scroll', function () {
  window.scrollY > 1 ? sizeImg.value = true : sizeImg.value = false;
})

</script>
<style lang="scss" scoped>
@import '../assets/scss/main.scss';

.nav {
  background-color: $coffe;
  color: $orange;

  &-img {
    height: 6.25rem;
    width: 10.25rem;
    transition: all .5s ease-out;

    &__small {
      transition: all 1s ease-out;
      height: 50px;
      width: 86px;
    }
  }

}

nav a {
  color: $orange;
  font-weight: bold;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: $orange-dark;
}
</style>