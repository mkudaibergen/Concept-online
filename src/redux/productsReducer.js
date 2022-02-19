import { ALL_PRODUCTS, CATEGORY_PRODUCT, GET_PRODUCTS } from "./types";

const initialState = {
    categories: [], 
    products: [], 
    activeId: '',
    activeCategory: ''
}

export const productsReducer = (state=initialState, action)=>{
    switch(action.type){
        case CATEGORY_PRODUCT: 
            return {
                ...state, 
                categories: action.data
            }
        case ALL_PRODUCTS:
            return {
                ...state, 
                products: action.data
            }
        case GET_PRODUCTS: 
            return {
                ...state, 
                activeId: action.id, 
                activeCategory: action.name
            }
        default: 
            return state
    }
}