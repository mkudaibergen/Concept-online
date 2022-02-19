import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AddToCart, RemoveFromCart, RemoveProduct, ProductDescription, ConfirmModalOpen, DeleteAll} from '../../redux/actions';
import './cart.css'; 
import ProductInfo from '../product-info/product-info';
import ConfirmModal from '../confirm-modal/confirm-modal';

function Cart(){
    const [product, setProduct] = useState([])
    const [sum, setSum] = useState()
    const dispatch = useDispatch()

    const allProducts = useSelector(state=>{
        const {dataReducer} = state
        return dataReducer.products
    })

    const toggleProduct = useSelector(state=>{
        const {modalReducer} = state
        return modalReducer.toggleProduct
    })
    const toggleCart = useSelector(state=>{
        const {modalReducer} = state
        return modalReducer.toggleCart
    })

    const mass = useSelector(state=>{
        const {storageReducer} = state
        return storageReducer.mass
    })

    useEffect(()=>{
        const arr = []
        let total = 0
        allProducts.forEach(function(a){
            return mass.forEach(function(b){
              if(a.id === b.id){
                arr.push(a)
                return total += a.price*b.count
              }
              setProduct(arr)
              setSum(total)
            })
        })
    }, [mass])
    
    const HandleClearCart = ()=>{
        dispatch(ConfirmModalOpen(true))
        console.log(localStorage.getItem('products'))
        setProduct([])
        localStorage.setItem('products', JSON.stringify([]))
        dispatch(DeleteAll())
    }
    return (
        <div className="cart">
            <div className="container cart-container">
                <div className="cart-left">
                    {
                        product.map(item=>{
                            return <div key={item.id} className="cart-item">
                                        <img onClick={()=>dispatch(ProductDescription(true, item.id))} className="cart-item-info" alt="" src="./img/question.svg"/>
                                        <img className="cart-item-img" alt="" src="./img/cart-img.png"/>
                                        <div className="cart-item-details">
                                            <span className="cart-item-title">{item.title}</span>
                                            <span className="cart-item-delivery">Срок доставки/2 дня</span>
                                        </div>
                                        <div className="cart-item-counter">
                                                <img src="./img/plus.svg" alt="" onClick={()=>dispatch(AddToCart(item.id))}/>
                                                {
                                                    mass.map(res=>{
                                                        if(res.id === item.id){
                                                            return <span key={res.id}>{res.count}</span>
                                                        }
                                                    })
                                                }
                                                <img src="./img/minus.svg" alt="" onClick={()=>dispatch(RemoveFromCart(item.id))}/>
                                        </div>
                                        <span className="cart-item-price">{item.price} тг</span>
                                        <span className="cart-item-delete" onClick={()=>dispatch(RemoveProduct(item.id))}>&times;</span>
                                    </div>
                        })
                    }
                </div>
                <div className="cart-right">
                    <h3>ИТОГО</h3>
                    <hr></hr>
                    <span className="cart-total-items">Количество товара: {product.length}</span>
                    <span className="cart-total-price">Общая сумма {sum}тг</span>
                    <button className="cart-total-btn" onClick={HandleClearCart}>Оформить</button>
                </div>
                {toggleProduct ? <ProductInfo/> : null}
                {toggleCart ? <ConfirmModal/> : null}
            </div>
        </div>
    )
}

export default Cart