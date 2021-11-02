<template>
    <div class="container">

        <b-card-group  >
        <ProductCard  v-for="(product) in products" :key="product.id" :data="product"  >
      </ProductCard>
        </b-card-group>
       
    </div>
</template>

<script>
import ProductCard from '@/Empresa/Components/ProductCard'
import { mapActions} from 'vuex'
import {mapState} from 'vuex'
import Datos from '@/Datos/datos'
export default {
    name:'Products',
    components:{
        ProductCard
    },
    data(){
        return{
            dat:"hola",
            item:[{nombre:"franco",edad:"24"},
            {nombre:"juan",edad:"34"}]
        }
    },
    created(){
        this.GET_ALL_PRODUCTS()
        console.log(Datos)
       
    },
    computed:{
        ...mapState('Mproducts',['products']),
    },
    methods:{
        ...mapActions("Mproducts",["GET_ALL_PRODUCTS"]),
       
    }    
}
</script>
