<template>
  <div class="container">
    <b-card
      :title="(data.id).toString() "
      class="m-2 p-2"
      tag="article"
      style="width: 100%; height: 100px; display: inline-block"
    >
      <b-card-text class="card-text">{{ data.body }}
      </b-card-text>
      <b-button variant="primary" 
      :to="{name:'product',params:{id:data.id,data:data}}">Editar</b-button>
      <b-button variant="secondary" @click="eliminarTarea(data.id)"
          >Eliminar</b-button>

        <b-button variant="success" @click="addCarr(data)"
          >ADD</b-button>
    </b-card>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import {mapState} from 'vuex'
import _ from 'lodash';
export default {
  name: 'ProductCard',
  props: {
    data: {
      typeof: Object,
      required: true
    }
  },
  computed:{
      ...mapState('Mproducts',['products'])
  },
  methods:{
      ...mapActions("Mproducts",['DELETE_PRODUCT']),
      eliminarTarea(id){
          this.DELETE_PRODUCT(id)
      },
      addCarr(product){
          var busqueda = _.find(this.products,['id',product.id])
          console.log(busqueda)
      }
  }
}
</script>

<style scoped>
.card-text {
  width: 230px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>
