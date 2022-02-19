import React from 'react'; 
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './header.css'
import ProfileModal from '../profile-modal/profile-modal';
import { ProfileModalOpen, SearchProduct} from '../../redux/actions';

function Header(){
    const dispatch = useDispatch()

    const toggleModal = useSelector(state=>{
        const {profileReducer} = state
        return profileReducer.toggleModal
    })
    const loggedUser = useSelector(state=>{
        const {formReducer} = state
        return formReducer.loggedUser
    })
    return (
        <div className="header">
            <div className="container header-container">
                <div className="menu-header">
                    <Link to="/category">Главная</Link>
                    <Link to="/cart">Корзина</Link>
                </div>
                <div className="logo-header">
                    <Link to="/category"><img alt="" className="logo-img" src="./img/logo.svg" /></Link>
                    <input type="text" placeholder="Найти вещь..." onChange={(e)=>dispatch(SearchProduct(e.target.value))}/>
                    <div className="header_profile">
                        <p>{loggedUser}</p>
                        <img src="./img/profile.svg" alt="" onClick={()=>dispatch(ProfileModalOpen(true))}/>
                    </div>
                </div>
                {toggleModal ? <ProfileModal/> : null}
            </div>
        </div>
    )
}

export default Header