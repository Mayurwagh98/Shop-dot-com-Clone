import { legacy_createStore as createStore } from "redux";

import { Reducer } from "./Product-Redux/reducer";
 
export const store = createStore(Reducer,{products:[],cart:[]})

// store.subscribe(()=>{
//     console.log(store.getState())
// })