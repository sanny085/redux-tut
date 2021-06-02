import {ADD_TO_CART,REMOVE_TO_CART} from '../constants'
export const addToCart =(data)=>{
   // console.warn("action",data)
    return {
        type:ADD_TO_CART,
        payload:data
    }
}

export const removeToCart = (eachData) => {
    console.warn("action removeToCart",eachData);
    return {
        type:REMOVE_TO_CART, 
        payload:eachData
    }
}