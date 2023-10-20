import restinfo from "./images/restauranfood.jpg"
import { useNavigate } from "react-router-dom";

const Hero = () => {
    const navi = useNavigate();
    return (
        <div className="Hero">
            <div className="Hero_Info">
                <h1>Little Lemon </h1>
                <h2>Chicago</h2>
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
                <button onClick={() => navi("/Booking")}>Reserve a table</button>
            </div>
            <div className="Hero_Img">
                 <img src={restinfo} alt="Resturant Info" /> 
            </div>
        </div>
    );
};

export default Hero;