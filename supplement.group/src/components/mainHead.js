import React from "react";
import buffLogo from "../img/buff_logo.png";
import priceLogo from "../img/price_logo.png"
function mainHead() {
    return (
        <div className='main_head'>
            <ul>
                <li>Биодобавка <img src={buffLogo} alt=""/></li>
                <li>Описание</li>
                <li>Цена за шт., ₽ <img src={priceLogo} alt=""/> </li>
            </ul>
        </div>
    )
}

export default mainHead();