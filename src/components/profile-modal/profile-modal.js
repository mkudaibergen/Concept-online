import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthCheck, ProfileModalClose } from "../../redux/actions";
import './profile-modal.css'; 

function ProfileModal(){
    const dispatch = useDispatch()

    const loggedUser = useSelector(state=>{
        const {formReducer} = state
        return formReducer.loggedUser
    })
    return (
        <div className="profile-modal">
            <span className="profile-modal-close" onClick={()=>dispatch(ProfileModalClose(false))}>&times;</span>
            <p className="profile-name">Профиль {loggedUser}</p>
            <div className="notisifications">
                <p>Уведомления</p>
                <label class="switch">
                    <input type="checkbox"/>
                    <span class="slider round"></span>
                </label>
            </div>
            <button className="profile-modal-btn" onClick={()=>dispatch(AuthCheck(false, 'Войти'), dispatch(ProfileModalClose(false)))}>
                Выйти
            </button>
        </div>
    )
}

export default ProfileModal