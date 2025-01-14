import styled from "styled-components"
import Alert from '../assets/Group 3.png'
import Van from '../assets/Van.png'
import Wheel from '../assets/wheel.png'
import Money from '../assets/money.png'
import Health from '../assets/health.png'
import Male from '../assets/Male.png'
import Jo from '../assets/Trifold.png'
import Trifold from '../assets/Jo.png'
import Vector from '../assets/Vector.png'
import A from '../assets/A.png'
import B from '../assets/B.png'
import C from '../assets/C.png'
import D from '../assets/D.png'











const DriversDashboard = ()=>{
    return(
        <Container>
            <Carrier>
             <Sidebar>
                <span id="top">
                 <img src={Trifold} alt=""/>
                </span>


               <span id="sl"> 
                 <img src={Jo} alt=""/>
                 <img src={A} alt=""/>
                 <img src={B} alt=""/>
               </span>

                <span id="tl">
                  <img src={Vector} alt=""/>
                </span>

                <span id="bottom">
                  <img src={C} alt=""/>
                  <img src={D} alt=""/>
                </span>


                
                  

                
                

                 
               
             </Sidebar>

                <Fullbar>
                    <Navbar>
                        <span><img src={Alert} alt="" id="min"/></span>
                        <span><img src={Male}/></span>
                    </Navbar>
                   <WelcomeMessage>

                     <h2>Welcome Christian Daniels</h2>
                     <p>where do you want to start today</p>

                   </WelcomeMessage>

                   <Record>
                    <h3>Records</h3>
                    {/* <hr></hr> */}
                    
                   </Record>

                    <RecordsSection>
                      <Row1>
                        <Card className="lemon">
                           <Icon>
                            <img src={Van} alt=""/>
                           </Icon>
                           <Recordtext>
                            <span>Total No. of Deliveries</span>
                            <value>0</value>
                           </Recordtext>
                        </Card>
                        <Card id="blue"> 
                          <Icon>
                          <img src={Wheel} alt=""/>
                          </Icon>
                          <Recordtext>
                            <span>Total No. of completed Deliveries</span>
                            <value>0</value>
                          </Recordtext>
                       </Card>
                      </Row1>

                      <Row2>
                        <Card id="green">
                          <Icon>
                          <img src={Money} alt=""/>
                          </Icon>
                          <Recordtext>
                            <span>
                                Total No. of Amount earned
                            </span>
                            <value>$0</value>
                          </Recordtext>
                          
                        </Card>
                        <Card id="red">
                          <Icon>
                          <img src={Health} alt=""/>
                          </Icon>
                          <Recordtext>
                            <span>
                              Total No. of Complains
                            </span>
                            <value>0</value>
                          </Recordtext>
                       </Card>
                      </Row2>


                    </RecordsSection>
                </Fullbar>
            </Carrier>
        </Container>

    )
}
export default DriversDashboard

const Container = styled.div`
display: flex;
height:inherit;
width: 100%;
/* background-color: orange; */

    
`
const Carrier = styled.div`
display: flex;
height: inherit;
width: 100%;
/* background-color: green; */


`

const Sidebar = styled.div`
width: 35px;
background-color: #FAFAFA;
height: inherit;
display:block;
align-items:center;

#top{
    display: block;
    align-items: center;
    margin-top:35px;
}

#sl{
    display: block;
    margin-top: 40px;
}
#tl{
    display: block;
    margin-top:30px;
    margin-bottom:10px;
}

#bottom{
    display:block;
    margin-top: 150px;
}

    
`

const Fullbar = styled.div`
height: 100%;
width: 100%;
    
`
const Navbar = styled.div`
    display: flex;
    justify-content: flex-end;
    gap:10px;
    align-items:center;
    margin-top: 2px;
    background-color:#FAFAFA;
    /* background-color: blue; */

    img{
        border-radius: 50%;
        object-fit:cover;
        width: 25px;
    }
    #min{
        width: 20px;
    }
`

const WelcomeMessage = styled.div`
border: 1px solid #126A10;
height: 100px;
width: 95%;
margin-left: 20px;
margin-top: 20px;
border-radius: 14px;
padding: 15px;

h2{
    margin-bottom: 5px;
}

p{
    color: grey;
}

    
`
const Record =styled.div`

margin: 25px 0px 25px 35px;
/* text-decoration: underline; */
/* border-bottom: 1px solid black; */

    
`

const RecordsSection = styled.div`
/* display: flex; */
margin-left: 30px;




    
`
const Row1 = styled.div`
display:flex;
gap:10px;
margin-bottom: 15px

    
`

const Row2 = styled.div`
display:flex;
gap:10px;
    
    
`


const Card = styled.div`
display: flex;
align-items: center;
justify-content: first baseline;
border:1px solid #126A10;
/* padding: 20px; */
width:400px;
height: 100px;
border-radius: 10px;
margin-bottom:30px;
gap: 15px;






    
`
const Icon =  styled.div`

img{
    width: 50px;
}

`
const Recordtext = styled.div`
display:flex;
flex-direction:column;
    
`
