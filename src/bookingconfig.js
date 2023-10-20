import { useLocation,useNavigate } from "react-router-dom";


const Bookingconfig = () =>{

    const bookingdata = useLocation();
    const bookingmessage = useNavigate();
    const handledata = (e) => {
        bookingmessage("/bookingmessage", {state: {
            firstname: bookingdata.state.firstname,
            lastname: bookingdata.state.lastname
        }});

    }

    
    
    return(
        <div className="cl_bookingconfig">
            <h1>Booking conformation</h1>
            <table>
                <tr>
                    <td>Name:</td>
                    <td>{bookingdata.state.firstname}  {bookingdata.state.lastname}</td>
                </tr>
                <tr>
                    <td>Email:</td>
                    <td>{bookingdata.state.email}</td>
                </tr>
                <tr>
                    <td>Date:</td>
                    <td>{bookingdata.state.bookingdate}</td>
                </tr>
                <tr>
                    <td>Time:</td>
                    <td>{bookingdata.state.bookingtime}</td>
                </tr>
                <tr>
                    <td>Number of guest:</td>
                    <td>{bookingdata.state.numberofguest}</td>
                </tr>
                <tr>
                    <td>Occassion:</td>
                    <td>{bookingdata.state.occassion}</td>
                </tr>
                <tr>
                    <td>Setting:</td>
                    <td>{bookingdata.state.settingoption}</td>
                </tr>
            </table>
            <button onClick={handledata}>Let's Go</button>
        </div>
    );
}

export default Bookingconfig;