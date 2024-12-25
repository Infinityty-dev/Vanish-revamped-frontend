import styled from 'styled-components'
import { GiHamburgerMenu } from "react-icons/gi"
import Button from '/src/Component/Button.jsx'
import React from 'react'

const Header = () => {
  return (
    <Container>
        <div class='logo'>
            <img src="/logo.png" alt="vanish logo" />
        </div>
        <div class='nav'>
            <ul id="nav">
                <a href="/"><li>Home</li></a>
                <a href="/services"><li>Services</li></a>
                <a href="/about-us"><li>About Us</li></a>
            </ul>
            <ul id="nav2">
                <a href="/"><li>Home</li></a>
                <a href="/services"><li>Services</li></a>
                <a href="/about-us"><li>About Us</li></a>
            </ul>
            <GiHamburgerMenu className="hamburger" onClick={() => {document.getElementById('#nav2').classList.toggle('show')}} />
        </div>
        <div class='btn'>
        <a href="/SignUp"><Button name='Sign Up' bgcolor='#126A10' color='white ' width= {160} height={48}/></a>
        <Button name='Log In' bgcolor='white' color='#126A10' width= {160} height={48}/>
            
            
        </div>
    </Container>
  )
}

export default Header

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow:.5px 0.1px 15px lightgrey;
  box-shadow: bl;
  position: sticky;
  top: 0px;
  z-index: 3;
  background-color: white;

  .hamburger{
    display: none;
  }

  .logo{
    img{
      width:150px;
    }
  }

  .nav{
    a{
      text-decoration: none;
      color: black;
    }
    ul{
        list-style: none;
        display: flex;
        gap: 40px;
        
        li{
        cursor: pointer;
       
        }
        li:hover{
          color: #126A10;
          /* text-decoration: underline; */
          font-size: 18px;
          transition: font-size 1.5s ease;
        }
    }
    #nav2{
      display:none; 
    } 
  }
  .btn{
    display:flex;
    gap: 10px;
    .btn1{
    width: 140px;
    height: 40px;
    border-radius: 15px;
    background-color: #126A10;
    color: white;
    border: none;
    cursor: pointer;
    margin-right: 20px;
  }
  .btn2{
    width: 140px;
    height: 40px;
    border-radius: 15px;
    background-color: white;
    color: #126A10;
    border: 1px solid #126A10;
    cursor: pointer;
  }

  }

  @media (max-width: 429px) {


    .logo{
    img{
      width:85px;
    }
  }
    #nav{
      display:none; 
    } 
    /* #nav2 ul li{
      display:none; 
    }  */
    .btn{
      display:none;
    }
    .hamburger{
    display: flex;
  }
  }
  `