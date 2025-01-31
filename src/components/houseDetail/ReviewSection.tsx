import React from "react";
import RatingComponent from "../featureComponent/RatingComponent";

const ReviewSection: React.FC = () => {
  const reviews = [
    { id: 1, user: "Alice", comment: "Great place!", rating: 5 },
    { id: 2, user: "Bob", comment: "Very comfortable.", rating: 4 },
    { id: 3, user: "Charlie", comment: "Good value for money.", rating: 4 },
  ];

  return (
    <div className="review-section mt-4">
      <h3>Reviews</h3>
      <div className="d-flex align-items-center mb-3">
        <h1 className="me-2">4.1</h1>
        <RatingComponent />
      </div>
      <p className="ms-2">(49876 reviews)</p>
      <div>
        {reviews.map((review) => (
          <div key={review.id} className="review card mb-3 p-3">
            <h5>{review.user}</h5>
            <RatingComponent />
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
