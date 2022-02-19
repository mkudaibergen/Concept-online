import { ADD_TO_CART, DELETE_ALL, REMOVE_FROM_CART, REMOVE_PRODUCT } from "./types";

const initialState = {
    mass: [] 
}

export const storageReducer = (state=initialState, action)=>{
    switch(action.type){
        case ADD_TO_CART:
            const activeId = state.mass.findIndex(item=> item.id === action.id)
            let activeObj = state.mass[activeId]
            let obj = {
                id: action.id, 
                count: 1, 
                value: true
            }
            let newMass = []
            if(activeId === -1){
                newMass = [...state.mass, obj]
            } else {
                obj = {...activeObj, count: ++activeObj.count}
                newMass = [...state.mass.slice(0, activeId), obj, ...state.mass.slice(activeId+1)]
            }
            localStorage.setItem('products', JSON.stringify(newMass))
            return {
                ...state, 
                mass: newMass
            }
        case REMOVE_FROM_CART: 
            const activeIndex = state.mass.findIndex(item=>item.id === action.id)
            const activeProduct = state.mass[activeIndex]
            let countDec = {...activeProduct, count: --activeProduct.count}
            let newArr = [...state.mass.slice(0, activeIndex), countDec, ...state.mass.slice(activeIndex+1)]
            if(activeProduct.count < 1){
                newArr = [...state.mass.slice(0, activeIndex), ...state.mass.slice(activeIndex+1)]
            }
            localStorage.setItem('products', JSON.stringify(newArr))
            return {
                ...state, 
                mass: newArr, 
            }
        case REMOVE_PRODUCT:
            const index = state.mass.findIndex(item=>item.id ===action.id)
            const deleteProduct  = [...state.mass.slice(0, index), ...state.mass.slice(index+1)]
            localStorage.setItem('products', JSON.stringify(deleteProduct))
            return {
                ...state, 
                mass: deleteProduct
            }
        case DELETE_ALL:
            return{
                ...state, 
                mass: []
            }
        default:
            return state
    }
}

