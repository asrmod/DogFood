import "./style.css";
import BannerImage from "./banner.jpg";

const Banner = (props) => {
    return (
        <div className="banner-box">
            <img src={BannerImage} alt="BannerImage"/>
            <h2 className="banner-title">{props.title}</h2>
            <p className="banner-text">{props.text}</p>
        </div>
    )
}

export default Banner;