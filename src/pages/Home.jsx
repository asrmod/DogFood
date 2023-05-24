import { Link } from "react-router-dom";
import { Journals } from "react-bootstrap-icons";
import Slider from "../components/Slider";
import Slogan from "../components/Slogan";
import Banner from "../components/Banner";

const Home = ({ user, setActive }) => {
    return (<>
        <Slogan />
        <div className="info">

            {user && <Link to="/catalog" className="info-link"><Journals style={{ marginRight: "10px" }} /> Каталог товаров</Link>}
            {!user && <>
                <span className="info-link " onClick={() => setActive(true)}>Авторизуйтесь</span>, чтобы получить доступ к сайту</>}
        </div>
        <Banner title={"Подарок за первый заказ!"} text={"Легкое говяжье - пластины"} />
        <Slider/>
        <Banner title={"Большой ассортимент"} text={"Низкие цены"} />
    </>
    )
}

export default Home;