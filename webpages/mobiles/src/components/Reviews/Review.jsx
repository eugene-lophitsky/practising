import React from "react";
import reviews from "../Reviews/reviews";
import "../Reviews/reviews.css";

function ReviewsLayout(props) {
  const { review } = props;
  return (

      <>
        <li className="main-misc-reviews-post">
          <div className="main-misc-reviews-post__avatar">
            <img className="main-misc-reviews-post__img" src={`${review.avatar}`} alt=""/>
          </div>
          <div className="main-misc-reviews-post-body">
            <div className="main-misc-reviews-post-body__user">{`${review.author}`}</div>
            <div className="main-misc-reviews-post-body__vote">
              <input type="radio" id={`${review.id}5`} name={`${review.id}`} /><label htmlFor={`${review.id}5`}></label>
              <input type="radio" id={`${review.id}4`} name={`${review.id}`} /><label htmlFor={`${review.id}4`}></label>
              <input type="radio" id={`${review.id}3`} name={`${review.id}`} /><label htmlFor={`${review.id}3`}></label>
              <input type="radio" id={`${review.id}2`} name={`${review.id}`} /><label htmlFor={`${review.id}2`}></label>
              <input type="radio" id={`${review.id}1`} name={`${review.id}`} /><label htmlFor={`${review.id}1`}></label>
            </div>
          </div>
          
        </li>
        <div className="main-misc-reviews-post-body__theses">
              <p className="main-misc-reviews-post-body__using"><span>Опыт использования: </span>
              {`${review.commentBody.using}`}
              </p>
              <p className="main-misc-reviews-post-body__advantages"><span>Достоинства:</span><br />
              {`${review.commentBody.advantages}`}
              </p>
              <p className="main-misc-reviews-post-body__disadvantages main-misc-reviews_mtb-0">
              <span>Недостатки:</span>
              <br />
              {`${review.commentBody.disadvantages}`}
              </p>
            </div>
        <li className="main-misc-reviews__hr"/>
      </>
  
  );
}

function Review() {
  return (
      <>
      {reviews.map((review) => (
        <ReviewsLayout review={review} key={review.id} />
      ))}
    </>   
  );
}

export default Review;


