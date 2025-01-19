import map from "../../public/mapimg.jpg"
import styled from "styled-components"
import car from "../../public/whitevan.png"
import driver from "../../public/man.png"
import CardOne from "./Card"
import bg from "../assets/bg.jpg"
import { Link } from "react-router-dom"



const Driver = () => {

return(
    <Background>
        <img src="" alt="" />
    <Order>
    <Map>
   <img src= {map} alt="" />
   </Map>
   <h4>Drivers Found</h4>
   <p>Waiting for driver to comfirm the order</p>
   <Row>
   <CardOne className = "card1" img ={driver} alt ="" text = "Kris Daniel" p="100Metres (10mins away)" review= "4.9 (531 reviews" motor = {car} />
   <CardOne className = "card1" img ={driver} alt ="" text = "Hamed Adebayo" p="100Metres (2mins away)" review= "2.9 (131 reviews" motor = {car} />
   </Row>
   <Row>
   <CardOne className = "card1" img ={driver} alt ="" text = "Kris Daniel" p="100Metres (5mins away)" review= "4.9 (531 reviews" motor = {car} />
   <CardOne className = "card1" img ={driver} alt ="" text = "Kris Daniel" p="100Metres (15mins away)" review= "4.9 (531 reviews" motor = {car} />
   </Row>
   <Link to="/OrderAssessment">
            <button>Submit</button> </Link>
   
   

   </Order>


   </Background>

)

}



export default Driver

const Background = styled.div`
height: 100vh;
background-repeat: no-repeat;
background-size: cover;
background-image:  linear-gradient(rgba(0, 0, 0, 0.5), rgba(0,0,0,0.5)), url(${bg});
`

const Order = styled.div`
    background-color: white;
/* border: 1px solid; */
width: 600px;
margin: auto;
p{
    font-size: 12px;
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
`
const Map = styled.div`
        
    img{
        width: 600px;
        height: 300px;
    }

   
`
const Row = styled.div`
    
    display: flex;
    flex-direction : row;
    margin-top: 10px;
    margin-left: 5px;    

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

    
`






