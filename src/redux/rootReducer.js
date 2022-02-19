import { formReducer } from "./formReducer";
import { productsReducer } from "./productsReducer";
import { modalReducer } from "./modalReducer";
import { storageReducer } from "./storageReducer";
import { profileReducer } from "./profileReducer";
import { dataReducer } from "./dataReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
    formReducer, 
    dataReducer,
    productsReducer, 
    modalReducer, 
    storageReducer, 
    profileReducer
})