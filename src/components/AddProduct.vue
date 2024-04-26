<template>
  <div class="container add">
    <h1 class="add-title">Agregar producto</h1>
    <form @submit.prevent="updateimg" class="container col-12 d-flex flex-wrap justify-content-lg-between"
      enctype="multipart/form-data">
      <div class=" col-6  p-4">
        <label for="" class="text-start">Categoria</label>
        <select class="form-select form-control" v-model="category" placeholder="Seleccione una categoria" required>
          <option value="carousel">Carrusel</option>
          <option value="gallery">Galeria</option>
          <option value="products">Producto</option>
        </select>

      </div>
      <div class=" col-6  p-4" v-if="category === 'products'">
        <label for="" class="text-start">Tipo de producto</label>
        <select class="form-select form-control" v-model="productType">
          <option value="bakery">Panaderia</option>
          <option value="cakes">pasteles</option>
        </select>

      </div>

      <div class=" col-6  p-4" v-if="category">
        <label for="" class="text-start">Nombre</label>
        <input class="form-control" type="text" placeholder="Nombre producto" v-model="name" required>
      </div>
      <div class=" col-6  p-4" v-if="category === 'products'">
        <label for="" class="text-start">Descripcion</label>
        <input class="form-control" type="text" placeholder="Descripcion del producto" v-model="description">
      </div>
      <div class=" col-6  p-4" v-if="category === 'products'">
        <label for="" class="text-start">Valor</label>
        <input class="form-control" type="number" placeholder="Valor del producto" v-model="value">
      </div>
      <div class=" col-6  p-4" v-if="category">
        <label for="" class="text-start">Imagen</label>
        <input class="form-control" type="file" accept="image/*" id="formFile" @change="imageSelected($event)">
      </div>
      <div class="col-12 d-grid gap-2 px-5" v-if="category">
        <button class="btn btn-success mb-4"> Agregar</button>
        <button class="btn btn-danger mb-4"> Salir</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { myStorage, refFire, uploadbytes, getUrl, getDocsFire, dbFire, docFire, collectionFire, setDocFire } from '@/utils/firebase';
import { useStore } from 'vuex';

const name = ref('');
const productType = ref('');
const description = ref('');
const value = ref('');
const category = ref('');
const img = ref('');
const urlImg = ref('')
const store = useStore();

onMounted(async () => {
  const querySnapshot = await getDocsFire(collectionFire(dbFire, "carousel"));
  console.log(querySnapshot);
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
  });
})

const cleanData = (() => {
  name.value = '';
  productType.value = '';
  description.value = '';
  value.value = '';
  category.value = '';
  img.value = '';
  urlImg.value = '';
})

const sendData = (async () => {
  try {
    const colectionRef = collectionFire(dbFire, category.value);
    if (category.value != 'products' ) {
      await setDocFire(docFire(colectionRef, name.value.toLowerCase()
        .replace(" ", "_")), {
        url: urlImg.value
      })
    } else {
      await setDocFire(docFire(colectionRef, name.value.toLowerCase()
        .replace(" ", "_")), {
        name: name.value,
        productType: productType.value,
        description: description.value,
        value: value.value,
        category: category.value,
        url: urlImg.value
      })
    }
  } catch (error) {
    console.log(error);
  } finally {
    category.value = '';
    cleanData();
    store.commit('setDialogTrue', false)

  }
})

const imageSelected = ((e) => {
  img.value = e.target.files[0];
})

const updateimg = (async () => {
  try {
    store.commit('setDialogTrue', true)
    const storageRef = refFire(myStorage, `/${category.value}/${name.value.toLowerCase()
        .replace(" ", "_")}`);
    await uploadbytes(storageRef, img.value).then(
      (snapshot) => {
        console.log('uploaded', snapshot);
      }
    )
  } catch (error) {
    console.log(error);

  } finally {
    recoverurlImg()
  }
}
)

const recoverurlImg = (async () => {
  try {
    await getUrl(refFire(myStorage, `/${category.value}/${name.value.toLowerCase()
        .replace(" ", "_")}`)).then(
      (doloaw_url) => urlImg.value = doloaw_url
    )
  } catch (error) {
    console.log(error);
  } finally {
    sendData();
  }
})
</script>

<style lang="scss" scoped>
@import '../assets/scss/main';


.add {
  &-title {
    @extend .middle-title;
    color: $green;
  }

  .text-start {
    width: 100%;
  }
}
</style>