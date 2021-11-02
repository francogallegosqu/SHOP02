<template>
  <div class="container">
    <h2 class="test-center">Details Products</h2>
    <h3>{{ product.id }}</h3>
    <h3>{{ product.body }}</h3>
    <template>
      <div>
        <b-button v-b-toggle.sidebar-1>Toggle Sidebar</b-button>
        <b-sidebar id="sidebar-1" title="Sidebar" shadow>
          <div class="px-3 py-2">
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </p>
            <b-img
              src="https://picsum.photos/500/500/?image=54"
              fluid
              thumbnail
            ></b-img>
          </div>
        </b-sidebar>
      </div>
    </template>
  </div>
</template>

<script>
import Product from '@/api/Products'
export default {
  props: {
    id: {
      type: [Number, String],
      default: null
    }
  },
  data() {
    return {
      product: {}
    }
  },
  created() {
    Product.getId(this.id).then((response) => {
      console.log(response)
      this.product = response.data
    })
    console.log(this.id)
  }
}
</script>
