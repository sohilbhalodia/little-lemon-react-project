import { useLocation,useNavigate } from "react-router-dom";

const BookingMEssage = () => {

    const HomePage = useNavigate();
    const bokkinginfo = useLocation();

    return(
        <div className="BookingMEssage">
            <h1>Boooking message </h1>
            <h2>Hi {bokkinginfo.state.firstname} {bokkinginfo.state.lastname}</h2>
            <p>Thank you for booking a table. Your booking is confirm</p>
            <button onClick={() => HomePage("/")}>Home</button>
        </div>
    );
}

export default BookingMEssage;