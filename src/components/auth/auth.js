import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthCheck} from "../../redux/actions";
import './auth.css'; 

function Auth(){
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [test1, setTest1] = useState(false)
    const [test2, setTest2] = useState(false)
    const [loginClass, setLoginClass] = useState('auth-login')
    const [passwordClass, setPasswordClass] = useState('auth-login')
    const [error, setError] = useState('')  

    const dispatch = useDispatch()

    const users = useSelector(state=>{
        const {formReducer} = state
        return formReducer.users
    })
    const Recover = ()=>{
        setTest1(false)
        setTest2(false)
        setLoginClass('auth-login')
        setPasswordClass('auth-login')
        setError('')
    }
    const handleSubmit = ()=>{
        users.map(item=>{
            if(login === item.login && password === item.password){
                dispatch(AuthCheck(true, item.login))
            }else if(login !== item.login && password === item.password){
                setTest1(true)
                setLoginClass(loginClass + ' ' + 'auth-login_active')
            }else if(login === item.login && password !== item.password){
                setTest2(true)
                setPasswordClass(passwordClass + ' ' + 'auth-login_active')
            }
        })
        setLogin('')
        setPassword('')
        setTimeout(Recover, 2000)
    }
    return (
        <div className="auth-main">
            <div className="auth">
                <p className="auth-title">Войти</p>
                <input className={loginClass} type="text" placeholder={test1 ? 'Неверный логин' : 'Логин'} onChange={(e)=>setLogin(e.target.value)} value={login}/>
                <input className={passwordClass} type="password" placeholder={test2 ? 'Неверный пароль' : 'Пароль'} onChange={(e)=>setPassword(e.target.value)} value={password}/>
                <span className="auth-error">{error}</span>
                <button className="auth-btn" onClick={handleSubmit}>Войти</button>
            </div>
        </div>
        
    )
}

export default Auth