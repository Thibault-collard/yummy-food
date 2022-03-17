import React, { Fragment } from "react";
import styled from 'styled-components';
const RatingContainer = styled.div`
    text-align:center;
    border-radius: 4px;
    font-size: 18px;
    padding: 13px 0 10px 0;
    border: 1px solid #e6e6e6;
    background: #fff;
`
const RatingBox = styled.div`
    background : #fff;
    display: flex;
    margin: 5px;
    justify-content: center;
    flex-direction: row-reverse;
    position: relative;
    
    input {
        display:none
    }

    label {
        cursor:pointer;
        width: 40px;
        height: 40px;
        background: url("https://resyummy.s3.eu-west-3.amazonaws.com/icon/star-grey.png");
        background-repeat: no-repeat;
        background-position: center;
        background-size: 70%;
    }

    input:checked ~ label,
    input:checked ~ label ~ label {
        cursor:pointer;
        width: 40px;
        height: 40px;
        background: url("https://resyummy.s3.eu-west-3.amazonaws.com/icon/star-yellow.png");
        background-repeat: no-repeat;
        background-position: center;
        background-size: 70%;
    } 

    input:not(:checked) ~ label:hover,
    input:not(:checked) ~ label:hover ~ label {
        cursor:pointer;
        width: 40px;
        height: 40px;
        background: url("https://resyummy.s3.eu-west-3.amazonaws.com/icon/star-yellow.png");
        background-repeat: no-repeat;
        background-position: center;
        background-size: 70%;
    }
`   
const Field = styled.div`
  border-radius: 4px;
  input {
    width: 96%;
    min-height:50px;
    border-radius: 4px;
    border: 1px solid #E6E6E6;
    margin: 12px 0;
    padding: 12px;
  }
  
  textarea {
    width: 100%;
    min-height:80px;
    border-radius: 4px;
    border: 1px solid #E6E6E6;
    margin: 12px 0;
    padding: 12px;      
  }
`

const SubmitBtn = styled.button`
  color: #fff;
  background-color: #9c242f;
  border-radius: 4px;   
  padding:12px 12px;  
  border: 1px solid #9c242f;
  width:100%;
  font-size:18px;
  cursor: pointer;
  transition: ease-in-out 0.2s;
`

const ReviewWrapper = styled.div`
  padding:20px;
  margin-left: 15px;
  border-radius: 0;
  padding-bottom:80px;
  border-left: 1px solid rgba(0,0,0,0.1);
  height: 74vh;
  padding-top: 100px;
  background: #a7a7a72e;
  padding-right: 80px;
`

const ReviewHeadline = styled.div`
  font-size:20px;
  padding: 15px 0;
  font-weight: bold;
  color: #9c242f;
`

const RatingBoxTitle = styled.div`
  font-size: 20px;
  padding-bottom: 10px;
  font-weight: bold;
  color: #9c242f
`

const ReviewForm = (props) => {

    const ratingOptions = [5,4,3,2,1].map((score,index) => {
        return (
            <Fragment key={index}>
                <input type='radio' value={score} checked={props.review.score == score} name='rating' onChange={()=> console.log(score)} id={`rating-${score}`} />
                <label onClick={props.setRating.bind(this,score)}></label>
            </Fragment>
        )
    })


    return (
        <ReviewWrapper>
            <form onSubmit={props.handleSubmit}>
                <ReviewHeadline> Have an experience with {props.attributes.name} ? Share your review!</ReviewHeadline>
                <Field>
                    <input onChange={props.handleChange} value={props.review.title || ""} type='text' name='title' placeholder='Review Title'/>
                </Field>
                <Field>
                    <input onChange={props.handleChange} value={props.review.description || ""} type='text' name='description' placeholder='Review Description'/>
                </Field>
                <Field>
                    <RatingContainer>
                        <RatingBoxTitle>Rate this Restaurant</RatingBoxTitle>
                        <RatingBox> 
                            {ratingOptions}
                        </RatingBox>
                    </RatingContainer>
                </Field>
                <SubmitBtn type="submit">Submit Your Review</SubmitBtn>
            </form>
        </ReviewWrapper>
    )
}

export default ReviewForm