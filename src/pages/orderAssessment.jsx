import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../Component/Button';

const OrderAssessment = () => {
  return (
    <Container>
      
      <BackArrow>
        <Link to="/" className="back-link">
          <img
            src="https://res.cloudinary.com/dxldk0ytk/image/upload/v1733402389/Vector_1_oaoxv2.png"
            alt="Back"
          />
        </Link>
      </BackArrow>

      <ContainerText>Based on your order assessement</ContainerText>
      <TruckImage
        src="https://res.cloudinary.com/dxldk0ytk/image/upload/v1733402497/van-removebg-preview_1_by98oi.png"
        alt="Truck"
      />

      <Note>
        Note: If you require a larger van or truck, please select a larger option from the catalog.
      </Note>

      <ForwardButton>
        <img
          src="https://res.cloudinary.com/dxldk0ytk/image/upload/v1733402456/Vector_gkrofo.svg"
          alt="Forward"
        />
      </ForwardButton>

      <SummaryContainer>
        <SummaryBox>
        <SummarySection>
          <Title>Travel Summary:</Title>
          <Text>
            <span>Pickup:</span>
            <span>1 Muba Abiru Street Ikorodu</span>
          </Text>
          <Text>
            <span>Drop-Off:</span>
            <span>388 Herbert Macaulay Wy.</span>
          </Text>
          <Title>Price Summary:</Title>
          <Text>
            <span>Rent Charge:</span>
            <span>N 100,000.00</span>
          </Text>
          <Text>
            <span>Required Services:</span>
          </Text>
          <Text>
            <span>Packaging & Loading</span>
          </Text>
          <Text>
            <span>Cleaning Service</span>
          </Text>
          <Text>
            <span>Offloading</span>
          </Text>
          <Services>
            <span>Services:</span>
            <span>N 70,000.00</span>
          </Services> 
        </SummarySection>

        <SummarySection>
          <Title>Services Summary:</Title>
          <Text>
            <span>Van/Truck:</span>
            <span>Hiace White 2032</span>
          </Text>
          <Text>
            <span>Distance:</span>
            <span>81.1km</span>
          </Text>

          <Title>Order Schedule:</Title>
          <Text>
            <span>Date:</span>
            <span>21-11-2024</span>
          </Text>
          <Text>
            <span>Time:</span>
            <span>Now</span>
          </Text>
        </SummarySection>
     </SummaryBox>
        
        
      </SummaryContainer>

      <Footer>
      <Button name= 'Book Now' bgcolor='#126A10' color='white' />
      </Footer>
    </Container>
  );
};

export default OrderAssessment;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: auto;
  box-sizing: border-box;


  @media (max-width: 350px) {
    width: 350px;
    height: 1076px;
    padding: 15px;
    box-shadow: none;  
  }
`;

const BackArrow = styled.div`
  position: absolute;
  top: 20px;
  left: 600px;
  .back-link {
    border: none;
    cursor: pointer;
  }
`;

const ContainerText = styled.div`
  color: #126a10;
  font-size: 18px;
  margin-bottom: 20px;
  margin-left: 0px;
  text-align: left;
  font-weight: 100;

  @media (max-width: 350px) {
    font-size: 16px; 
  }
`;

const TruckImage = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  margin-bottom: 20px;

  @media (max-width: 350px) {
    max-width: 300px;  
  }
`;

const Note = styled.p`
  font-size: 10px;
  font-family:poppins;
  margin-bottom: 20px;
  color: #d91616;
  text-align: center;

  @media (max-width: 350px) {
    font-size: 8px; 
  }
`;

const ForwardButton = styled.div`
  position: absolute;
  top: 30%;
  right: 600px;
  background-color: #77bc76;
  border-radius: 45%;
  width: 30px;
  padding: 3px;
`;

const SummaryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 30px;
  width: 100%;
  margin-top: 20px;
  
  @media (max-width: 350px) {
    flex-direction: column;
    gap: 15px;  
    }
`;
const SummaryBox = styled.div`
  display: flex;
  gap: 30px;
  flex: 1  1 calc(50% - 15px); 
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  min-width: 250px;

  @media (max-width: 350px) {
    flex: 1 1 100%;  
    padding: 10px;  
  }
`;
const SummarySection = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 20px;
  min-width: 250px;

  @media (max-width: 350px) {
    display: flex;  
    flex-direction: column;
    padding: 10px;
  }
`;

const Title = styled.h3`
  font-size: 16px;
  margin-bottom: 10px;
  color: #2e7d32;
  font-weight: bold;
  font-family:poppins;

  @media (max-width: 350px) {
    font-size: 14px; 
  }
`;

const Text = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #818181;
  margin: 5px 0;

  & span:first-child {
    font-weight: bold;
  }

  @media (max-width: 350px) {
    font-size: 12px;  
  }
`;

const Services = styled.div`
  font-size: 14px;
  font-family: poppins;
  font-weight: bold;
  margin-top: 10px;
  color: #2e7d32;
  display: flex;
  justify-content: space-between;

  @media (max-width: 350px) {
    font-size: 12px; 
  }
`;

const Footer = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  width: 100%;

  @media (max-width: 350px) {
    margin-top: 20px; 
  }
`;
