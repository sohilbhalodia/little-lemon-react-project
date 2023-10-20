import { useNavigate } from "react-router-dom";
import { useState } from "react";



const Booking = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [bookingdate, setBookingDate] = useState("");
    const [bookingtime, setBookingTime] = useState("");
    const [numberGuest, setNumberGuest] = useState("");
    const [occassiondata, setOccassion] = useState("Birthday");
    const [seattingoption, setSettingOption] = useState("");
    const bookingconfignavigate = useNavigate();

    const handeldata = (e) =>{
        e.preventDefault();
        bookingconfignavigate("/Bookingconfirm", {state : {
            firstname : firstName,
            lastname : lastName,
            email : email,
            bookingdate : bookingdate,
            bookingtime : bookingtime,
            numberofguest : numberGuest,
            occassion : occassiondata,
            settingoption : seattingoption
        }});
    }

    return (
        <div className="Booking">
            <div className="booking_Heading">
                <h1>Booking</h1>
            </div>
            <div className="booking_form">
                <form>
                    <fieldset className="booking_contact_info">
                        <label htmlFor="id_in_booking_firstName" id="id_lb_booking_firstname" className="cl_lb_booking_contact_info">First Name</label>

                        <input type="text" 
                            id="id_in_booking_firstName" 
                            className="cl_in_booking" 
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required />

                        <label htmlFor="id_in_booking_lastName" id="id_lb_booking_lastname" className="cl_lb_booking_contact_info">Last Name</label>

                        <input type="text" 
                        id="id_in_booking_lastName" 
                        className="cl_in_booking" 
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required></input>

                        <label htmlFor="id_in_booking_email" id="id_lb_booking_email" className="cl_lb_booking_contact_info">Email</label>
                        <input type='email' 
                            id="id_in_booking_email" 
                            className="cl_in_booking" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required></input>
                    </fieldset>
                    <br />
                    <fieldset className="booking_datetimeguest">
                        <label htmlFor="id_in_booking_datatimeguest_date" id="id_lb_booking_datatimeguest_date" className="cl_lb_booking_datatimeguest">Choose Date</label>
                        <input type="date" 
                            id="id_in_booking_datatimeguest_date" 
                            className="cl_in_booking" 
                            value={bookingdate}
                            onChange={(e) => setBookingDate(e.target.value)}
                            required />

                        <label htmlFor="id_in_booking_datatimeguest_time" id="id_lb_booking_datatimeguest_time" className="cl_lb_booking_datatimeguest">Choose Time</label>
                        <select 
                            id="id_in_booking_datatimeguest_time" 
                            className="cl_in_booking" 
                            value={bookingtime}
                            onChange={(e) => setBookingTime(e.target.value)}
                           >
                            <option>17:00</option>
                            <option>18:00</option>
                            <option>19:00</option>
                            <option>20:00</option>
                            <option>21:00</option>
                            <option>22:00</option>
                        </select>


                        <label htmlFor="id_in_booking_datatimeguest_guest" id="id_lb_booking_datatimeguest_guest" className="cl_lb_booking_datatimeguest">Number of Guest</label>
                        <input 
                            type="number" 
                            placeholder="1" 
                            min="1" 
                            max="10" 
                            id="id_in_booking_datatimeguest_guest" 
                            className="cl_in_booking"
                            value={numberGuest}
                            onChange={(e) => setNumberGuest(e.target.value)}
                         />


                        <label htmlFor="id_in_booking_datatimeguest_occasion" id="id_lb_booking_datatimeguest_occasion" className="cl_lb_booking_datatimeguest">Occasion</label>
                        <select 
                            id="id_in_booking_datatimeguest_occasion" 
                            className="cl_in_booking"
                            value={occassiondata}
                            onChange={(e) => setOccassion(e.target.value)}
                        >
                            <option>Bithday</option>
                            <option>Anniversary</option>
                        </select>
                    </fieldset>
                    <br />
                    <fieldset className="booking_seatingOptions">
                        <label htmlFor="seatingOptions" id="id_lb_booking_seatingOptions">Seating Option</label>


                        <input 
                            type='radio' 
                            id="id_in_booking_seatingOptions_outside" 
                            name="seatingoption" 
                            value="outside" 
                            onChange={(e) => setSettingOption(e.target.value)} />
                        <label htmlFor="id_in_booking_seatingOptions_outside" id="id_lb_booking_seatingOptions_outside">outside</label>

                        <input 
                            type='radio' 
                            id="id_in_booking_seatingOptions_inside" 
                            name="seatingoption" 
                            value="inside" 
                            onChange={(e) => setSettingOption(e.target.value)}
                        />
                        <label htmlFor="id_in_booking_seatingOptions_inside" id="id_lb_booking_seatingOptions_inside">inside</label>
                    </fieldset>

                    <br />
                    <fieldset className="cl_btn_Booking_button">
                        <button id="id_btn_booking" onClick={handeldata}>Make a booking</button>
                    </fieldset>

                </form>
            </div>
        </div>
    );
}

export default Booking;