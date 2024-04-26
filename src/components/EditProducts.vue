<template>
  <div>
    <div class=" col-12  p-4">
      <label for="" class="text-start">Categoria</label>
      <select class="form-select form-control" v-model="category" placeholder="Seleccione una categoria"
        @change="getColecction">
        <option value="carousel">Carrusel</option>
        <option value="gallery">Galeria</option>
        <option value="products">Producto</option>
      </select>
    </div>
    <div class="d-flex flex-wrap">
      <v-card class="m-4" width="240" v-for="(image, i) in images" :key="i">
        <v-img height="200px" class="mb-4" :src="image.data.url" cover></v-img>
        <v-spacer></v-spacer>
        <div>
          <div class=" p-2" v-if="category === 'products'">
            <label for="" class="text-start">Tipo de producto</label>
            <select class="form-select form-control" v-model="image.data.productType">
              <option value="bakery">Panaderia</option>
              <option value="cakes">pasteles</option>
            </select>

          </div>

          <div class="   p-2" v-if="category">
            <label for="" class="text-start">Nombre</label>
            <input class="form-control" type="text" placeholder="Nombre producto" v-model="image.data.name" required>
          </div>
          <div class="   p-2" v-if="category === 'products'">
            <label for="" class="text-start">Descripcion</label>
            <input class="form-control" type="text" placeholder="Descripcion del producto" v-model="image.data.description">
          </div>
          <div class="   p-2" v-if="category === 'products'">
            <label for="" class="text-start">Valor</label>
            <input class="form-control" type="number" placeholder="Valor del producto" v-model="image.data.value">
          </div>
          <div class="   p-2" v-if="category">
            <label for="" class="text-start">Imagen</label>
            <input class="form-control" type="file" accept="image/*" id="formFile" @change="imageSelected($event)">
          </div>
        </div>
        <v-card-actions>
          <v-btn class="mb-4" color="red" @click="deleted(image)">Eliminar</v-btn>
          <v-btn class="mb-4" color="#e3a135" >Modificar</v-btn>
          <v-btn class="mb-4" color="#953012" >Guardar</v-btn>

        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script setup>

import { collectionFire, dbFire, getDocsFire, deletedFire, docFire, myStorage, refFire, deletedStorage } from '@/utils/firebase';
import { onMounted, ref } from 'vue';
// import { useStore } from 'vuex';

// const idSelected = ref('es
const images = ref([]);
const category = ref([]);
// const name = ref('');
// const productType = ref('');
// const description = ref('');
// const value = ref('');
// const img = ref('');
// const urlImg = ref('')

onMounted(async () => {
})

const getColecction = (async () => {
  images.value = []
  try {
    const querySnapshot = await getDocsFire(collectionFire(dbFire, category.value));
    querySnapshot.forEach((doc) => {
      images.value.push({ id: doc.id, data: doc.data() })
    });
  } catch (error) {
    console.log(error);
  }
}
)

const deleted = (async (image) => {
  try {

    await deletedFire(docFire(dbFire, category.value, image.id))
    const storage = myStorage;
    const desertRef = refFire(storage, image.url);
    deletedStorage(desertRef).then(() => {
      // File deleted successfully
    }).catch((error) => {
      // Uh-oh, an error occurred!
      console.log(error);
    });
  } catch (error) {
    console.log(error);
  } finally {
    images.value = [];
    getColecction();
  }


}
)

</script>

<style lang="scss" scoped></style>