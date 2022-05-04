export const PRODUCTS= "PRODUCTS"
 export const CART="CART"

export const products=(data)=>{
    
    return{
        type:PRODUCTS,
        payload:data
    }
}
 export const cart=(data)=>{
     
     return{
         type:CART,
         payload:data
     }
 }