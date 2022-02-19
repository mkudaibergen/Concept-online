import React from 'react'; 
import './footer.css'; 

function Footer(){
    return(
        <div className="footer">
            <div className="footer-container container">
                <img src="./img/logo.svg" alt=""/>
                <div className="footer-links">
                    <a href="https://www.whatsapp.com/"><img alt="" src="https://www.citypng.com/public/uploads/preview/-41601136190yenci08e6p.png"/></a>
                    <a href="https://www.facebook.com/"><img alt="" src="https://i.pinimg.com/originals/ea/18/f4/ea18f407cfaed0202d265cf6cf1ac62b.png"/></a>
                    <a href="https://www.youtube.com/"><img alt="" src="https://i7.pngguru.com/preview/77/688/874/youtube-play-button-computer-icons-youtube.jpg"/></a>
                </div>
                <p>+7 (708) 380 - 70 - 09</p>
            </div>
        </div>
    )
}

export default Footer