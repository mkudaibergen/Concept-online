import { useDispatch, useSelector } from "react-redux";
import { GetProducts } from "../../redux/actions";
import { Link } from "react-router-dom";
import './categories.css'; 

function Categories(){
    const dispatch = useDispatch()

    // useEffect(async()=>{
    //     const token = localStorage.getItem('token')
    //     const response = await fetch('https://api.doover.tech/api/products/categories/', {
    //         method: 'GET',
    //         headers: {'Content-Type':'application/json',
    //         Accept: 'application/json',
    //       'Authorization': `Bearer ${token}`
    //     }
    //     })
    //    await response.json()
    //    .then(data=>{
    //         dispatch(CategoryProduct(data))    
    //    })
    // }, [])

    const categories = useSelector(state=>{
        const {dataReducer} = state
        return dataReducer.categories
    })

    return(
        <div className="categories">
            <div className="categories-container container">
                <h2>Категории</h2>
                <div className="categories-items">
                {
                    categories.map(item=>{
                        return (
                            <Link to='/products' key={item.uuid} onClick={()=>dispatch(GetProducts(item.uuid, item.name))}>
                                <div className="categories-item">
                                    <img alt="" src="./img/category.png"/>
                                    <h3>{item.name}</h3>
                                    <p>Куртка/ Верхняя одежда...</p>
                                </div>
                            </Link>
                        )        
                    })
                }
                </div>
            </div>
        </div>
    )
}

export default Categories