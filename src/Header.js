import Nav from "./Nav";
import logo from "./images/Logo .svg"

const Hearder = () => {
    return(
        <>
            <div  class="HeaderDesign">
                <img src={logo} alt="Little Lemon" />
                <Nav />
            </div>
            
        </>
    );

}

export default Hearder;