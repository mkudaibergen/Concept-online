import {Route} from 'react-router-dom';
import Auth from "../auth/auth";
import Cart from "../cart/cart";
import Categories from "../categories/categories";
import Footer from "../footer/footer";
import Header from '../header/header'
import Products from "../products/products";
import { useSelector } from "react-redux";


function App(){
    // useEffect(async()=>{
    //     const response = await fetch('https://api.doover.tech/api/token/', {
    //             method: 'POST',
    //             headers: {'Content-Type':'application/json'},
    //             body: JSON.stringify({
    //                 email: "admin@inzgiba.me",
    //                 password: "test123123"
    //             })
    
    //         })
    //         await response.json()
    //         .then(data=>{
    //             localStorage.setItem('token', data.access)
    //         })
    // },[])
    // useEffect(async()=>{
    //         const token = localStorage.getItem('token')
    //         const response = await fetch('https://api.doover.tech/api/users/', {
    //             method: 'GET',
    //             headers: {'Content-Type':'application/json',
    //             Accept: 'application/json',
    //           'Authorization': `Bearer ${token}`
    //         }
    //         })
    //        await response.json()
    //        .then(data=>{
    //            dispatch(AuthForm(data))
    //            console.log(data)          
    //        })
    // }, [])
    const activeUser = useSelector(state=>{
        const {formReducer} = state
        return formReducer.activeUser
    })
    
    return(
        <div className="app">
            <Header/>
            {activeUser ? <Route path="/category" render={()=><Categories/>}/> : <Auth/>}
            <Route path="/products" render={()=><Products/>}/>
            <Route path="/cart" render={()=><Cart/>}/>
            <Footer/>
        </div>
    )
}

export default App