import { Stars } from 'lucide-react';
import React from 'react'

export default function RatingComponent() {
    const rating = 4.4; // Giá trị rating
    const maxStars = 5; // Tổng số sao
  
    // Tạo danh sách các sao
    const getStars = () => {
      const stars = [];
      for (let i = 1; i <= maxStars; i++) {
        if (i <= Math.floor(rating)) {
          stars.push("full");
        } else if (i - rating < 1) {
          stars.push("half");
        } else {
          stars.push("empty");
        }
      }
      return stars;
    };
  
    return (
        
      <div className="d-flex align-items-center">
        <span className="text-xl font-bold m-1">{rating.toFixed(1)}</span>
        <div className="flex">
          {getStars().map((type, index) => (
            <Stars
              key={index}
              size={20}
              fill={type === "full" ? "orange" : type === "half" ? "url(#half)" : "none"}
              stroke="orange"
              className="mr-1"
            />
          ))}
        </div>
      </div>
    );
}
