import cupWithLid from "../assets/img/cup-with-a-lid.webp";

function AmazingMorning () {
    return (
        <div className="amazing-morning">
            <div className="amazing-morning-wrapper">
                <div className="amazing-morning-detailed">
                    <div className="amazing-morning-detailed__title">
                        Get a chance to have an Amazing morning
                    </div>
                    <div className="amazing-morning-detailed__subtitle">
                        We are giving you are one time opportunity to
                        experience a better life with coffee.
                    </div>
                    <a href="" className="amazing-morning-detailed__button">Order Now</a>
                </div>
                <div className="amazing-morning__image">
                    <img src={cupWithLid} alt="" />
                </div>
            </div>
        </div>
    )
}

export default AmazingMorning;