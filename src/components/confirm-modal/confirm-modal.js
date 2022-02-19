import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { ConfirmModalClose } from '../../redux/actions';
import './confirm-modal.css'; 

function ConfirmModal(){
    const dispatch = useDispatch()
    return (
        <div className="confirm-modal">
            <span className="confirm-modal-close" onClick={()=>dispatch(ConfirmModalClose(false))}>&times;</span>
            <div className="confirm-modal-text">
                <h3>Спасибо за заказ</h3>
                <p>Отслеживайте статус вашего заказа в профиле.</p>
            </div>
            <Link to="/category"><button className="confirm-modal-btn" onClick={()=>dispatch(ConfirmModalClose(false))}>На главную</button></Link>
        </div>
    )
}

export default ConfirmModal