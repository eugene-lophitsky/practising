import feedbackAvatar from "../assets/img/feedback-avatar.svg";

function Feedback () {
    return (
        <div className="feedback">
            <div className="feedback__wrapper">
                <div className="feedback__title">Our coffee perfection feedback</div>
                <div className="feedback__subtitle">Our customers has amazing things to say about us</div>

                <div className="feedback-body">
                <div className="feedback-body__quote-sign">“</div>
                    <div className="feedback-body__quote">
                    Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard 
                    dummy text ever since the 1500s, when 
                    an unknown printer took a galley of type
                    and scrambled it to make a type specimen
                    book. It has survived not only five 
                    centuries, but also the leap into 
                    electronic typesetting, remaining essentially
                    unchanged. It was popularised in the 1960s
                     with the release of Letraset.....
                    </div>
                    <div className="feedback-body__author">
                        <div className="feedback-body__author-name">Jonny Thomas</div>
                        <div className="feedback-body__author-post">Project Manager</div>
                    </div>
                    <div className="feedback-body__avatar">
                        <img src={feedbackAvatar} alt="" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Feedback;