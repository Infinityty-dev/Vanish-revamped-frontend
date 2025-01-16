import styled from "styled-components"
import { Link } from "react-router-dom";
import React, { useState } from 'react';




const Movement = () => {
        const [serviceType, setServiceType] = useState('');
        const [pickUpDate, setpickUpDate] = useState('');
        const [pickUpLocation, setpickUpLocation] = useState('');
        const [pickUpZone, setpickUpZone] = useState ('')
        const [dropOffLocation, setdropOffLocation] = useState ('')
        const [dropOffZone, setdropOffZone] = useState ('')
        
        
    
return(

    <Main>
        <Head>
            <h3>Movement Details</h3>
        </Head>

        <p id="move">Move from A to Z</p>

        <Form >

            <p id="para">Enter the following details</p>
         <Contain>
            <label className="move-label" htmlFor="" >Service Type</label> <br /> <br />
            <select className="select" name="service option">
            <option value= "Residence"> HOME</option> 
            <option value= "Warehouse">WAREHOUSE</option>
            <option value = "Office"> OFFICE</option>
            </select> <br /> <br />
            <label className="move-label" htmlFor="">Pick-Up Date</label><br /> <br />
            <input className="move-input" type="date" placeholder="29/10/2024"/><br /> <br />

            <label className="move-label" htmlFor="">Pick-Up Address</label> <br /> <br />
            <input className="move-input" type="text" placeholder="1, Muba Abiru street, Ikorodu" /> <br /> <br />
            <label className="move-label" htmlFor="">Pick-Up Zone</label><br /> <br />
            <input className="move-input" type="text" placeholder="Lagos"/> <br /> <br />
            <label className="move-label" htmlFor="">Drop-Off Address</label><br /> <br />
            <input className="move-input" type="text" placeholder="10,Shagamu street, Igando"/> <br /> <br />
            <label className="move-label" htmlFor="">Drop-Off Zone</label> <br /> <br />
            <input className="move-input" type="text" placeholder="Shagamu..."/> <br /> <br />

             <Link to="/Location">
            <button>Submit</button> </Link>
            </Contain>
        </Form>



    </Main>
)

}

export default Movement

const Main = styled.div`
    height: 900px;
    background-color: #FAFAFA;
    #move{
        text-align:center;
        font-style: italic;
        color: #126a10;
    }

    @media (max-width: 429px) {
        height: 900px;
    background-color: #FAFAFA;
    #move{
        text-align:center;
        font-style: italic;
        color: #126a10;
    }


    }

    @media (max-width: 900px) {
        height: 900px;
    background-color: #FAFAFA;
    #move{
        text-align:center;
        font-style: italic;
        color: #126a10;
    }

    }

`
const Head = styled.div`
    height: 80px;
    /* border: 1px solid #126a10; */
    box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;

    h3{
        text-align: center;
        padding-top: 35px;
        display:flex;
        justify-content: center;
        
    }

    @media (max-width: 429px) {
        height: 80px;
        box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;

    h3{
        text-align: center;
        padding-top: 35px;
        display:flex;
        justify-content: center;
        
    }

    }

    @media (max-width: 900px) {

        height: 80px;
        box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;

    h3{
        text-align: center;
        padding-top: 35px;
        display:flex;
        justify-content: center;
        
    }
    }

`

const Form = styled.div`
    
      height: 750px;
      width: 350px;
      /* border: 1px solid; */
      margin: auto;
      margin-top: 35px;
      box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
     border-radius: 10px;
     background-color: white;
     
    

     #para{

     text-align: center;
     padding-top: 20px;
     font-size: 12px;
     color: #126a10;
     }

     @media (max-width: 429px) {
        height: 750px;
      width: 350px;
      /* border: 1px solid; */
      margin: auto;
      margin-top: 35px;
      box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
     border-radius: 10px;
     background-color: white;
     
    

     #para{

     text-align: center;
     padding-top: 20px;
     font-size: 12px;
     color: #126a10;
     }

     }

     @media (max-width: 900px) {

        height: 750px;
      width: 350px;
      /* border: 1px solid; */
      margin: auto;
      margin-top: 35px;
      box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
     border-radius: 10px;
     background-color: white;
     
    

     #para{

     text-align: center;
     padding-top: 20px;
     font-size: 12px;
     color: #126a10;
     }
     }
     
     
`
const Contain = styled.div`
padding-left: 30px;

.move-label{
        color: #126a10;
        font-size: 12px;
        font-weight: 700
     }


.move-input{
    border-radius: 10px;
    height: 40px;
    width: 300px;
    border-color: #F8F8F8;
    background-color: #f3f0f0 ; 
    border: none;
    padding-left:15px;
}

.select{
    border-radius: 10px;
    height: 40px;
    width: 300px;
    border-color: #F8F8F8;
    background-color: #f3f0f0 ; 
    border: none;
    padding-left:15px;
}

button{
      background-color: #126A10;
      width:200px;
      height:40px;
      border-radius: 15px;
      color: white;
      border:none;
      margin-left: 50px;
      margin-top: 20px;
    
      
   }

   @media (max-width: 429px) {
    padding-left: 30px;

.move-label{
        color: #126a10;
        font-size: 12px;
     }


.move-input{
    border-radius: 10px;
    height: 40px;
    width: 300px;
    border-color: #F8F8F8;
    background-color: #f3f0f0 ; 
    border: none;
    padding-left:15px;
}

button{
      background-color: #126A10;
      width:200px;
      height:40px;
      border-radius: 15px;
      color: white;
      border:none;
      margin-left: 50px;
      margin-top: 20px;
    
      
   }


   }

   @media (max-width: 900px) {

    padding-left: 30px;

.move-label{
        color: #126a10;
        font-size: 12px;
     }


.move-input{
    border-radius: 10px;
    height: 40px;
    width: 300px;
    border-color: #F8F8F8;
    background-color: #f3f0f0 ; 
    border: none;
    padding-left:15px;
}

button{
      background-color: #126A10;
      width:200px;
      height:40px;
      border-radius: 15px;
      color: white;
      border:none;
      margin-left: 50px;
      margin-top: 20px;
    
      
   }


   }


`