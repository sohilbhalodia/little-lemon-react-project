import specialarray from "./specialarry";


const Heighlights = () => {

    return (

        <div className="Highlights">
            <h1>Specials</h1>
            <button>Onilen Menu</button>
            <div className="Highlights_Specialoffer">
                {specialarray.map((a) => {
                    return (
                        <div key={a.id} className="Highlights_Specialoffer_Infomation">
                            <img src={a.images()} alt={a.altimg} />
                            <h1>{a.name}</h1>
                            <h2>{a.price}</h2>
                            <h3>{a.desc}</h3>
                            <button>Order for delivery</button>
                        </div>
                    );
                })

                }
            </div>

        </div>


    );
}

export default Heighlights;