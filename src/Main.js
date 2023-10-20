import Hero from "./Hero";
import Heighlights from "./highlights";
import Testimonials from "./Testimonials";
import About from "./about";
import Booking from "./booking"
import {Routes, Route} from "react-router-dom"
import Bookingconfig from "./bookingconfig";
import BookingMEssage from "./bookingmessage";

const Main = () => {
    return (
        <div className="Main">
            <Hero />
            <Routes>
                <Route path="/" element={<Heighlights />} />
                <Route path="/Booking" element={<Booking />} />
                <Route path="/Bookingconfirm" element={<Bookingconfig />} />
                <Route path="/Bookingmessage" element={<BookingMEssage />} />
            </Routes>
            
            <Testimonials />
            <About />

        </div>
    );
};

export default Main;