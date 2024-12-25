import React from 'react'
import styled from 'styled-components'


const ServicesCard = (props) => {
  return (
    <Container>
<div className='before'>
      <div className='Container'>
      <div> {props.img }</div>
        <h2>{props.title}</h2>
        <p>{props.text1}</p>
        <p>{props.text2}</p>
        <p>{props.text3}</p>
        <p>{props.text4}</p>
      </div>
  </div>
    </Container>
  )
}

export default ServicesCard
const Container = styled.div`
padding: 5px;
background:linear-gradient(90deg,#126A10,#a3a516);
border-radius: 10px;



 .Container{position: relative;
  /* border: 5px solid transparent;  */
  border-radius: ${({ borderRadius }) => borderRadius || '10px'}; 
  background: white; 
  background-clip: border-box;
  box-sizing: border-box;
  padding: ${({ padding }) => padding || '30px'};
  width:350px;
  height: 250px;
  border-color:linear-gradient(90deg, #126A10,#a3a516); ;
  /* padding: 30px; */
}
  
  .Container::before {
    content: '';
    position: absolute;
    top: 1px;
    left: 1px;
    right: 1px;
    bottom: 1px;
    z-index: -1;
    border-radius: ${({ borderRadius }) => borderRadius || '10px'};
    background: white;



  }






  .Container {
    /* border: 2px solid transparent; 
    border-image: linear-gradient(90deg, #126A10,#a3a516);
    border-image-slice: 1; */
    /* width:350px;
    height: 250px;
    padding: 30px;
    background-color:white; 
    border-radius: 8px; */

  



  

  h2{
    margin-bottom: 15px;
    color:#126A10;
    font-size: 20px;
  }

  div{
    background-color: #8080803b;
    border-radius: 10px;
    color:#126A10;
    display: inline-block;
    width:60px;
    height: 60px;
    text-align: center;
    align-content: center;
    margin-bottom: 15px;

    img{
      width: 30px;
      margin-bottom: 20px;
    }
  }
} 
  
`