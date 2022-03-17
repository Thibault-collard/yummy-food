import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Wrapper = styled.nav`
  width: 100%;
  height: 68px;
  line-height: 65px;
  background-color: #9C242F;
  color: white;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
`

const Container = styled.div`
  max-width: 1300px;
`

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Left = styled.div`
  flex-basis: auto;
  align-self: flex-start !important;
`

const Right = styled.div`
  flex-basis: 12%;
  align-self: flex-end !important;
  margin-right: 24px;
  a {
    color: #fff;
    text-decoration: none;
    cursor: pointer
  }
`


const Navbar = (props) => {
  return (
        <Wrapper>
          <Container>
            <Nav>
              <Left>
                    <img src='https://resyummy.s3.eu-west-3.amazonaws.com/logo/logo-yummy.png' width="50%"></img> 
              </Left>
              <Right>
              </Right>
            </Nav>  
          </Container>
        </Wrapper>
  )
}

export default Navbar