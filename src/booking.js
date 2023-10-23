import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { validateEmail } from "./validateemail";



const Booking = () => {
    const [firstName, setFirstName] = useState({value: "", isTouched: false,});
    const [lastName, setLastName] = useState({value: "", isTouched: false,});
    const [email, setEmail] = useState("");
    const [bookingdate, setBookingDate] = useState({value: "", isTouched: false,});
    const [bookingtime, setBookingTime] = useState({value: "", isTouched:false,});
    const [numberGuest, setNumberGuest] = useState({value: "", isTouched:false,});
    const [occassiondata, setOccassion] = useState({value: "", isTouched:false,});
    const [seattingoption, setSettingOption] = useState();
    const bookingconfignavigate = useNavigate();

    

    const getFormValid = () => {
        return(
            firstName.value && lastName.value && email && bookingdate.value && occassiondata.value
        );
    }

    const handeldata = (e) =>{
        e.preventDefault();
        bookingconfignavigate("/Bookingconfirm", {state : {
            firstname : firstName.value,
            lastname : lastName.value,
            email : email,
            bookingdate : bookingdate.value,
            bookingtime : bookingtime.value,
            numberofguest : numberGuest.value,
            occassion : occassiondata.value,
            settingoption : seattingoption
        }});
    }

    

    return (
        <div className="Booking" id="id_booking">
            <div className="booking_Heading">
                <h1>Booking</h1>
            </div>
            <div className="booking_form">
                <form onSubmit={handeldata}>
                    <fieldset className="booking_contact_info">
                        <label htmlFor="id_in_booking_firstName" id="id_lb_booking_firstname" className="cl_lb_booking_contact_info">First Name<sup>*</sup> </label>

                        <input type="text" 
                            id="id_in_booking_firstName" 
                            className="cl_in_booking" 
                            value={firstName.value}
                            onChange={(e) => {setFirstName({...firstName, value:e.target.value})}}
                            onBlur={() => {setFirstName({...firstName, isTouched: true})} }
                            required="true" />
                        {firstName.isTouched && firstName.value.length < 1 ? (<p id="id_booking_p_firstname" >First name required</p>): null}

                        <label htmlFor="id_in_booking_lastName" id="id_lb_booking_lastname" className="cl_lb_booking_contact_info">Last Name <sup>*</sup></label>
                        <input type="text" 
                        id="id_in_booking_lastName" 
                        className="cl_in_booking" 
                        value={lastName.value}
                        onChange={(e) => {setLastName({...lastName, value:e.target.value})}}
                        onBlur={() => {setLastName({...lastName, isTouched: true})}}
                        required></input>
                        {lastName.isTouched && lastName.value.length < 1 ? (<p id="id_booking_p_lastname" >Last name required</p>): null}
                       
                        <label htmlFor="id_in_booking_email" id="id_lb_booking_email" className="cl_lb_booking_contact_info">Email <sup>*</sup></label>
                        <input type='email' 
                            id="id_in_booking_email" 
                            className="cl_in_booking" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required></input>
                        {!validateEmail(email) ? (<p id="id_booking_p_email" >Please enter valid email address</p>): null}
                    </fieldset>
                    
                    <fieldset className="booking_datetimeguest">
                        <label htmlFor="id_in_booking_datatimeguest_date" id="id_lb_booking_datatimeguest_date" className="cl_lb_booking_datatimeguest">Choose Date <sup>*</sup></label>
                        <input type="date" 
                            id="id_in_booking_datatimeguest_date" 
                            className="cl_in_booking" 
                            value={bookingdate.value}
                            onChange={(e) => setBookingDate({...bookingdate, value:e.target.value})}
                            onBlur={() => setBookingDate({...bookingdate, isTouched: true})}
                            required />
                        {bookingdate.isTouched && bookingdate.value.length < 1 ? (<p id="id_p_booking_datatimeguest_date">Date required</p>) : null}

                        <label htmlFor="id_in_booking_datatimeguest_time" id="id_lb_booking_datatimeguest_time" className="cl_lb_booking_datatimeguest">Choose Time <sup>*</sup></label>
                        <select 
                            id="id_in_booking_datatimeguest_time" 
                            className="cl_in_booking" 
                            value={bookingtime.value}
                            onChange={(e) => setBookingTime({...bookingtime, value:e.target.value})}
                            onBlur={() => setBookingTime({...bookingtime,isTouched: true})}
                            required
                           >
                            <option>17:00</option>
                            <option>18:00</option>
                            <option>19:00</option>
                            <option>20:00</option>
                            <option>21:00</option>
                            <option>22:00</option>
                        </select>
                        {bookingtime.isTouched && bookingtime.value.length < 1 ? (<p id="id_p_booking_datatimeguest_time">Time required</p>) : null}

                        <label htmlFor="id_in_booking_datatimeguest_guest" id="id_lb_booking_datatimeguest_guest" className="cl_lb_booking_datatimeguest">Number of Guest <sup>*</sup></label>
                        <input 
                            type="number" 
                            placeholder="1" 
                            min="1" 
                            max="10" 
                            id="id_in_booking_datatimeguest_guest" 
                            className="cl_in_booking"
                            value={numberGuest.value}
                            onChange={(e) => setNumberGuest({...numberGuest, value:e.target.value})}
                            onBlur={() => setNumberGuest({...numberGuest, isTouched: true})}
                            required
                         />
                        {numberGuest.isTouched && numberGuest.value.length < 1 ? (<p id="id_p_booking_datatimeguest_Guest">Number of guest required</p>) : null}

                        <label htmlFor="id_in_booking_datatimeguest_occasion" id="id_lb_booking_datatimeguest_occasion" className="cl_lb_booking_datatimeguest">Occasion <sup>*</sup></label>
                        <select 
                            id="id_in_booking_datatimeguest_occasion" 
                            className="cl_in_booking"
                            value={occassiondata.value}
                            onChange={(e) => setOccassion({...occassiondata, value:e.target.value})}
                            onBlur={() => {setOccassion({...occassiondata, isTouched:true})}}
                        >
                            <option>Bithday</option>
                            <option>Anniversary</option>
                        </select>
                        {occassiondata.isTouched && occassiondata.value.length < 1 ? (<p id="id_p_booking_datatimeguest_occassion">Occassion required</p>) : null}
                    </fieldset>
                    
                    <fieldset className="booking_seatingOptions">
                        <label htmlFor="seatingOptions" id="id_lb_booking_seatingOptions">Seating Option <sup>*</sup></label>


                        <input 
                            type='radio' 
                            id="id_in_booking_seatingOptions_outside" 
                            name="seatingoption" 
                            value="outside" 
                            onChange={(e) => setSettingOption(e.target.value)}  />
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

                    
                    <fieldset className="cl_btn_Booking_button">
                        <button id="id_btn_booking" type="submit" disabled={!getFormValid()}>Make a booking</button>
                    </fieldset>

                </form>
            </div>
        </div>
    );
}

export default Booking;