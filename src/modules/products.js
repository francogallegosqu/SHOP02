import Products from '@/api/Products'

export default {
    namespaced:true,
    state:{
        products:[],
    },
    mutations:{
        SET_PRODUCTS(state,payload){
            state.products = payload
        },
        DELETE_PRODUCT(state,id){
            state.products = state.products.filter(e => e["id"] !=id)
        }
    },
    actions:{
        GET_ALL_PRODUCTS({commit}){
            Products.get().then(response =>{
            commit('SET_PRODUCTS',response.data)
            
        }).catch(error => console.error(error))
        },
        DELETE_PRODUCT({commit},id){
            commit('DELETE_PRODUCT',id)
        }
    }
}