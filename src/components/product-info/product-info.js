import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductInfoClose } from "../../redux/actions";
import './product-info.css'; 

function ProductInfo(){
    const dispatch = useDispatch()

    const products = useSelector(state=>{
        const {dataReducer} = state
        return dataReducer.products
    })
    const activeId = useSelector(state=>{
        const {modalReducer} = state
        return modalReducer.productId
    })
    const activeProduct = products.filter(item=>item.id === activeId)
    return (
        <div className="product-info-main">
            {
                activeProduct.map(item=>{
                    return (
                        <div key={item.id} className="product-info">
                            <span className="product-info-close" onClick={()=>dispatch(ProductInfoClose(false))}>&times;</span>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProductInfo