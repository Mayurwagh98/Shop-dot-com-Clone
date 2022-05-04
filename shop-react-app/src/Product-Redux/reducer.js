import {CART, PRODUCTS} from "./action"


export const Reducer=(store,{type,payload})=>{
    switch(type){
        case PRODUCTS:
            return{...store,products:[payload]}
     
        case CART:
            return{...store,cart:[payload]}
    
        default:
            return store
    }
}
 