import './products.css'; 
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { AddToCart, ProductDescription, RemoveFromCart } from '../../redux/actions';
import { Link } from 'react-router-dom';
import ProductInfo from '../product-info/product-info';

function Products(){
    const dispatch = useDispatch()

    // useEffect(async()=>{
    //     const token = localStorage.getItem('token')
    //     const response = await fetch('https://api.doover.tech/api/products/', {
    //         method: 'GET',
    //         headers: {'Content-Type':'application/json',
    //         Accept: 'application/json',
    //       'Authorization': `Bearer ${token}`
    //     }
    //     })
    //    await response.json()
    //    .then(data=>{
    //         dispatch(AllProducts(data))    
    //    })
    // }, [])

    const allProducts = useSelector(state=>{
        const {dataReducer} = state
        return dataReducer.newProducts
    })
    const activeId = useSelector(state=>{
        const {productsReducer} = state
        return productsReducer.activeId
    })
    const activeCategory = useSelector(state=>{
        const {productsReducer} = state
        return productsReducer.activeCategory
    })
    const toggleProduct = useSelector(state=>{
        const {modalReducer} = state
        return modalReducer.toggleProduct
    })
    const activeProducts = allProducts.filter(item=>item.category === activeId)

    const mass = useSelector(state=>{
        const {storageReducer} = state
        return storageReducer.mass
    })

    useEffect(()=>{
        localStorage.setItem('products', JSON.stringify(mass))
    }, [mass])

    return(
        <div className="products">
            <div className="products-container container">
                <h4><Link to="/category" className="title">Главная</Link> / <span className='category-name'>{activeCategory}</span></h4>
                <div className="products-items">
                    {
                        activeProducts.map(item=>{
                            const productsMass = mass.filter(res=>res.id === item.id)
                            return (
                                <div key = {item.id} className="products-item">
                                    <img className="products-item-img" src="./img/product-img.png" alt=""/>
                                    <div className="products-item-details">
                                        <span className="products-item-title">{item.title}</span>
                                        <span className="products-item-delivery">Срок доставки/2 дня</span>
                                        <span className="products-item-price">{item.price}</span>
                                        <div className="products-item-cart">
                                            <img src="./img/plus.svg" alt="" onClick={()=>dispatch(AddToCart(item.id))}/>
                                            {
                                                productsMass.map(item=>{
                                                    return <span key={item.id} className="products-item-counter">{item.count}</span>
                                                })
                                            }
                                            {
                                                productsMass.map(item=>{
                                                    if(item.value){
                                                        return <img key={item.id} src="./img/minus.svg" alt="" onClick={()=>dispatch(RemoveFromCart(item.id))}/>
                                                    }
                                                })
                                            }
                                        </div>
                                    </div>
                                    <img alt="" onClick={()=>dispatch(ProductDescription(true, item.id))} className="products-item-info" src="./img/question.svg"/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            {toggleProduct ? <ProductInfo/> : null}
        </div>
    )
}

export default Products