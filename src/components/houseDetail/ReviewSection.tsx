import React from "react";
import RatingComponent from "../featureComponent/RatingComponent";

interface ReviewSectionProps {
  rating: number;
}
export default function ReviewSection({rating}: ReviewSectionProps) {
  const reviews = [
    { id: 1, user: "Alice", comment: "Great place!", rating: 5 },
    { id: 2, user: "Bob", comment: "Very comfortable.", rating: 4.8 },
    { id: 3, user: "Charlie", comment: "Good value for money.", rating: 4.2 },
  ];
  const formattedRating = Number.isInteger(rating) ? rating.toFixed(1) : rating;
  return (
    <div className="review-section mt-4">
      <h3>Reviews</h3>
      <div className="d-flex align-items-center mb-3">
        <h1 className="me-2">{formattedRating}</h1>
        <RatingComponent rating={rating} />
      </div>
      <p className="ms-2">({reviews.length} reviews)</p>
      <div>
        {reviews.map((review) => (
          <div key={review.id} className="review card mb-3 p-3">
            <h5>{review.user}</h5>
            <RatingComponent rating={review.rating} />
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

