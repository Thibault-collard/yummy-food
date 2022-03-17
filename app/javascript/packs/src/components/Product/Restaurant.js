import React,{useState,useEffect, Fragment } from "react";
import {useParams} from "react-router-dom";
import axios from 'axios';
import Header from './Header';
import Review from './Review'
import ReviewForm from './ReviewForm';
import styled from "styled-components"

const Wrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
    display: grid;
    grid-template-columns: repeat(2,1fr);
`
const Column = styled.div`
    background: #fff;

    & last-child{
        background: #000
    }
`
const Main = styled.div`
    padding-left:50px
`
const Restaurant = (props) => {
    const [restaurant,setRestaurant] = useState({})
    const [review, setReview] = useState({})
    const [loaded,setLoaded] = useState(false)
    const { slug } = useParams();

    useEffect(()=>{
        
        const url = `/api/v1/restaurants/${slug}`

        axios.get(url)
        .then(resp => {
            setRestaurant(resp.data)
            setLoaded(true)
        }).catch(resp => console.log(resp))
    },[])

    const handleChange = (e) => {
        e.preventDefault()
        setReview(Object.assign({},review,{[e.target.name]: e.target.value}))
    }
    const handleSubmit = (e) => {

        const csrfToken = document.querySelector('[name=csrf-token]').content
        axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

        const restaurant_id = restaurant.data.id
        axios.post('/api/v1/reviews',{review,restaurant_id})
        .then(resp => {
            const included = [...restaurant.included,resp.data]
            setRestaurant(...restaurant,included)
            setReview({title: '',description:'',score: 0})
        })
        .catch(resp => {})
    }

    const setRating = (score, e) => {
        e.preventDefault()
        setReview(prevState => ({
            ...prevState,
            score: score
        }))
    }
    let display_reviews;
    if(loaded && restaurant.included){
        display_reviews = restaurant.included.map((item,index) => {
            return (
                <Review
                    key={index}
                    attributes={item.attributes}
                />
            )
        })
    }
    

    return (
        <Wrapper>
           {
               loaded && 
               <Fragment>
                   <Column>
                        <Main>
                            <Header
                                attributes={restaurant.data.attributes}
                                reviews={restaurant.included}
                            />
                        {display_reviews}
                        </Main>   
                    </Column> 
                    <Column>
                        <ReviewForm
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                            setRating={setRating}
                            attributes={restaurant.data.attributes}
                            review={review}
                        />
                    </Column>
                </Fragment>
            }
        </Wrapper>
    )
}

export default Restaurant