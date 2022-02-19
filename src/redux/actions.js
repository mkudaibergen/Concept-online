import { ADD_TO_CART, ALL_PRODUCTS, AUTH_CHECK, CATEGORY_PRODUCT, CONFIRM_MODAL_CLOSE, CONFIRM_MODAL_OPEN, DELETE_ALL, GET_PRODUCTS, PRODUCT_DESCRIPTION, PRODUCT_INFO_CLOSE, PROFILE_MODAL_CLOSE, PROFILE_MODAL_OPEN, REMOVE_FROM_CART, REMOVE_PRODUCT, SEARCH_PRODUCT } from "./types";


export function AuthCheck(value, login){
    return {
        type: AUTH_CHECK, 
        value, 
        login
    }
}

export function CategoryProduct(data){
    return {
        type: CATEGORY_PRODUCT, 
        data
    }
}

export function AllProducts(data){
    return {
        type: ALL_PRODUCTS, 
        data
    }
}
export function GetProducts(id, name){
    return {
        type: GET_PRODUCTS, 
        id, 
        name
    }
}

export function ProductDescription(value, id){
    return {
        type: PRODUCT_DESCRIPTION, 
        value,
        id
    }
}

export function ProductInfoClose(value){
    return {
        type: PRODUCT_INFO_CLOSE,
        value
    }
}

export function AddToCart(id){
    return {
        type: ADD_TO_CART,
        id
    }
}

export function RemoveFromCart(id){
    return {
        type: REMOVE_FROM_CART,
        id
    }
}

export function ProfileModalOpen(value){
    return {
        type: PROFILE_MODAL_OPEN,
        value
    }
}

export function ProfileModalClose(value){
    return {
        type: PROFILE_MODAL_CLOSE,
        value
    }
}

export function RemoveProduct(id){
    return {
        type: REMOVE_PRODUCT,
        id
    }
}

export function ConfirmModalOpen(value){
    return {
        type: CONFIRM_MODAL_OPEN,
        value
    }
}

export function ConfirmModalClose(value){
    return {
        type: CONFIRM_MODAL_CLOSE,
        value
    }
}

export function SearchProduct(value){
    return {
        type: SEARCH_PRODUCT,
        value
    }
}

export function DeleteAll(){
    return {
        type: DELETE_ALL
    }
}

