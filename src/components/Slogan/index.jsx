import { Link } from "react-router-dom";
import "./style.css";

const Slogan = ({ user}) => {
    return (
        <div className="box">
            <div className="box-text">
                <h1>Крафтовые лакомства для собак</h1>
                <p>Всегда свежие лакомства ручной работы с доставкой по России и Миру</p>
            </div>
        </div>  
    )
}

export default Slogan;