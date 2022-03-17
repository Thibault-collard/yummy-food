import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import Rating from '../Rating/Rating';

const Wrapper = styled.div`
    padding: 50px 100px 50px 0;
    font-size: 30px;
    img{
        height: 60px;
        width: 60px;
        border-radius : 100%;
        border: 1px solid rgba(0,0,0,0.1)
    };
`
const TotalReviews = styled.div`
    font-size: 18px;
`
const TotalOutOf = styled.div`
    font-size: 18px;
    font-weight: bold;
`

const ButtonHome = styled.div`
    font-size:15px;
    display: inline-block;
    border-radius: 3px;
    padding: 0.5rem 0.5rem 0.5rem 0.5rem;
    margin: 0.5rem 1rem;
    width: 11rem;
    color: #9C242F;
    border: 1px solid #9C242F;
`
const Header = (props) => {
    const {name, image_url, avg_score} = props.attributes
    const total = props.reviews.length
    return (
        <Wrapper>
            <Link to={"/"}> 
                 <ButtonHome> Back to homepage </ButtonHome> 
            </Link>
            <h2><img src={image_url} alt={name}/> {name} </h2>
            <div>
                <TotalReviews>{total} user reviews</TotalReviews>
                <Rating score={props.attributes.avg_score}/>
                <TotalOutOf> {total > 0 && ` Average score : ${avg_score}/5`}  </TotalOutOf>
            </div>
        </Wrapper>
    )
}

export default Header