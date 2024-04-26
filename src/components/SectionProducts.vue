<template>
  <section class="section py-5">
    <h1 class="mb-4">
      Nuestaras lineas de negocio
    </h1>
    <p class="text-center container">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, id temporibus qui quasi, odio debitis error
      nemo a, esse reprehenderit molestiae aperiam! Non aspernatur reprehenderit quibusdam iure dolorem ducimus
      repellendus!
    </p>
    <div class="container d-flex flex-lg-wrap justify-content-between mt-0">
      <div class=" section-products"><img class="section-products__img img-fluid"
          src="//img1.wsimg.com/isteam/ip/90e09eca-32d3-459f-b224-307b2002673e/DSC_1769%20copy.jpg/:/cr=t:0%25,l:16.62%25,w:66.76%25,h:100%25/rs=w:365,h:365,cg:true"
          alt="">
        <div>
          <h4 class=" section-text my-4 section-title"> Panaderia</h4>
          <p class="section-paragraph">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci non eius expedita beatae velit
            recusandae iste magnam optio sequi laboriosam vitae iure soluta, repudiandae perspiciatis. Est
            consectetur accusamus praesentium commodi!
          </p>
        </div>
      </div>
      <div class=" section-products"><img class="section-products__img img-fluid"
          src="//img1.wsimg.com/isteam/ip/90e09eca-32d3-459f-b224-307b2002673e/DSC_1769%20copy.jpg/:/cr=t:0%25,l:16.62%25,w:66.76%25,h:100%25/rs=w:365,h:365,cg:true"
          alt="">
        <div>
          <h4 class=" section-text my-4 section-title"> Panaderia</h4>
          <p class="section-paragraph">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci non eius expedita beatae velit
            recusandae iste magnam optio sequi laboriosam vitae iure soluta, repudiandae perspiciatis. Est
            consectetur accusamus praesentium commodi!
          </p>
        </div>
      </div>
      <div class=" section-products"><img class="section-products__img img-fluid"
          src="//img1.wsimg.com/isteam/ip/90e09eca-32d3-459f-b224-307b2002673e/DSC_1769%20copy.jpg/:/cr=t:0%25,l:16.62%25,w:66.76%25,h:100%25/rs=w:365,h:365,cg:true"
          alt="">
        <div>
          <h4 class=" section-text my-4 section-title"> Panaderia</h4>
          <p class="section-paragraph">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci non eius expedita beatae velit
            recusandae iste magnam optio sequi laboriosam vitae iure soluta, repudiandae perspiciatis. Est
            consectetur accusamus praesentium commodi!
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@import '../assets/scss/main';

.section {
  background-color: $white;

  &-products {
    margin: 0 10px;
    max-width: 300px;

    &__img {
      width: 100%;
      border-radius: 100%;
    }
  }

  &-title {
    color: $green;
    font-weight: bold;
  }

  &-paragraph {
    color: $green;
  }
}
</style>