<template>
  <div class="container-offcanvas">
    <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop"
      >Ver mas</button>
    <div class="offcanvas offcanvas-end" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
      <v-btn
          density="comfortable"
          class="container-offcanvas__icon"
          icon="$close"
          variant="plain"
          data-bs-dismiss="offcanvas" aria-label="Close"
        ></v-btn>
      <img src="../assets/img/1.jpg" class="img-fluid" alt="">
      <div class="offcanvas-header">
        <br>
        <h5 class="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
      </div>
      <div class="offcanvas-body">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem id repudiandae dolorem rerum sapiente saepe,
          cumque perferendis dolores nisi necessitatibus deleniti quibusdam voluptatum natus debitis facere adipisci cum
          aliquid officiis?
        </p>
      </div>
      <v-btn
          class="container-offcanvas__icon "
          data-bs-dismiss="offcanvas" aria-label="Close"
        >Cancelar</v-btn>
    </div>
  </div>
</template>
<script setup>
</script>
<style lang="scss" scoped>
@import '../assets/scss/main';

.container-offcanvas {
  padding-bottom: 5px;
  padding-left: 10px;
  display: flex;

  .btn {
    background-color: $coffe !important;
    border: none;
    color: $white;
  }

  .offcanvas {
    background-color: $white;
    &.v-btn__content {
      background-color: $white;
    }
  }


}
</style>