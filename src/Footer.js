import logo from "./images/Logo .svg"

const Footer = () =>{
    return(
       <div className="Footer">
            <div className="Footer_Logo">
                <img src={logo} alt="Logo" />
            </div>
            <div className="Footer_Navigation">
                <h1>Doormat</h1>
                <h2>Navigation</h2>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Reservation</li>
                    <li>Order online</li>
                    <li>Login</li>
                </ul>
            </div>
            <div className="Footer_Contact">
                <h1> Contact </h1>
                <h2>Address</h2>
                <h2>Phone number</h2>
                <h2>Email</h2>
            </div>
            <div className="Footer_SocialMedia">
                <h1>Social Media Links</h1>
                <h2>Address</h2>
                <h2>Phone number</h2>
                <h2>Email</h2>
            </div>
       </div>
    );
};

export default Footer;