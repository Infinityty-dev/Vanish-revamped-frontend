import React, { useState } from "react";
import styled from "styled-components";
import { BsEmojiLaughingFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai"; 
import Button from "./Button"; 
import { Link } from "react-router-dom";


const EmailModal = ({ isOpen, onClose, onSubmitEmail }) => {
  const [email, setEmail] = useState("");

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    onSubmitEmail(email);
    setEmail(""); 
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContainer>
        <CloseButton onClick={onClose}>
          <AiOutlineClose />
        </CloseButton>
        <h3>Please enter your email to proceed</h3>
        <form onSubmit={handleEmailSubmit}>
          <EmailInput
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            required
          />
          <Button  type="submit" bgcolor="#126a10" color="white" width={60} height={48} name = "SUBMIT">
            Submit
          </Button>
          <Button  type="submit" bgcolor="red" color="white" width={60} height={48} name = "CANCEL">
            Submit
          </Button>

          
        </form>
      </ModalContainer>
    </ModalOverlay>
  );
};

const EstimateCard = ({ estimate = 0 }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () =>{
    
    console.log("CLicked");
    setIsModalOpen(true);
  
  }
  const handleCloseModal = () => setIsModalOpen(false);
  const handleSubmitEmail = (email) => {
    console.log("Email submitted:", email);
    handleCloseModal();
  };

  return (
    <Container>
      <Cardcontainer>
        <CloseButton onClick={handleCloseModal}>
          <AiOutlineClose /> 
        </CloseButton>
        <h2>Your vanISH estimate!</h2>
        <Emoji>
          <BsEmojiLaughingFill />
        </Emoji>
        <p>Your vanISH estimate is</p>
        <p className="amount">NGN{estimate.toFixed(2)}</p>
        <Button
          name="Pay Now"
          bgcolor="#126a10"
          color="white"
          width={160}
          height={48}
          clickMe={handleOpenModal}
        />

        <p className="amount">₦{estimate.toFixed(2)}</p>
        <Link to="/Payment">
          <Button name="Pay Now" bgcolor="#126a10" color="white" width={160} height={48} />
        </Link>
      </Cardcontainer>

      {/* Email Modal */}
      <EmailModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        onSubmitEmail={handleSubmitEmail}
      />
    </Container>
  );
};

export default EstimateCard;

// Styled components for the modal
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  width: 300px;
  text-align: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
`;

const EmailInput = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: transparent;
  font-size: 22px;
  cursor: pointer;
  color: grey;

  &:hover {
    color: black;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background-color: #f9f9f9;
  padding: 20px;
`;

const Cardcontainer = styled.div`
  background-color: white;
  border-radius: 10px;
  width: 100%;
  max-width: 400px; 
  padding: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  position: relative;
  text-align: center;

  h2 {
    font-size: 20px;
    color: #126a10;
    margin-bottom: 10px;

    @media (max-width: 768px) {
      font-size: 18px;
    }
  }

  p {
    font-size: 16px;
    color: black;
    margin: 5px 0;

    &.amount {
      font-size: 28px;
      color: #126a10;
      font-weight: bold;

      @media (max-width: 768px) {
        font-size: 24px;
      }
    }
  }

  @media (max-width: 768px) {
    width: 90%; 
    padding: 15px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    width: 95%; 
    padding: 10px;
  }
`;

const Emoji = styled.div`
  font-size: 80px;
  margin: 20px 0;
  color: #f0c419;

  @media (max-width: 768px) {
    font-size: 50px;
  }

  @media (max-width: 480px) {
    font-size: 40px;
  }
`;
