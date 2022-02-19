import { CONFIRM_MODAL_CLOSE, CONFIRM_MODAL_OPEN, PRODUCT_DESCRIPTION, PRODUCT_INFO_CLOSE } from "./types";

const initialState = {
    productId: '',
    toggleProduct: false,
    toggleCart: false
}

export const modalReducer = (state = initialState, action)=>{
    switch(action.type){
        case PRODUCT_DESCRIPTION:
            return {
                toggleProduct: action.value, 
                productId: action.id
            } 
        case PRODUCT_INFO_CLOSE:
            return {
                toggleProduct: action.value
            }
        case CONFIRM_MODAL_OPEN:
            return {
                toggleCart: action.value
            }
        case CONFIRM_MODAL_CLOSE:
            return {
                toggleCart: action.value
            }
        default:
            return state
    }
}