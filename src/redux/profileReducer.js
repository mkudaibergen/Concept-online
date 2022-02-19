import { PROFILE_MODAL_CLOSE, PROFILE_MODAL_OPEN } from "./types";

const initialState = {
    toggleModal: false
}

export const profileReducer = (state=initialState, action)=>{
    switch(action.type){
        case PROFILE_MODAL_OPEN:
            console.log(action.value)
            return {
                toggleModal: action.value
            }
        case PROFILE_MODAL_CLOSE:
            return {
                toggleModal: action.value
            }
        default: 
        return state
    }
}