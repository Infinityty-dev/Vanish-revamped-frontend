import styled from "styled-components"
import React, { useState } from 'react';
import { Link } from "react-router-dom";





const SignUpPage = ()=> {
    const [email, setEmail] = useState('');
    const [phonenumber,setPhonenumber] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    
    if (email === 'husseinashehu@gmail.com' && password === '123456' && phonenumber === '08121116319') {
      setError('');
      alert('Sign-in successful!');
    } else {
      setError('Invalid email or password');
    }
  };



   
   
   
   
   
    return(
        <Carrier>
            <Signwrapper>
                <Signtitle>
                    <h2>
                        <span>Sign </span>
                        <span>Up</span>
                    </h2>
                    
                    <hr></hr>
                    <p>It is not long before you embark on this journey!</p>

                </Signtitle>
                <form onSubmit={handleSubmit}> 
                    <Label>Email Address</Label>
                    <Input type="text"
                    name = "name@email.com"
                    value = {email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder = "name@email.com"/>
                    
                    
                    
                    

                    <Label>Phone Number</Label>
                    <Input 
                    type = "phone number" name = "phone number"
                    value={phonenumber}
                    onChange={(e) => setPhonenumber(e.target.value)}
                    placeholder = "Enter Phone Number"/>
                

                
                
                   

                    <Label>Password</Label>
                    <Input type="password"
                    name = "password"
                    value = {password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder = "Enter Password"/>
                    
                    
                    

                    

                    

                </form>
                {error && <ErrorText>{error}</ErrorText>}
               
                <Box>
                    <input type="checkbox" id="checkbox"/> 
                    <span>I have read and agreed with the 
                    <Link to="/Terms">
                        <span className="red"> Terms of Service </span> </Link> and 

                        <br/> our Privacy Policy</span>.

                    
                   
                </Box>
               <Link to="/Movement">
                <Button>
                    Continue

                </Button>
                </Link>

                <p>


                    Already have an account? <Link to = "/SignIn"> <span>Sign In</span> </Link>

                </p>
            </Signwrapper>
        </Carrier>
    )

}   
export default SignUpPage

const Carrier = styled.div`
display: flex;
height: inherit;
/* background-color: #126A10; */
justify-content: center;
align-items: center;
    
`
const Signwrapper = styled.div`
    background-color: white;
    width: 100%;
    max-width:400px;
    border-radius: 10px;
    padding: 25px;
    
    border: 1px solid #F8F8F8 ;

    p{
        font-size: 15px;
        text-align: center;
    }
    span{
        color:  #126A10;

        text-decoration: none;

    }
    
    


`

const Signtitle = styled.div`
    
     text-align: center;
     margin-bottom: 17px;
     font-family: Poppins;
     /* line-height: 8px; */

     span:first-child{
        color: black;
     }

     span:last-child{
        color: #126A10;
     }

   
    p{
        text-align: center;
        font-size: 12px;
        font-family: Poppins;
        margin-top: 15px;

       
}
@media (max-width: 400px){
            display: flex;
            flex-direction: column;
            justify-content: center;
            line-height: 15px;
            
        }
        @media (max-width: 900px) {
       max-width: 100%;
       align-items: center;
       text-align: center;

        }

    
    


    
`

const Input = styled.input`
width: 90%;
padding: 10px;
margin: 10px 0;
border: 1px solid #D7C525;
margin-left: 12px;
/* border: 1px solid #126A10; */
/* box-sizing: border-box; */

&::placeholder{
    color: #F8F8F8;
    
}


border-radius: 10px;
font-size: 15px;
/* display: block; */

&:focus {
    outline: none;
}

    
`
const Label = styled.label`

    color: #126A10;
    font-family: Poppins;
    display: block;
    margin-left: 12px;

`


const Box = styled.div`
display: flex;
gap: 4px;
margin-left: 17px;


checkbox{
    width: 12px;
height: 12px;
color: white;
background-color: white;
border-radius:3px;
border: 2px solid #126A10;
}
span{
    margin-top: 2px;
    font-size: 14px;
    text-align: center;
    color: black;

}
.red{
    color: #D91616;
}

`
const Button = styled.button`
    width: 94%;
    padding: 10px;
    border-radius: 15px;
    border: 2px solid #126A10;
    margin: 10px 0;
    height: 40px;
    background-color: #126A10;
    color: white;
    cursor: pointer;
    margin-left: 11px;



    
`
