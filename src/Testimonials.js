import reviewarray from "./reviewarry";

const Testimonials = () =>{
    return(
        <div className="Testiminials">
            <div className="Testiminials_Name">
            <h1>Testiminials</h1>
            </div>
            <div className="Testiminials_Data">
            {reviewarray.map((props) => {
                return(
                    <div className="Testiminials_Data_Information" key={props.id}>
                        <h3 className="Testiminials_Data_Information_rating">{props.rating}</h3>
                        <img src={props.imgs() } alt={props.alt} />
                        <h3 className="Testiminials_Data_Information_name">{props.name}</h3>
                        <h3 className="Testiminials_Data_Information_message">{props.rating}</h3>
                    </div>
                )
                })} 
            
            </div>
        </div>
    );
}

export default Testimonials;