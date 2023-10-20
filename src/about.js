import MarioandAdrianA from "./images/Mario and Adrian A.jpg";
import MarioandAdrianB from "./images/Mario and Adrian b.jpg";

const about = () => {
    return(
        <div className="about">
            <div className="About_Info">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                    Velit officia consequat duis enim velit mollit. 
            </p>
            </div>
            <div className="About_Img">
            <img className="About_Img_1" src={MarioandAdrianA} alt="Images"/>
            <img className="About_Img_2" src={MarioandAdrianB} alt="Images"/>
            </div>
        </div>
    );
}

export default about;