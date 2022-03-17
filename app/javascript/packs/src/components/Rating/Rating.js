import React from 'react'
import StarRatings from 'react-star-ratings';

const RatingStars = (props) => {
    const score = props.score
    return (
        <div> { score ? 
        <StarRatings
            rating={score}
            starDimension="20px"
            starRatedColor="#ffc315"
            starSpacing="2px"
        />
        : "No reviews"}
            
        </div>
    )
}

export default RatingStars