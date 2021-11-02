
import Api from './index'

export default{
    async get(){
        return Api.get('/posts')
    },
    async getId(id){
        return Api.get(`/posts/${id}`)
    }
}