import { AUTH_CHECK } from "./types";

const initialState = {
    users: [
        {login: 'user1', password: '123'},
        {login: 'user2', password: '123'},
        {login: 'user3', password: '123'},
        {login: 'user4', password: '123'},
        {login: 'user5', password: '123'},
    ], 
    activeUser: false, 
    loggedUser: 'Войти'
}

export const formReducer =(state=initialState, action)=>{
    switch(action.type) {
        case AUTH_CHECK: 
            return {
                ...state, 
                activeUser: action.value, 
                loggedUser: action.login
            }
        default: 
            return state
    }
}