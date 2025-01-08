import React from "react";
import styled from "styled-components";
import { BsEmojiLaughingFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai"; 
import Button from "./Button"; 

const EstimateCard = ({ onClose, estimate = 0 }) => {
  return (
    <Container>
      <Cardcontainer>
        <CloseButton onClick={onClose}>
          <AiOutlineClose textalign/> 
        </CloseButton>
        <h2>Your vanISH estimate!</h2>
        <Emoji>
        <BsEmojiLaughingFill />
        </Emoji>
        <p>Your vanISH estimate is</p>
        <p className="amount">${estimate.toFixed(2)}</p>
        <Button name="Pay Now" bgcolor="#126A10" color="white" width={160} height={48} /> 
      </Cardcontainer>
    </Container>
  );
};

export default EstimateCard;

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
  width: 400px;
  padding: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  position: relative;
  text-align: center;

  h2 {
    font-size: 20px;
    color: #126A10;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    color: black;
    margin: 5px 0;

    &.amount {
      font-size: 28px;
      color: #126A10;
      font-weight: bold;
    }
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: transparent;
  font-size: 24px;
  cursor: pointer;
  color: grey;

  &:hover {
    color: black;
  }
`

const Emoji = styled.div`
  font-size: 60px;
  margin: 20px 0;
  color: #f0c419;
`;
